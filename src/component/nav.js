"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm border border-[#d6e0f5] ring-1 ring-[#0A66CC]/10 overflow-hidden">
            <Image
              src="/images/9486e528-852c-46ba-8212-f7a6f55da614.png"
              alt="Reivaj Consultoría Contable y Tributaria"
              width={36}
              height={36}
              className="object-contain scale-[1.05]"
              priority
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[17px] font-semibold text-gray-900 tracking-wide">
              Reivaj
            </span>
            <span className="text-[11px] text-gray-600 font-medium">
              Consultoría Especializada
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-[14px] font-medium text-gray-600 sm:text-lg sm:font-semibold">
          <li><Link href="/" className="hover:text-[#0A66CC] transition">Inicio</Link></li>
          <li><Link href="/nosotros" className="hover:text-[#0A66CC] transition">Nosotros</Link></li>
          <li><Link href="/servicios" className="hover:text-[#0A66CC] transition">Servicios</Link></li>
        </ul>

        <Link
          href="/contacto"
          className="hidden md:inline-block bg-[#0A66CC] hover:bg-[#084b99] text-white text-[13px] font-semibold px-5 py-2 rounded-full shadow-sm transition-all duration-300 hover:-translate-y-0.5"
        >
          Agenda una Consulta
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 hover:text-[#0A66CC] transition"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner">
          <ul className="flex flex-col py-3 text-[15px] font-medium text-gray-700">
            <li><Link href="/" className="block px-6 py-2 hover:bg-gray-50">Inicio</Link></li>
            <li><Link href="/nosotros" className="block px-6 py-2 hover:bg-gray-50">Nosotros</Link></li>
            <li><Link href="/servicios" className="block px-6 py-2 hover:bg-gray-50">Servicios</Link></li>
            <li><Link href="/contacto" className="block px-6 py-2 hover:bg-gray-50">Contacto</Link></li>
            <li className="px-6 py-3">
              <Link
                href="/contacto"
                className="w-full text-center block bg-[#0A66CC] hover:bg-[#084b99] text-white text-[13px] font-semibold px-4 py-2 rounded-full shadow-sm transition-all"
              >
                Agenda una Consulta
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
