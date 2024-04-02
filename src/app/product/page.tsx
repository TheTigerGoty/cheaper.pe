import Image from "next/image";
import PlayStation from '@/assets/img/playstation-foto.png'

export default function Product() {
  return (
    <div>
      <div className="xl:flex container mx-auto my-10">
      <div
        className="xl:w-1/2 flex flex-col items-center mr-20 xl:ml-0 container p-2 xl:p-0"
      >
        {/* <!--Todo: COLUMNA 1--> */}
        <div className="border rounded-xl">
          <Image src={PlayStation} width={600} alt={"Fallabella"} />
        </div>

        <div className="flex xl:mt-20 md:mt-10 mt-5 md:space-x-10 space-x-3">
          <div>
            <Image
              src={PlayStation}
              width={500}
              className={"border rounded-xl"}
              alt={"Fallabella"}
            />
          </div>
          <div>
            <Image
              src={PlayStation}
              width={500}
              className={"border rounded-xl"}
              alt={"Fallabella"}
            />
          </div>
          <div>
            <Image
              src={PlayStation}
              width={500}
              className={"border rounded-xl"}
              alt={"Fallabella"}
            />
          </div>
        </div>
      </div>

      <div className="xl:w-1/2 xl:mt-0 xl:ml-0 mt-10">
        {/* <!--Todo: COLUMNA 2--> */}
        <div className="md:space-y-14 space-y-8">
          <h2 className="pt-sans-bold md:text-3xl text-2xl md:ml-0 ml-3">
            {/* {entry.title} */}
          </h2>

          <div className="flex items-center pt-sans-bold md:ml-0 ml-3">
            <h2 className="md:text-3xl text-xl">
                {/* {entry.price} */}
                </h2>

            <h3
              className="md:text-xl md:ml-10 ml-4 red-product text-white md:py-3 md:px-7 py-2 px-4 rounded-full"
            >
              65% Off (Vs. Precio Promedio)
            </h3>
          </div>

          <h3 className="pt-sans-bold text-xl md:ml-0 ml-3">
            Marca: <span className="pt-sans-regular text-base">
                {/* {entry.brand} */}
                </span>
          </h3>

          <button
            className="btn btn-lg pt-sans-regular md:ml-5 ml-2 text-base w-11/12 text-white orange-product hover:bg-orange"
          >
            <p>Reportar Precio Desactualizado</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              ></path>
            </svg>
          </button>

          <div className="pt-sans-bold">
            <div
              className="grid grid-cols-4 auto-rows-auto gap-4 items-center md:text-lg"
            >
              <div
                className="grid grid-cols-4 gap-4 items-center md:text-lg col-span-4 text-center md:text-left"
              >
                <div className="md:text-xl md:ml-8">
                  <p>Tienda</p>
                </div>
                <div className="md:text-xl md:ml-6">
                  <p>Producto</p>
                </div>
                <div className="md:text-xl md:ml-0">
                  <p>Precio Online</p>
                </div>
                <div className="md:text-xl text-center">
                  <p>Precio Especial</p>
                </div>
              </div>

              <div className="col-span-4 space-y-8 text-grey border-t-2 pt-2">
                {/* {
                  entry.stores.map((store: Store) => (
                    <>
                      <div className="grid grid-cols-4 items-center">
                        <div>
                          <figure>
                            <img src={store.image} width="130" alt="" />
                          </figure>
                        </div>
                        <div className="xl:ml-8 md:ml-7 ml-3 md:text-lg text-sm">
                          <p>{entry.title}</p>
                        </div>
                        <div className="md:ml-12 ml-5">
                          <p>{store.price}</p>
                        </div>
                        <div>
                          <div className="flex flex-col md:ml-4 items-center">
                            <p>S/ 219</p>
                            <div className="text-white text-sm orange-signal w-24 p-1 text-center">
                              <p>Mejor Precio</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div />
                    </>
                  ))
                } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}