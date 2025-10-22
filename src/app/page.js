"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Carrusel from "@/component/carrusel"
import Graphic from "@/component/graphic"
export default function Home() {
  
  return (
    <div className="font-sans text-gray-900 flex flex-col items-center justify-center bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#E0F2FE] overflow-x-hidden">
      
      {/* HEADER INSTITUCIONAL PREMIUM */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full flex flex-col items-center text-center lg:text-left justify-center py-16 px-6 sm:px-10 lg:px-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#E0F2FE]/60 via-white to-[#EFF6FF]/80" />
        <motion.div
          animate={{
            background: [
              "linear-gradient(90deg, rgba(10,102,204,0.15), rgba(96,165,250,0.15))",
              "linear-gradient(90deg, rgba(96,165,250,0.15), rgba(10,102,204,0.15))",
            ],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full opacity-60 blur-3xl"
        />

        <div className="relative z-10 max-w-3xl lg:max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0A1A33]"
          >
            <span className="block">Reivaj</span>
            <span className="block bg-gradient-to-r from-[#0A66CC] via-[#60A5FA] to-[#0A66CC] bg-clip-text text-transparent">
              Consultoría
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mt-4 text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-[#0A66CC] via-[#60A5FA] to-[#10B981] text-transparent bg-clip-text"
          >
            Excelencia Financiera y Confianza Profesional
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-5 text-gray-700 text-base sm:text-lg leading-relaxed"
          >
            Brindamos soluciones integrales en contabilidad, tributación, auditoría y planeamiento financiero. 
            Impulsamos decisiones estratégicas con análisis precisos, visión empresarial y resultados medibles.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.9 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8"
          >
            <Link
              href="/servicios"
              className="bg-gradient-to-r from-[#0A66CC] to-[#60A5FA] hover:from-[#084b99] hover:to-[#0A66CC] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(10,102,204,0.4)] transition-all duration-300"
            >
              Conoce Nuestros Servicios
            </Link>
            <Link
              href="/contacto"
              className="border-2 border-[#0A66CC] text-[#0A66CC] hover:bg-[#0A66CC] hover:text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
            >
              Solicita una Consulta
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[80%] h-[250px] bg-gradient-to-t from-[#0A66CC]/10 via-[#60A5FA]/5 to-transparent blur-3xl rounded-full"
        />
      </motion.section>

      <Carrusel></Carrusel>

      {/* ESTADÍSTICAS */}
      <section className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 py-12 text-center">
        {[["+10", "Años de Experiencia"], ["+250", "Empresas Asesoradas"], ["99%", "Cumplimiento Tributario"], ["100%", "Clientes Satisfechos"]].map(([v, l]) => (
          <motion.div key={l} whileHover={{ scale: 1.03, y: -2 }} transition={{ type: "spring", stiffness: 250, damping: 16 }} className="p-6 bg-white/95 border border-gray-200 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-[#0A66CC]">{v}</h3>
            <p className="text-sm text-gray-600 mt-2">{l}</p>
          </motion.div>
        ))}
      </section>
      <Graphic></Graphic>
    </div>
  )
}
