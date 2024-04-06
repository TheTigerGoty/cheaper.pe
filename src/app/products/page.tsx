'use client'
import { ProductsGeneral } from "@/components/products/ProductsGeneral"
import { useEffect, useState } from "react";

interface Props {
  searchParams: {
    page?: string
    category?: string;
    subcategory?: string | string[]; 
    type?: string | string[]; 
    brand?: string | string[]; 
  }
}

export default function ProductsPage({ searchParams }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(searchParams.page ? parseInt(searchParams.page) : 1);
  const [currentCategory, setCurrentCategory] = useState<string | null>(searchParams.category || null);

  const [currentSubcategory, setCurrentSubcategory] = useState<string[]>(searchParams.subcategory ? (typeof searchParams.subcategory === 'string' ? searchParams.subcategory.split('+') : searchParams.subcategory) : []);

  const [currentType, setCurrentType] = useState<string[]>(searchParams.type ? (typeof searchParams.type === 'string' ? searchParams.type.split('+') : searchParams.type) : []);

  const [currentBrand, setCurrentBrand] = useState<string[]>(searchParams.brand ? (typeof searchParams.brand === 'string' ? searchParams.brand.split('+') : searchParams.brand) : []);


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    updateURL(currentCategory, pageNumber, currentSubcategory, currentType, currentBrand);
  };

  const handleCategoryChange = (category: string) => {
    if (category !== currentCategory) {
      setCurrentCategory(category);
      setCurrentPage(1); 
      setCurrentSubcategory([]); 
      setCurrentType([]);
      setCurrentBrand([]);
      updateURL(category, 1, [], [], []);
    }
  };

  const handleSubCategoryChange = (subcategories: string[]) => {
    setCurrentSubcategory(subcategories);
    updateURL(currentCategory, currentPage, subcategories, currentType, currentBrand);
  };

  const handleTypeChange = (types: string[]) => {
    setCurrentType(types);
    updateURL(currentCategory, currentPage, currentSubcategory, types, currentBrand);
  };

  const handleBrandChange = (brands: string[]) => {
    setCurrentBrand(brands);
    updateURL(currentCategory, currentPage, currentSubcategory, currentType, brands);
  };

  const updateURL = (category: string | null, page: number, subcategories: string[], types: string[], brands: string[]) => {
    let url = `/products?page=${page}`;

    if (category) {
      url += `&category=${encodeURIComponent(category)}`;
    }

    if (subcategories.length > 0) {
      const encodedSubcategories = encodeURIComponent(subcategories.join('+'));
      url += `&subcategory=${encodedSubcategories}`;
    }

    if (types.length > 0) {
      const encodedTypes = encodeURIComponent(types.join('+'));
      url += `&type=${encodedTypes}`;
    }

    if (brands.length > 0) {
      const encodedBrands = encodeURIComponent(brands.join('+'));
      url += `&brand=${encodedBrands}`;
    }

    window.history.pushState(null, '', url);
  };

  useEffect(() => {
    updateURL(currentCategory, currentPage, currentSubcategory, currentType, currentBrand);
  }, [currentCategory, currentPage, currentSubcategory, currentType, currentBrand]);

  useEffect(() => {
    if (searchParams.category) {
      setCurrentCategory(searchParams.category);
    }
    if (searchParams.subcategory) {
      const subcategories = typeof searchParams.subcategory === 'string' ? searchParams.subcategory.split('+').map(subcategory => decodeURIComponent(subcategory)) : searchParams.subcategory;
      setCurrentSubcategory(subcategories);
    }
    if (searchParams.type) {
      const types = typeof searchParams.type === 'string' ? searchParams.type.split('+').map(type => decodeURIComponent(type)) : searchParams.type;
      setCurrentType(types);
    }
    if (searchParams.brand) {
      const brands = typeof searchParams.brand === 'string' ? searchParams.brand.split('+').map(brand => decodeURIComponent(brand)) : searchParams.brand;
      setCurrentBrand(brands);
    }
  }, [searchParams.category, searchParams.subcategory, searchParams.type, searchParams.brand]);

  return (
    <div className="my-7">
      <ProductsGeneral
        currentPage={currentPage}
        currentCategory={currentCategory}
        currentSubcategory={currentSubcategory}
        currentType={currentType}
        currentBrand={currentBrand}
        handlePageChange={handlePageChange}
        handleCategoryChange={handleCategoryChange}
        handleSubCategoryChange={handleSubCategoryChange}
        handleTypeChange={handleTypeChange}
        handleBrandChange={handleBrandChange} />
    </div>
  )
}
