
import { Collapse } from './Collapse'
import React, { useState } from 'react'

interface FilterButtonProps {
    filterCategorySelect: (categoria: string) => void;
    filterSubCategorySelect: (subCategoria: string) => void;
    filterSliderSelect: (event: any) => void;
    filterTypeSelect: (tipo: string) => void;
    filterBrandSelect: (marca: string) => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ filterCategorySelect, filterSubCategorySelect, filterSliderSelect, filterTypeSelect, filterBrandSelect }) => {

    const handleModalShow = () => {
        const modal = document.getElementById('my_modal_3') as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <div>
            <button className="btn" onClick={handleModalShow}>Filtrar</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box h-screen max-w-screen-md">
                    <form method="dialog">
                        <button
                            className="btn btn-md btn-circle btn-ghost absolute text-xl right-2 top-2"
                        >✕</button>
                    </form>
                    <h3 className="pt-sans-bold text-5xl mb-10">Filtros</h3>

                    <Collapse onCategorySelect={filterCategorySelect} onSubCategorySelect={filterSubCategorySelect} onSliderSelect={filterSliderSelect} onTypeSelect={filterTypeSelect} onBrandSelect={filterBrandSelect} />

                </div>
            </dialog>
        </div>
    )
}

