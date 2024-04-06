'use client'

import React, { useEffect, useState } from 'react';
import { Collapse } from './content/Collapse';
import { FilterButton } from './content/FilterButton';
import ProductsCard from './content/ProductsCard';

interface Props {
    currentPage: number;
    currentCategory: string | null;
    currentSubcategory: string[];
    currentType: string[];
    currentBrand: string[];
    handlePageChange: (pageNumber: number) => void;
    handleCategoryChange: (category: string) => void;
    handleSubCategoryChange: (subcategory: string[]) => void;
    handleTypeChange: (type: string[]) => void;
    handleBrandChange: (brand: string[]) => void;
}

export const ProductsGeneral: React.FC<Props> = ({
    currentPage,
    currentCategory,
    currentSubcategory,
    currentType,
    currentBrand,
    handlePageChange,
    handleCategoryChange,
    handleSubCategoryChange,
    handleTypeChange,
    handleBrandChange
}) => {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState<string[]>([]);
    const [selectedSlider, setSelectedSlider] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string[]>([])
    const [selectedBrand, setSelectedBrand] = useState<string[]>([])

    useEffect(() => {
        if (currentCategory !== selectedCategory) {
            setSelectedCategory(currentCategory);
            setSelectedSubCategory(currentSubcategory);
            setSelectedType(currentType);
            setSelectedBrand(currentBrand);
        }
    }, [currentCategory, currentSubcategory, currentType, currentBrand]);

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
        const updatedType = selectedType.includes(tipo)
            ? selectedType.filter(item => item !== tipo)
            : [...selectedType, tipo];
        setSelectedType(updatedType);
        handleTypeChange(updatedType);
    };

    const handleBrandSelect = (marca: string) => {
        const updatedBrand = selectedBrand.includes(marca)
            ? selectedBrand.filter(item => item !== marca)
            : [...selectedBrand, marca];
        setSelectedBrand(updatedBrand);
        handleBrandChange(updatedBrand);
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
