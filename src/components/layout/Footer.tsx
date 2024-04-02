"use client";

import Logo from "@/components/shared/Logo"

export default function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-primary-content flex justify-around bg-base-light dark:bg-navbardark">
      <aside className="col-span-2">
        <Logo />
        <p className="text-xl">
          Encuentra el mismo producto, más barato.
        </p>
      </aside>

      <nav className="text-xl flex flex-col space-y-4">
        <h6 className="footer-title">Servicios</h6>
        <a className="link link-hover">Buscar por nombre</a>
        <a className="link link-hover">Buscar por marca</a>
        <a className="link link-hover">Buscar por categoria</a>
      </nav>

      <nav className="text-xl flex flex-col space-y-4">
        <h6 className="footer-title">Nosotros</h6>
        <a className="link link-hover">Acerca de nosotros</a>
        <a className="link link-hover">Contacto</a>
      </nav>

      <nav className="text-xl flex flex-col space-y-4">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terminos de uso</a>
        <a className="link link-hover">Política de privacidad</a>
        <a className="link link-hover">Política de cookies</a>
      </nav>
    </footer >
  )
}