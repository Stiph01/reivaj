"use client"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white via-[#F6F9FF] to-[#EAF2FD] border-t border-gray-200 py-14 px-6 sm:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-4 gap-10">
        <div className="flex flex-col items-center sm:items-start">
          <Image
            src="/images/reivaj_logo.png"
            alt="Logo Reivaj Consultoría"
            width={120}
            height={120}
            className="mb-4"
          />
          <p className="text-sm text-gray-600 leading-relaxed max-w-xs text-center sm:text-left">
            Excelencia Financiera y Confianza Profesional.  
            Especialistas en asesoría contable, tributaria y financiera.
          </p>
        </div>

        <div>
          <h3 className="text-[#0A66CC] font-semibold text-lg mb-4">Compañía</h3>
          <ul className="space-y-2 text-gray-700">
            <li><Link href="/nosotros" className="hover:text-[#0A66CC]">Nosotros</Link></li>
            <li><Link href="/servicios" className="hover:text-[#0A66CC]">Servicios</Link></li>
            <li><Link href="/contacto" className="hover:text-[#0A66CC]">Contacto</Link></li>
            <li><Link href="/politicas" className="hover:text-[#0A66CC]">Política de Privacidad</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#0A66CC] font-semibold text-lg mb-4">Servicios</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Contabilidad Integral</li>
            <li>Asesoría Tributaria</li>
            <li>Auditoría Financiera</li>
            <li>Planeamiento Financiero</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#0A66CC] font-semibold text-lg mb-4">Contáctanos</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Lima, Perú</li>
            <li>📞 +51 999 888 777</li>
            <li>✉ contacto@reivajconsultoria.com</li>
            <li className="flex gap-3 pt-3">
              <a href="https://www.linkedin.com" target="_blank" className="hover:opacity-80 transition"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={22} height={22} /></a>
              <a href="https://www.facebook.com" target="_blank" className="hover:opacity-80 transition"><Image src="/icons/facebook.svg" alt="Facebook" width={22} height={22} /></a>
              <a href="https://www.instagram.com" target="_blank" className="hover:opacity-80 transition"><Image src="/icons/instagram.svg" alt="Instagram" width={22} height={22} /></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center border-t border-gray-200 mt-12 pt-6 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Reivaj Consultoría Contable y Tributaria. Todos los derechos reservados.</p>
        <p className="mt-1">
          Desarrollado por <span className="font-semibold text-[#0A66CC]">AmautaDev</span> · Innovación & Tecnología Empresarial.
        </p>
      </div>
    </footer>
  )
}
