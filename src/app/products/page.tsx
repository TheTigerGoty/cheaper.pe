'use client'
import { ProductsGeneral } from "@/components/products/ProductsGeneral"
import { useState } from "react";

interface Props {
  searchParams: {
    page?: string
  }
}

export default function ProductsPage({ searchParams }: Props) {

  console.log(searchParams)
  const [currentPage, setCurrentPage] = useState<number>(searchParams.page ? parseInt(searchParams.page) : 1);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="my-7">
      <ProductsGeneral currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  )
}
