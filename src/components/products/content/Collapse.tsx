import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

import React, { useState, type ChangeEvent, useEffect } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
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

  // Estados para almacenar las selecciones del usuario
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

  // UseEffect para reiniciar las subcategorías cada vez que se cambie la categoria elegida por el usuario
  useEffect(() => {
    setSelectedSubCategoriesByCategory({});
  }, [selectedCategory]);

  const toggleCollapse = (section: Section) => {
    setIsCollapsed(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  // Función para manejar la selección de categoría
  const handleCategorySelect = (categoria: string) => {
    setSelectedCategory(categoria);
    setSelectedSubCategory(null);
    onCategorySelect(categoria);
  };

  // Función para manejar el cambio en el slider de precios
  const handleSliderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(event.target.value));
    onSliderSelect(event);
  };

  // Función para manejar la selección de subcategoría
  const handleSubCategorySelect = (subCategoria: string) => {
    const updatedSelectedSubCategoriesByCategory = { ...selectedSubCategoriesByCategory }; // Se crea una copia del estado de "selectedSubCategoriesByCategory" siendo almacenada por updatedSelectedSubCategoriesByCategory, para no modificar el estado original directamente

    const selectedSubCategoriesForCategory = selectedSubCategoriesByCategory[selectedCategory || ''] || []; // Se obtiene las SubCategorias seleccionadas de la Categoria Actual, en caso de que no haya nada seleccionado seria un arreglo vacio

    updatedSelectedSubCategoriesByCategory[selectedCategory || ''] = selectedSubCategoriesForCategory.includes(subCategoria)
      ? selectedSubCategoriesForCategory.filter(item => item !== subCategoria)
      : [...selectedSubCategoriesForCategory, subCategoria]; // Se actualizara "updatedSelectedSubCategoriesByCategory" dependiendo de si la SubCategoria seleccionada ya se encuentra presente dentro del arreglo de SubCategorias seleccionadas. En caso de estar esa se eliminara a traves de filter y en caso de no estar esta se agregara a la lista utilizando la "Sintasis Spread" para asi no modificar el estado original.  

    setSelectedSubCategoriesByCategory(updatedSelectedSubCategoriesByCategory); // Se actualizara el estado "setSelectedSubCategoriesByCategory" segun por el nuevo valor de "updatedSelectedSubCategoriesByCategory"

    setSelectedSubCategory(subCategoria); // Se actualizara el estado "selectedSubCategory" con la SubCategoria seleccionada actualmente

    onSubCategorySelect(subCategoria); // Ayuda a hacer el loading dentro de ProductsCard
  };

  // Función para manejar la selección de tipo específico
  const handleTypeSelect = (tipo: string) => {
    setSelectedType(tipo);
    onTypeSelect(tipo);
  };

  // Función para manejar la selección de marca específica
  const handleBrandSelect = (marca: string) => {
    setSelectedBrand(marca);
    onBrandSelect(marca);
  };

  return (
    <>
      <div className="border p-5 xl:w-96 py-7">
        <div>
          <h3 className="pt-sans-bold text-2xl mb-5">Categorias</h3>
        </div>

        <RadioGroup>
          {categorias.map((categoria, index) => (
            <div className=" flex items-center space-x-2"
              key={index}
            >
              <RadioGroupItem value={categoria} id={categoria} onClick={() => handleCategorySelect(categoria)} />
              <Label htmlFor={categoria} className='text-base'>{categoria}</Label>
            </div>
          ))}
        </RadioGroup>


      </div>

      {/* La sección de precios no depende de ninguna selección en especifico, es independiente*/}
      <div className="border p-5 xl:w-96 mt-5">
        <span className="pt-sans-bold text-2xl collapse-title ">Precios</span>
        <div>

          {/* <Slider>
            <input onChange={handleSliderChange}/>
          </Slider> */}

          {/* <Slider
            min={0}
            max={100}
            step={25}
            onVolumeChange={handleSliderChange} // Maneja el cambio del slider
          /> */}

          <div className='mt-4'>

            <Slider
              defaultValue={[sliderValue]}
              min={1}
              max={6}
              step={1}
              onChange={handleSliderChange} />


          </div>


          <div className=" flex justify-between text-xs mt-4">
            <span>200</span>
            <span>500</span>
            <span>1000</span>
            <span>3000</span>
            <span>6000</span>
          </div>
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
              {subCategorias[selectedCategory].map((subCategoria, index) => ( // Mapeo del array de subcatgorias segun la categoria seleccionada
                <div key={index} className="flex justify-between items-center text-lg">
                  <label htmlFor={subCategoria}>{subCategoria}</label>
                  <Checkbox
                    id={subCategoria}
                    checked={selectedSubCategoriesByCategory[selectedCategory || '']?.includes(subCategoria) || false}
                    onCheckedChange={() => handleSubCategorySelect(subCategoria)}
                  />
                  {/* Renderizado del checkbox segun SubCategoria, Verifica si ha sida seleccionada algunas de las SubCategorias, ya sea si el checkBox es marcada o desmarcado se activara la funcion "handleSubCategorySelect" el cual se encargara de actualzar el estado de las SubCategorias seleccionadas */}
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      )}

      {selectedCategory && selectedSubCategoriesByCategory[selectedCategory || '']?.length > 0 && ( // Condicional doble de si una Categoria y SubCategoria a sido seleccionada, ambas deben ser verdaderas para el renderizado
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
                //Accede a las subCategorias seleccionadas para luego aplanarlos y convertirlos en un Array unico, esto hace que se logre combinar los tipos de cada SubCategoria
                <div key={index} className="flex justify-between items-center text-lg">
                  <label htmlFor={tipo} >{tipo}</label>
                  <Checkbox id={tipo} onClick={() => handleTypeSelect(tipo)} />
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
                  <Checkbox id={marca} onClick={() => handleBrandSelect(marca)} />
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      )}
    </>
  );
};

