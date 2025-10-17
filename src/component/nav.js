import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* LOGO / BRAND */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/images/9486e528-852c-46ba-8212-f7a6f55da614.png"
            alt="Reivaj Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-lg font-semibold text-[#0A66CC] dark:text-blue-400 tracking-wide">
            Reivaj Consultoría
          </span>
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          <li>
            <Link
              href="/"
              className="hover:text-[#0A66CC] transition-colors duration-200"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/nosotros"
              className="hover:text-[#0A66CC] transition-colors duration-200"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/servicios"
              className="hover:text-[#0A66CC] transition-colors duration-200"
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="hover:text-[#0A66CC] transition-colors duration-200"
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* CTA BUTTON */}
        <Link
          href="/contacto"
          className="hidden md:inline-block bg-[#0A66CC] hover:bg-[#084b99] text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5"
        >
          Agenda una Consulta
        </Link>

        {/* MOBILE MENU ICON */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-gray-700 dark:text-gray-200 focus:outline-none hover:text-[#0A66CC]"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
