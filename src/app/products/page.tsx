'use client'
import { ProductsGeneral } from "@/components/products/ProductsGeneral"
import { useEffect, useState } from "react";

interface Props {
  searchParams: {
    page?: string
    category?: string;
    subcategory?: string | string[]; 
  }
}

export default function ProductsPage({ searchParams }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(searchParams.page ? parseInt(searchParams.page) : 1);
  const [currentCategory, setCurrentCategory] = useState<string | null>(searchParams.category || null);
  const [currentSubcategory, setCurrentSubcategory] = useState<string[]>(searchParams.subcategory ? (typeof searchParams.subcategory === 'string' ? searchParams.subcategory.split('+') : searchParams.subcategory) : []);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    updateURL(currentCategory, pageNumber, currentSubcategory);
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setCurrentPage(1); 
    setCurrentSubcategory([]); 
    updateURL(category, 1, []);
  };

  const handleSubCategoryChange = (subcategories: string[]) => {
    setCurrentSubcategory(subcategories);
    updateURL(currentCategory, currentPage, subcategories);
  };

  const updateURL = (category: string | null, page: number, subcategories: string[]) => {
    let url = `/products?page=${page}`;

    if (category) {
      url += `&category=${encodeURIComponent(category)}`;
    }

    if (subcategories.length > 0) {
      const encodedSubcategories = encodeURIComponent(subcategories.join('+'));
      url += `&subcategory=${encodedSubcategories}`;
    }

    window.history.pushState(null, '', url);
  };

  useEffect(() => {
    updateURL(currentCategory, currentPage, currentSubcategory);
  }, [currentCategory, currentPage, currentSubcategory]);

  useEffect(() => {
    if (searchParams.category) {
      setCurrentCategory(searchParams.category);
    }
    if (searchParams.subcategory) {
      const subcategories = typeof searchParams.subcategory === 'string' ? searchParams.subcategory.split('+').map(subcategory => decodeURIComponent(subcategory)) : searchParams.subcategory;
      setCurrentSubcategory(subcategories);
    }
  }, [searchParams.category, searchParams.subcategory]);

  return (
    <div className="my-7">
      <ProductsGeneral
        currentPage={currentPage}
        currentCategory={currentCategory}
        currentSubcategory={currentSubcategory}
        handlePageChange={handlePageChange}
        handleCategoryChange={handleCategoryChange}
        handleSubCategoryChange={handleSubCategoryChange} />
    </div>
  )
}
