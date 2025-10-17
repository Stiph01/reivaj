"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-white via-[#F8FAFF] to-[#EAF2FD] border-t border-slate-200 text-center text-sm text-slate-600 py-10 font-sans">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-[#0A66CC]">
          Reivaj Consultoría Contable y Tributaria
        </span>
        . Todos los derechos reservados.
      </p>
      <p className="mt-2 text-slate-500">
        Desarrollado con excelencia por{" "}
        <span className="font-semibold text-[#0A66CC] hover:text-[#084da0] transition">
          AmautaDev
        </span>{" "}
        · Innovación & Tecnología Empresarial.
      </p>
    </footer>
  );
}
