import Image from "next/image";
import Nav from "@/component/nav";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* MAIN CONTENT */}
      <Nav></Nav>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-center sm:text-left max-w-2xl">
        {/* LOGO */}
        <Image
          src="/logo-reivaj.png"
          alt="Reivaj Consultoría Contable y Tributaria"
          width={160}
          height={160}
          className="rounded-full shadow-lg dark:invert"
          priority
        />

        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
          Reivaj Consultoría Contable y Tributaria
        </h1>
        <h2 className="text-lg sm:text-xl text-[#0A66CC] dark:text-blue-400 font-medium mb-6">
          Excelencia Financiera y Confianza Profesional
        </h2>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mb-10">
          Ofrecemos soluciones integrales en contabilidad, auditoría y
          asesoría tributaria. Nuestro compromiso es brindar precisión,
          cumplimiento y crecimiento sostenible para tu empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#servicios"
            className="rounded-full bg-[#0A66CC] hover:bg-[#084b99] text-white font-semibold shadow-lg px-8 py-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Nuestros Servicios
          </a>
          <a
            href="#contacto"
            className="rounded-full border-2 border-[#0A66CC] text-[#0A66CC] hover:bg-[#0A66CC] hover:text-white font-semibold px-8 py-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Contáctanos
          </a>
        </div>
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-700 py-6 flex flex-wrap justify-center items-center gap-6 text-gray-500 dark:text-gray-400 text-sm">
        <a href="#nosotros" className="hover:text-[#0A66CC] transition-colors">
          Sobre Nosotros
        </a>
        <a href="#servicios" className="hover:text-[#0A66CC] transition-colors">
          Servicios
        </a>
        <a href="#contacto" className="hover:text-[#0A66CC] transition-colors">
          Contacto
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0A66CC] transition-colors"
        >
          LinkedIn →
        </a>
      </footer>
    </div>
  );
}
