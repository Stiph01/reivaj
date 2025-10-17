import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-between p-8 sm:p-20 transition-colors duration-500">
      
      {/* MAIN CONTENT */}
      <main className="flex flex-col items-center text-center sm:items-start sm:text-left gap-8 max-w-3xl animate-fadeIn">
        {/* LOGO */}
        <div className="relative">
          <div className="absolute inset-0 blur-2xl bg-blue-200/40 dark:bg-blue-500/20 rounded-full"></div>
          <Image
            src="/images/9486e528-852c-46ba-8212-f7a6f55da614.png"
            alt="Reivaj Consultoría Contable y Tributaria"
            width={160}
            height={160}
            priority
            className="relative z-10 drop-shadow-lg"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#0A66CC] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
          Reivaj Consultoría Contable y Tributaria
        </h1>

        <h2 className="text-xl sm:text-2xl font-medium text-[#0A66CC] dark:text-blue-400 italic">
          “Excelencia Financiera y Confianza Profesional”
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-2xl">
          Ofrecemos soluciones integrales en contabilidad, auditoría y asesoría
          tributaria. Nuestro compromiso es garantizar <span className="font-semibold text-[#0A66CC]">precisión</span>,{" "}
          <span className="font-semibold text-[#0A66CC]">cumplimiento</span> y{" "}
          <span className="font-semibold text-[#0A66CC]">crecimiento sostenible</span> para tu empresa.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="#servicios"
            className="rounded-full bg-[#0A66CC] hover:bg-[#084b99] text-white font-semibold shadow-lg px-8 py-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Nuestros Servicios
          </a>
          <a
            href="#contacto"
            className="rounded-full border-2 border-[#0A66CC] text-[#0A66CC] hover:bg-[#0A66CC] hover:text-white font-semibold px-8 py-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            Contáctanos
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-wrap justify-center items-center gap-6 text-gray-500 dark:text-gray-400 text-sm">
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
          className="hover:text-[#0A66CC] transition-colors flex items-center gap-1"
        >
          LinkedIn <span className="text-lg">↗</span>
        </a>
      </footer>
    </div>
  );
}
