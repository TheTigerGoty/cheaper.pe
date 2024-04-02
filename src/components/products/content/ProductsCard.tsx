import React, { useState, useEffect } from 'react';
import type { Product } from '@/types/api-ripley';
import { SkeletonProduct } from './SkeletonProduct';
import { ProductCard } from '../ProductCard';
import products from '@/data/products';

interface ProductsCardProps {
    selectedCategory: string | null;
    selectedSubCategory: string | null;
    selectedSlider: any;
    selectedType: string | null;
    selectedBrand: string | null;
}

export const ProductsCard: React.FC<ProductsCardProps> = ({ selectedCategory, selectedSubCategory, selectedSlider, selectedType, selectedBrand }) => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer); // Limpia el temporizador en cada cambio de categoría
    }, [selectedCategory, selectedSubCategory, selectedSlider, selectedType, selectedBrand]); // Ejecutar el efecto cuando cambien las selecciones

    useEffect(() => {
        // Si no hay subcategoría, tipo o marca seleccionada, realiza un refresh de la vista de productos
        if (!selectedSubCategory && !selectedType && !selectedBrand) {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [selectedSubCategory, selectedType, selectedBrand]); // Ejecutar el efecto cuando cambien las selecciones de subcategoría, tipo o marca


    return (
        <div className="space-y-8">
            <h1 className="text-7xl font-bold">{selectedCategory || "Todas las Categorías"}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 md:gap-x-8 justify-items-center xl:gap-x-12 md:ml-2">
                {/* Mostrar SkeletonProduct si loading es true */}
                {loading ? (
                    products.map((_, index) => (
                        <SkeletonProduct key={index} />
                    ))
                ) : (

                    products.map((product: Product, index) => (
                        <ProductCard product={product} size="sm" key={index} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ProductsCard;
