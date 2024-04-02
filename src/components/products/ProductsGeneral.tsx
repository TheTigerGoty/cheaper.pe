'use client'

import React, { useState } from 'react';
import { Collapse } from './content/Collapse';
import { FilterButton } from './content/FilterButton';
import ProductsCard from './content/ProductsCard';

export const ProductsGeneral = () => {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
    const [selectedSlider, setSelectedSlider] = useState<string | null>(null);
    const [selectedType, setSelectedType] = useState<string | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

    const handleCategorySelect = (categoria: string) => {
        setSelectedCategory(categoria);
    };

    const handleSubCategorySelect = (subCategoria: string) => {
        if (selectedSubCategory === subCategoria) {
            // Si la subcategoría actual es la que se está deseleccionando
            setSelectedSubCategory(null); // Desmarcarla
        } else {
            setSelectedSubCategory(subCategoria); // De lo contrario, marcarla
        }
    };

    const handleSliderSelect = (event: any) => {
        setSelectedSlider(event);
    }

    const handleTypeSelect = (tipo: string) => {
        if (selectedType === tipo) {
            setSelectedType(null);
        } else {
            setSelectedType(tipo);
        }
    };

    const handleBrandSelect = (marca: string) => {
        if (selectedBrand === marca) {
            setSelectedBrand(null);
        } else {
            setSelectedBrand(marca);
        }
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
            />
        </section>
    )
}
