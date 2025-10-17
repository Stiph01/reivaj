import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-[#f8fafc] via-white to-[#e2e8f0] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-between p-8 sm:p-20 transition-colors duration-500">
      
      {/* MAIN CONTENT */}
      <main className="flex flex-col items-center text-center sm:items-start sm:text-left gap-8 max-w-3xl animate-fadeIn">
        
        {/* LOGO */}
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-blue-100/50 dark:bg-blue-600/10 rounded-full"></div>
          <Image
            src="/images/9486e528-852c-46ba-8212-f7a6f55da614.png"
            alt="Reivaj Consultoría Contable y Tributaria"
            width={150}
            height={150}
            priority
            className="relative z-10 drop-shadow-lg"
          />
        </div>

        {/* TITLE */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A66CC] dark:text-blue-400 leading-tight">
          Reivaj Consultoría Contable y Tributaria
        </h1>

        <h2 className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300">
          Excelencia Financiera y Confianza Profesional
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-2xl">
          Somos una firma especializada en <strong>contabilidad, asesoría tributaria, auditoría y planeamiento financiero</strong>. 
          Brindamos soluciones integrales que fortalecen la gestión y el cumplimiento fiscal de tu empresa.
        </p>

        {/* SERVICE HIGHLIGHTS */}
        <div className="grid sm:grid-cols-3 gap-6 text-center mt-6">
          <div className="p-4 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition">
            <span className="text-3xl">📊</span>
            <h3 className="font-semibold mt-2 text-[#0A66CC]">Contabilidad</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Registros, balances y reportes financieros.</p>
          </div>
          <div className="p-4 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition">
            <span className="text-3xl">💼</span>
            <h3 className="font-semibold mt-2 text-[#0A66CC]">Asesoría Tributaria</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Cumplimiento fiscal, planificación y auditorías SUNAT.</p>
          </div>
          <div className="p-4 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-xl transition">
            <span className="text-3xl">📈</span>
            <h3 className="font-semibold mt-2 text-[#0A66CC]">Gestión Financiera</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Análisis, presupuestos y proyecciones estratégicas.</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#servicios"
            className="rounded-full bg-[#0A66CC] hover:bg-[#084b99] text-white font-semibold shadow-md px-8 py-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Conoce Nuestros Servicios
          </a>
          <a
            href="#contacto"
            className="rounded-full border-2 border-[#0A66CC] text-[#0A66CC] hover:bg-[#0A66CC] hover:text-white font-semibold px-8 py-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Solicita una Consulta
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-wrap justify-center items-center gap-6 text-gray-500 dark:text-gray-400 text-sm">
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
