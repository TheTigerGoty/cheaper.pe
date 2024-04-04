'use client'
import { ProductsGeneral } from "@/components/products/ProductsGeneral"
import { useEffect, useState } from "react";

interface Props {
  searchParams: {
    page?: string
    category?: string;
  }
}

export default function ProductsPage({ searchParams }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(searchParams.page ? parseInt(searchParams.page) : 1);
  const [currentCategory, setCurrentCategory] = useState<string | null>(searchParams.category || null);


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    updateURL(currentCategory, pageNumber);
  };

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setCurrentPage(1); // Always reset to first page when category changes
    updateURL(category, 1);
  };

  const updateURL = (category: string | null, page: number) => {
    const url = category ? `/products?page=${page}&category=${encodeURIComponent(category)}` : `/products?page=${page}`;
    window.history.pushState(null, '', url);
  };

  useEffect(() => {
    // Update the URL when category changes
    updateURL(currentCategory, currentPage);
  }, [currentCategory]);

  return (
    <div className="my-7">
      <ProductsGeneral currentPage={currentPage} handlePageChange={handlePageChange} handleCategoryChange={handleCategoryChange} />
    </div>
  )
}
