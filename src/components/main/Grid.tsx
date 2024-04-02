import Image from "next/image";
import { Button } from "@/components/ui/button"
import Celular from "@/assets/img/celular.jpg";
import Dormitorio from "@/assets/img/dormitorio.png";
import Electrodomestico from "@/assets/img/electrodomesticos.png";
import PlayStation from "@/assets/img/playstation-foto.png";
import Laptop from "@/assets/img/laptop.png";
import Taladro from "@/assets/img/taladro.png";
import TV from "@/assets/img/TV.png";

export default function Grid() {
  return (
    <div
      className="grid xl:grid-cols-6 xl:grid-rows-8 md:grid-cols-4 md:grid-rows-4 gap-4 text-primary-content"
    >
      <div
        className="xl:col-span-4 xl:row-span-4 md:col-span-2 md:row-span-1 col-span-2 row-span-2 bg-green_grid rounded-3xl"
      >
        <div className="flex justify-between md:mt-10 xl:my-0 my-5">
          <div
            className="w-1/2 flex flex-col items-center justify-center ml-8 xl:mt-10 md:mt-5 space-y-5"
          >
            <h2 className="xl:text-4xl xl:leading-normal">
              Compara los precios de miles de productos con una sola busqueda
            </h2>

            <Button variant="outline">Ver Celulares</Button>
          </div>
          <div className="w-1/2 xl:mt-20 md:mt-5">
            <Image
              src={Celular}
              width={700}
              height={40}
              alt={"celular"}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div
        className="xl:col-span-2 xl:row-span-2 xl:col-start-5 md:col-span-2 md:row-span-1 md:col-start-3 col-span-2 row-span-2 row-start-3 red-grid rounded-3xl text-primary-content"
      >
        <div>
          <div className="h-1/2 flex items-center justify-center md:mt-4">
            <h2 className="text-xl leading-normal my-3 ml-5">
              Descubre las ofertas más bajas del mercado con un solo click
            </h2>
          </div>
          <div className="h-1/2 flex items-center justify-center">
            <Button 
            className="btn sm:btn-sm md:btn-md lg:btn-lg rounded-xl mx-3"
            variant="outline"
            >Ver Televisores</Button>

            <Image src={TV} width={200} height={40} alt={"tv"} />
          </div>
        </div>
      </div>

      <div
        className="xl:col-span-2 xl:row-span-2 xl:col-start-5 xl:row-start-3 md:col-span-2 md:row-span-1 md:row-start-2 col-span-2 row-span-2 row-start-5 black-grid rounded-3xl text-primary-content"
      >
        <div>
          <div className="h-1/2 flex items-center justify-center">
            <h2 className="text-lg leading-normal mt-5 mx-4">
              Encuentra la mejores ofertas comparando al instante
            </h2>
          </div>
          <div className="h-1/2 flex items-center justify-center">
            <Button 
            className="btn sm:btn-sm md:btn-md lg:btn-lg rounded-xl mx-3"
            variant="outline"
            >Ver Electro</Button>
            <Image
              src={Electrodomestico}
              width={200}
              height={40}
              alt={"electrodomestico"}
            />
          </div>
        </div>
      </div>

      <div
        className="xl:col-span-2 xl:row-span-4 xl:row-start-5 md:col-span-2 md:row-span-1 md:col-start-3 md:row-start-2 col-span-2 row-span-2 row-start-7 orange-grid rounded-3xl"
      >
        <div className="mb-3">
          <div
            className="h-1/2 flex xl:flex-col md:flex-row flex-col md:mx-7 items-center justify-center xl:my-0 md:my-0 my-4 text-primary-content"
          >
            <h2
              className="xl:text-3xl md:text-xl text-xl leading-normal xl:my-3 xl:mt-16 md:mt-5 md:mb-0 mb-3"
            >
              La ofertas a tu alcance
            </h2>

            <Button variant="outline">Ver Dormitorios</Button>
          </div>
          <div className="h-1/2 flex items-center justify-center xl:mt-16 md:mt-8">
            <Image
              src={Dormitorio}
              width={350}
              height={40}
              alt={"dormitorio"}
              className="xl:w-96 md:w-80 w-64"
            />
          </div>
        </div>
      </div>

      <div
        className="xl:col-span-2 xl:row-span-4 xl:col-start-5 xl:row-start-5 md:col-span-2 md:row-span-1 md:row-start-3 col-span-2 row-span-2 row-start-9 violet-grid rounded-3xl"
      >
        <div className="my-4">
          <div
            className="h-1/2 flex xl:flex-col md:flex-row flex-col md:mx-7 xl:mx-0 mx-5 items-center justify-center text-primary-content"
          >
            <h2
              className="xl:text-3xl md:text-xl leading-normal xl:my-3 xl:mt-10 md:mt-5 xl:ml-8 md:mb-0 mb-3"
            >
              Todos los productos en menos tiempo
            </h2>

            <Button
              className="btn sm:btn-sm md:btn-md lg:btn-lg rounded-xl xl:mt-10 md:mt-5"
              variant="outline"
            >Ver Herramientas</Button>
          </div>
          <div className="h-1/2 flex items-center justify-center xl:mt-16 md:mt-8 mt-8">
            <Image
              src={Taladro}
              width={380}
              height={40}
              alt={"taladro"}
              className="xl:w-96 md:w-60 w-64"
            />
          </div>
        </div>
      </div>

      <div
        className="xl:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-5 md:col-span-2 md:row-span-1 md:col-start-3 md:row-start-3 col-span-2 row-span-2 row-start-11 grey-grid rounded-3xl"
      >
        <div className="mt-1 mb-5 xl:mb-0 md:mb-5 xl:mt-0 md:mt-3 text-primary-content">
          <div className="h-1/2 flex items-center justify-center">
            <h2 className="text-xl leading-normal my-3 ml-5 text-base-200 px-4">
              Ahorra tiempo en tu manera de comprar
            </h2>
          </div>
          <div className="h-1/2 flex items-center justify-center">
            <Image
              src={PlayStation}
              width={200}
              height={40}
              alt={"playstation"}
            />

            <Button 
            className="btn sm:btn-sm md:btn-md lg:btn-lg rounded-xl mx-3"
            variant="outline"
            >Ver Consolas</Button>
          </div>
        </div>
      </div>

      <div
        className="xl:col-span-2 xl:row-span-2 xl:col-start-3 xl:row-start-7 md:col-span-2 md:row-span-1 md:col-start-2 md:row-start-4 col-span-2 row-span-2 row-start-13 black-grid rounded-3xl"
      >
        <div>
          <div
            className="h-1/2 flex items-center justify-center md:mt-5 text-primary-content"
          >
            <h2 className="text-xl leading-normal my-3 ml-5 px-4">
              Disfruta viendo diversas ofertas y compra con confianza
            </h2>
          </div>
          <div className="h-1/2 flex items-center justify-center xl:mt-5 md:mt-5">
            <Image src={Laptop} width={200} height={40} alt={"laptop"} />

            <Button 
            className="btn sm:btn-sm md:btn-md lg:btn-lg rounded-xl mx-3"
            variant="outline"
            >Ver Laptops</Button>
          </div>
        </div>
      </div>
    </div>
  )
}