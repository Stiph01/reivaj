import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans flex flex-col min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* MAIN CONTENT */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6 sm:px-20 py-16">
        {/* LOGO */}
        <div className="mb-6 transition-transform duration-500 hover:scale-105">
          <Image
            src="/images/9486e528-852c-46ba-8212-f7a6f55da614.png"
            alt="Reivaj Consultoría Contable y Tributaria"
            width={140}
            height={140}
            className="rounded-full shadow-xl dark:shadow-blue-900/30"
            priority
          />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white tracking-tight mb-3">
          Reivaj Consultoría Contable y Tributaria
        </h1>

        {/* SUBTITLE */}
        <h2 className="text-lg sm:text-xl text-[#0A66CC] dark:text-blue-400 font-medium mb-6">
          Excelencia Financiera y Confianza Profesional
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mb-10">
          Ofrecemos soluciones integrales en contabilidad, auditoría y
          asesoría tributaria. Nuestro compromiso es brindar precisión,
          cumplimiento y crecimiento sostenible para tu empresa.
        </p>

        {/* ACTION BUTTONS */}
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

      {/* FOOTER */}
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
