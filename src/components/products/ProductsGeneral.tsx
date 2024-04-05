'use client'

import React, { useEffect, useState } from 'react';
import { Collapse } from './content/Collapse';
import { FilterButton } from './content/FilterButton';
import ProductsCard from './content/ProductsCard';

interface Props {
    currentPage: number;
    currentCategory: string | null;
    currentSubcategory: string[];
    handlePageChange: (pageNumber: number) => void;
    handleCategoryChange: (category: string) => void;
    handleSubCategoryChange: (subcategory: string[]) => void; 
}

export const ProductsGeneral: React.FC<Props> = ({ currentPage, currentCategory, currentSubcategory, handlePageChange, handleCategoryChange, handleSubCategoryChange }) => {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState<string[]>([]);
    const [selectedSlider, setSelectedSlider] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string[]>([])
    const [selectedBrand, setSelectedBrand] = useState<string[]>([])

    useEffect(() => {
        setSelectedCategory(currentCategory);
        setSelectedSubCategory(currentSubcategory);
    }, [currentCategory, currentSubcategory]);

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        setSelectedSubCategory([]);
        setSelectedType([]);
        setSelectedBrand([]);
        handleCategoryChange(category);
    };

    const handleSubCategorySelect = (subCategoria: string) => {
        const updatedSubCategory = selectedSubCategory.includes(subCategoria)
            ? selectedSubCategory.filter(item => item !== subCategoria)
            : [...selectedSubCategory, subCategoria];
        setSelectedSubCategory(updatedSubCategory);
        handleSubCategoryChange(updatedSubCategory);
    };

    const handleSliderSelect = (event: any) => {
        setSelectedSlider(event);
    }

    const handleTypeSelect = (tipo: string) => {
        setSelectedType(prevTypes => {
            if (prevTypes.includes(tipo)) {
                return prevTypes.filter(item => item !== tipo);
            } else {
                return [...prevTypes, tipo];
            }
        });
    };

    const handleBrandSelect = (marca: string) => {
        setSelectedBrand(prevBrands => {
            if (prevBrands.includes(marca)) {
                return prevBrands.filter(item => item !== marca);
            } else {
                return [...prevBrands, marca];
            }
        });
    };

    return (
        <section className="flex space-x-10">

            <aside className="mb-10 xl:block hidden">
                <Collapse
                    onCategorySelect={handleCategorySelect}
                    onSubCategorySelect={handleSubCategorySelect}
                    onSliderSelect={handleSliderSelect}
                    onTypeSelect={handleTypeSelect}
                    onBrandSelect={handleBrandSelect}
                />
            </aside>

            <aside className="xl:hidden block mb-5">
                <FilterButton filterCategorySelect={handleCategorySelect} filterSubCategorySelect={handleSubCategorySelect} filterSliderSelect={handleSliderSelect} filterTypeSelect={handleTypeSelect} filterBrandSelect={handleBrandSelect} />
            </aside>

            <ProductsCard
                selectedCategory={selectedCategory}
                selectedSubCategory={selectedSubCategory}
                selectedSlider={selectedSlider}
                selectedType={selectedType}
                selectedBrand={selectedBrand}
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
        </section>
    )
}
