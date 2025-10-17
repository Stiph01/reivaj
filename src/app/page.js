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

        {/* DESCRIPTION */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Brindamos soluciones integrales en contabilidad, auditoría y asesoría
          tributaria. Ayudamos a tu empresa a crecer con seguridad, confianza y
          cumplimiento fiscal.
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            href="#servicios"
            className="rounded-full bg-[#0A66CC] text-white hover:bg-[#084b99] transition-colors font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 flex items-center justify-center shadow-md"
          >
            Nuestros Servicios
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-[#0A66CC] text-[#0A66CC] hover:bg-[#0A66CC] hover:text-white transition-colors font-medium text-sm sm:text-base h-10 sm:h-12 px-6 sm:px-8 flex items-center justify-center"
          >
            Contáctanos
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-sm text-gray-500 dark:text-gray-400">
        <a
          href="#nosotros"
          className="hover:underline hover:underline-offset-4"
        >
          Sobre Nosotros
        </a>
        <a
          href="#servicios"
          className="hover:underline hover:underline-offset-4"
        >
          Servicios
        </a>
        <a
          href="#contacto"
          className="hover:underline hover:underline-offset-4"
        >
          Contacto
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-4"
        >
          LinkedIn →
        </a>
      </footer>
    </div>
  );
}
