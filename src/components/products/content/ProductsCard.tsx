import React, { useState, useEffect, useCallback } from 'react';
import type { Product } from '@/types/api-ripley';
import { SkeletonProduct } from './SkeletonProduct';
import { ProductCard } from '../ProductCard';
import products from '@/data/products';
import { PaginationProducts } from './PaginationProducts';

interface ProductsCardProps {
    selectedCategory: string | null;
    selectedSubCategory: string[];
    selectedSlider: any;
    selectedType: string[];
    selectedBrand: string[];
}

export const ProductsCard: React.FC<ProductsCardProps> = ({ selectedCategory, selectedSubCategory, selectedSlider, selectedType, selectedBrand }) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const productsPerPage = 3;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const filteredProducts = products.filter((product: Product) => {
        if (selectedCategory && product.category !== selectedCategory) {
            return false;
        }
        if (selectedSubCategory.length > 0 && !selectedSubCategory.includes(product.subcategories.name)) {
            return false;
        }
        if (selectedType.length > 0 && !selectedType.some(type => product.subcategories.type.includes(type))) {
            return false;
        }
        if (selectedBrand.length > 0 && !selectedBrand.some(brand => product.subcategories.brand.includes(brand))) {
            return false;
        }
        return true;
    });

    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [selectedCategory, selectedSubCategory, selectedSlider, selectedType, selectedBrand]);

    useEffect(() => {
        if (!selectedSubCategory && !selectedType && !selectedBrand) {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [selectedSubCategory, selectedType, selectedBrand]);

    return (
        <div className="space-y-8">
            <h1 className="text-7xl font-bold">{selectedCategory || "Todas las Categorías"}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 md:gap-x-8 justify-items-center xl:gap-x-12 md:ml-2">
                {loading ? (
                    Array.from({ length: productsPerPage }).map((_, index) => (
                        <SkeletonProduct key={index} />
                    ))
                ) : (
                    currentProducts.map((product: Product, index) => (
                        <ProductCard product={product} size="sm" key={index} />
                    ))
                )}
            </div>

            <PaginationProducts
                totalPages={totalPages}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
            />
        </div>
    );
};

export default ProductsCard;
