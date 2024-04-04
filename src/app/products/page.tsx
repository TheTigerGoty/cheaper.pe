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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.history.pushState(null, '', `/products?page=${pageNumber}`);
  };

  return (
    <div className="my-7">
      <ProductsGeneral currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  )
}
