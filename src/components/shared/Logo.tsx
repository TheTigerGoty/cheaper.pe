import Image from "next/image"
import LogoSVGBlanco from "@/assets/logo-cheaper-blanco.svg";
import LogoSVGNegro from "@/assets/logo-cheaper-negro.svg";

export default function Logo() {
  return (
    <>
      <Image
        src={LogoSVGNegro}
        width={200}
        height={40}
        alt={"Logo Cheaper.pe"}
        className={"block dark:hidden"}
      />
      <Image
        src={LogoSVGBlanco}
        width={200}
        height={40}
        alt={"Logo Cheaper.pe"}
        className={"hidden dark:block"}
      />
    </>
  )
}