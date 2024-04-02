
import Image from "next/image";
import Fallabella from "@/assets/Logo-Falabella-cheaper.webp";
import Hiraoka from "@/assets/Logo-Hirahoka-cheaper.webp";
import RealPlaza from "@/assets/Logo-Real-Plaza-cheaper.webp";
import Ripley from "@/assets/Logo-Ripley-cheaper.webp";

export default function Marquee() {
  return (
    <div className="relative overflow-x-hidden">
      <div className="flex gap-4 flex-col justify-center items-center">
        <span className="text-xl">Gran variedad de productos</span>
        <h1 className="font-bold md:text-6xl text-3xl">Todo en una busqueda</h1>
      </div>
      <div className="relative md:flex gap-10 overflow-hidden py-5 group">
        <div
          className="md:motion-safe:animate-marquee py-5 overflow-x-auto flex flex-nowrap min-w-full shrink-0 items-center gap-10 snap-x snap-mandatory px-5"
        >
          <div>
            <Image src={Fallabella} width={300} height={40} alt={"Fallabella"} />
          </div>

          <div>
            <Image src={Hiraoka} width={300} height={40} alt={"Fallabella"} />
          </div>

          <div>
            <Image src={RealPlaza} width={300} height={40} alt={"Fallabella"} />
          </div>

          <div>
            <Image src={Ripley} width={300} height={40} alt={"Fallabella"} />
          </div>
        </div>

        <div
          className="md:motion-safe:animate-marquee hidden md:motion-reduce:hidden md:flex min-w-full shrink-0 items-center gap-10"
        >
          <div>
            <Image src={Fallabella} width={300} height={40} alt={"Fallabella"} />
          </div>

          <div>
            <Image src={Hiraoka} width={300} height={40} alt={"Fallabella"} />
          </div>

          <div>
            <Image src={RealPlaza} width={300} height={40} alt={"Fallabella"} />
          </div>

          <div>
            <Image src={Ripley} width={300} height={40} alt={"Fallabella"} />
          </div>
        </div>
      </div>
    </div>
  )
}