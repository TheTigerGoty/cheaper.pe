import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import React, { useState, type ChangeEvent, useEffect, useCallback } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, ChevronUp } from 'lucide-react';
import category from '@/data/category';

type Section = 'subCategorias' | 'tipos' | 'marcas';

interface SubCategorias {
  [key: string]: string[];
}

interface MarcasEspecificas {
  [key: string]: string[];
}

interface tiposEspecificos {
  [key: string]: string[];
}

interface CollapseProps {
  onCategorySelect: (categoria: string) => void;
  onSubCategorySelect: (subCategoria: string) => void;
  onSliderSelect: (event: ChangeEvent<HTMLInputElement>) => void;
  onTypeSelect: (tipo: string) => void;
  onBrandSelect: (marca: string) => void;
}

export const Collapse: React.FC<CollapseProps> = ({ onCategorySelect, onSubCategorySelect, onSliderSelect, onTypeSelect, onBrandSelect }) => {
  const categorias: string[] = category.map(c => c.category)

  const subCategorias: SubCategorias = {};
  category.forEach(cat => {
    subCategorias[cat.category] = cat.subcategories.map(sub => sub.name);
  });

  const tipos: tiposEspecificos = {};
  category.forEach(cat => {
    cat.subcategories.forEach(sub => {
      tipos[sub.name] = sub.types;
    });
  });

  const marcasEspecificas: MarcasEspecificas = {};
  category.forEach(cat => {
    cat.subcategories.forEach(sub => {
      marcasEspecificas[sub.name] = sub.brands;
    });
  });

  const [isCollapsed, setIsCollapsed] = useState({
    subCategorias: true,
    tipos: true,
    marcas: true
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedSubCategoriesByCategory, setSelectedSubCategoriesByCategory] = useState<{ [key: string]: string[] }>({});
  const [selectedTypesByCategory, setSelectedTypesByCategory] = useState<{ [key: string]: string[] }>({});
  const [selectedBrandsByCategory, setSelectedBrandsByCategory] = useState<{ [key: string]: string[] }>({});

  useEffect(() => {
    setSelectedSubCategoriesByCategory({});
  }, [selectedCategory]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryFromUrl = params.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const subcategoryFromUrl = params.getAll('subcategory');
    const selectedSubcategoriesFromUrl = subcategoryFromUrl.flatMap(subcategory => subcategory.split('+'));

    if (selectedSubcategoriesFromUrl.length > 0) {
      const updatedSelectedSubCategoriesByCategory = { ...selectedSubCategoriesByCategory };
      updatedSelectedSubCategoriesByCategory[selectedCategory || ''] = selectedSubcategoriesFromUrl;
      setSelectedSubCategoriesByCategory(updatedSelectedSubCategoriesByCategory);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const typeFromUrl = params.getAll('type');
    const selectedTypesFromUrl = typeFromUrl.flatMap(type => type.split('+'));

    if (selectedTypesFromUrl.length > 0) {
      const updatedSelectedTypesByCategory = { ...selectedTypesByCategory };
      updatedSelectedTypesByCategory[selectedCategory || ''] = selectedTypesFromUrl;
      setSelectedTypesByCategory(updatedSelectedTypesByCategory);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const brandFromUrl = params.getAll('brand');
    const selectedBrandsFromUrl = brandFromUrl.flatMap(brand => brand.split('+'));

    if (selectedBrandsFromUrl.length > 0) {
      const updatedSelectedBrandsByCategory = { ...selectedBrandsByCategory };
      updatedSelectedBrandsByCategory[selectedCategory || ''] = selectedBrandsFromUrl;
      setSelectedBrandsByCategory(updatedSelectedBrandsByCategory);
    }
  }, [selectedCategory]);


  const toggleCollapse = (section: Section) => {
    setIsCollapsed(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const handleCategorySelect = (categoria: string) => {
    setSelectedCategory(categoria);
    setSelectedSubCategory(null);
    onCategorySelect(categoria);
  };

  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value));
    onSliderSelect(event);
  };

  const handleSubCategorySelect = (subCategoria: string) => {
    const updatedSelectedSubCategoriesByCategory = { ...selectedSubCategoriesByCategory };
    const selectedSubCategoriesForCategory = selectedSubCategoriesByCategory[selectedCategory || ''] || [];
    updatedSelectedSubCategoriesByCategory[selectedCategory || ''] = selectedSubCategoriesForCategory.includes(subCategoria)
      ? selectedSubCategoriesForCategory.filter(item => item !== subCategoria)
      : [...selectedSubCategoriesForCategory, subCategoria];
    setSelectedSubCategoriesByCategory(updatedSelectedSubCategoriesByCategory);
    setSelectedSubCategory(subCategoria);
    onSubCategorySelect(subCategoria);
  };

  const handleTypeSelect = (tipo: string) => {
    const updatedSelectedTypesByCategory = { ...selectedTypesByCategory };
    const selectedTypesForCategory = selectedTypesByCategory[selectedCategory || ''] || [];
    updatedSelectedTypesByCategory[selectedCategory || ''] = selectedTypesForCategory.includes(tipo)
      ? selectedTypesForCategory.filter(item => item !== tipo)
      : [...selectedTypesForCategory, tipo];
    setSelectedTypesByCategory(updatedSelectedTypesByCategory);
    setSelectedType(tipo); // Actualizar el estado selectedType
    onTypeSelect(tipo);
  };


  const handleBrandSelect = (brand: string) => {
    const updatedSelectedBrandsByCategory = { ...selectedBrandsByCategory };
    const selectedBrandsForCategory = selectedBrandsByCategory[selectedCategory || ''] || [];
    updatedSelectedBrandsByCategory[selectedCategory || ''] = selectedBrandsForCategory.includes(brand)
      ? selectedBrandsForCategory.filter(item => item !== brand)
      : [...selectedBrandsForCategory, brand];
    setSelectedBrandsByCategory(updatedSelectedBrandsByCategory);
    setSelectedBrand(brand); // Actualizar el estado selectedBrand
    onBrandSelect(brand);
  };

  return (
    <>
      <div className="border p-5 xl:w-96 py-7">
        <div>
          <h3 className="pt-sans-bold text-2xl mb-5">Categorias</h3>
        </div>

        <RadioGroup>
          {categorias.map((categoria, index) => (
            <div
              className=" flex items-center space-x-2"
              key={index}
            >
              <RadioGroupItem
                value={categoria}
                id={categoria}
                className={categoria === selectedCategory ? 'bg-yellow-300' : ''}
                onClick={() => handleCategorySelect(categoria)} />
              <Label htmlFor={categoria} className='text-base'>{categoria}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="border p-5 xl:w-96 mt-5">
        <span className="pt-sans-bold text-2xl collapse-title ">Precios</span>
        <div className="relative mb-6">
          <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
          <input id="labels-range-input" type="range" defaultValue={sliderValue} min="0" max="300" step="100" onChange={handleSliderChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Todos</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 ml-1 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">100</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">1000</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">10000</span>
        </div>
      </div>

      {selectedCategory && (
        <div className="border p-5 xl:w-96 mt-5">
          <Collapsible className='flex flex-col'>
            <CollapsibleTrigger className="pt-sans-bold text-2xl flex items-center justify-between" onClick={() => toggleCollapse('subCategorias')}>
              <span>SubCategorias</span>
              <div className={isCollapsed.subCategorias ? "rotate-down" : "rotate-up"}>
                {isCollapsed.subCategorias ? <ChevronDown /> : <ChevronUp />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className=" pt-sans-regular space-y-5 mt-5 ml-5 mr-1">
              {subCategorias[selectedCategory].map((subCategoria, index) => (
                <div key={index} className="flex justify-between items-center text-lg">
                  <label htmlFor={subCategoria}>{subCategoria}</label>
                  <Checkbox
                    id={subCategoria}
                    checked={selectedSubCategoriesByCategory[selectedCategory || '']?.includes(subCategoria) || false}
                    onCheckedChange={() => handleSubCategorySelect(subCategoria)}
                  />
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      )}

      {selectedCategory && selectedSubCategoriesByCategory[selectedCategory || '']?.length > 0 && (
        <div className="border p-5 xl:w-96 mt-5">
          <Collapsible className='flex flex-col'>
            <CollapsibleTrigger className="pt-sans-bold text-2xl flex items-center justify-between" onClick={() => toggleCollapse('tipos')}>
              <span>Tipos</span>
              <div className={isCollapsed.tipos ? "rotate-down" : "rotate-up"}>
                {isCollapsed.tipos ? <ChevronDown /> : <ChevronUp />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className=" pt-sans-regular space-y-5 mt-5 ml-5 mr-1">
              {selectedSubCategoriesByCategory[selectedCategory || ''].flatMap(subCategoria => tipos[subCategoria] || []).map((tipo, index) => (
                <div key={index} className="flex justify-between items-center text-lg">
                  <label htmlFor={tipo}>{tipo}</label>
                  <Checkbox
                    id={tipo}
                    checked={selectedTypesByCategory[selectedCategory || '']?.includes(tipo) || false}
                    onCheckedChange={() => handleTypeSelect(tipo)}
                  />
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      )}

      {selectedCategory && selectedSubCategoriesByCategory[selectedCategory || '']?.length > 0 && (
        <div className="border p-5 xl:w-96 mt-5">
          <Collapsible className='flex flex-col'>
            <CollapsibleTrigger className="pt-sans-bold text-2xl flex items-center justify-between" onClick={() => toggleCollapse('marcas')}>
              <span>Marcas</span>
              <div className={isCollapsed.marcas ? "rotate-down" : "rotate-up"}>
                {isCollapsed.marcas ? <ChevronDown /> : <ChevronUp />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className=" pt-sans-regular space-y-5 mt-5 ml-5 mr-1">
              {selectedSubCategoriesByCategory[selectedCategory || ''].flatMap(subCategoria => marcasEspecificas[subCategoria] || []).map((marca, index) => (
                <div key={index} className="flex justify-between items-center text-lg">
                  <label htmlFor={marca}>{marca}</label>
                  <Checkbox
                    id={marca}
                    checked={selectedBrandsByCategory[selectedCategory || '']?.includes(marca) || false}
                    onClick={() => handleBrandSelect(marca)} />
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      )}
    </>
  );
};

