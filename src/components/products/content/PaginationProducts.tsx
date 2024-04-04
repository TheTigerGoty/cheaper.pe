import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    handlePageChange: (pageNumber: number) => void;
    handleNextPage: () => void;
    handlePreviousPage: () => void;
}

export const PaginationProducts: React.FC<PaginationProps> = ({ totalPages, currentPage, handlePageChange, handleNextPage, handlePreviousPage }) => {
    const renderPaginationItems = () => {
        const paginationItems = [];

        if (totalPages === 1) {
            paginationItems.push(
                <PaginationItem key={1}>
                    <PaginationLink isActive>{1}</PaginationLink>
                </PaginationItem>
            );
        } else {
            paginationItems.push(
                <PaginationItem key={1} onClick={() => handlePageChange(1)}>
                    <PaginationLink isActive={currentPage === 1}>{1}</PaginationLink>
                </PaginationItem>
            );

            if (currentPage > 4) {
                paginationItems.push(
                    <PaginationItem key="start-ellipsis">
                        <PaginationLink>...</PaginationLink>
                    </PaginationItem>
                );
            }

            for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
                paginationItems.push(
                    <PaginationItem key={i} onClick={() => handlePageChange(i)}>
                        <PaginationLink isActive={currentPage === i}>{i}</PaginationLink>
                    </PaginationItem>
                );
            }

            if (currentPage < totalPages - 2) {
                paginationItems.push(
                    <PaginationItem key="end-ellipsis">
                        <PaginationLink>...</PaginationLink>
                    </PaginationItem>
                );
            }

            paginationItems.push(
                <PaginationItem key={totalPages} onClick={() => handlePageChange(totalPages)}>
                    <PaginationLink isActive={currentPage === totalPages}>{totalPages}</PaginationLink>
                </PaginationItem>
            );
        }

        return paginationItems;
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={handlePreviousPage} />
                </PaginationItem>

                {renderPaginationItems()}

                <PaginationItem>
                    <PaginationNext onClick={handleNextPage} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
