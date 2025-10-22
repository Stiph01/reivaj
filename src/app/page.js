"use client"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { motion, useMotionValue, useTransform } from "framer-motion"

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

export default function Home() {
  const [series, setSeries] = useState([])

  useEffect(() => {
    const data = [
      { mes: "Ene", ingresos: 12000, egresos: 8000 },
      { mes: "Feb", ingresos: 14500, egresos: 9500 },
      { mes: "Mar", ingresos: 16000, egresos: 10000 },
      { mes: "Abr", ingresos: 17500, egresos: 11000 },
      { mes: "May", ingresos: 19500, egresos: 11500 },
      { mes: "Jun", ingresos: 22000, egresos: 13000 },
      { mes: "Jul", ingresos: 25000, egresos: 14500 },
      { mes: "Ago", ingresos: 27500, egresos: 16000 },
      { mes: "Sep", ingresos: 30000, egresos: 17000 },
      { mes: "Oct", ingresos: 33000, egresos: 18000 },
      { mes: "Nov", ingresos: 35000, egresos: 20000 },
      { mes: "Dic", ingresos: 38000, egresos: 21000 },
    ]
    const utilidad = data.map((d) => d.ingresos - d.egresos)
    setSeries([
      { name: "Ingresos", data: data.map((d) => d.ingresos) },
      { name: "Egresos", data: data.map((d) => d.egresos) },
      { name: "Utilidad", data: utilidad },
    ])
  }, [])

  const options = {
    chart: { type: "line", toolbar: { show: false } },
    stroke: { width: 4, curve: "smooth" },
    colors: ["#0A66CC", "#E53E3E", "#10B981"],
    dataLabels: { enabled: false },
    grid: { borderColor: "#e5e7eb", strokeDashArray: 4 },
    markers: {
      size: 5,
      colors: ["#fff"],
      strokeColors: ["#0A66CC", "#E53E3E", "#10B981"],
      strokeWidth: 3,
      hover: { size: 8 },
    },
    xaxis: {
      categories: ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
      labels: { style: { colors: "#555", fontSize: "13px", fontWeight: 500 } },
    },
    yaxis: {
      title: { text: "Soles (PEN)", style: { color: "#333", fontWeight: 600 } },
      labels: { formatter: (val) => `S/ ${val / 1000}k`, style: { colors: "#666", fontSize: "13px" } },
    },
    legend: { position: "top", horizontalAlign: "center", labels: { colors: "#333" } },
    tooltip: { theme: "light", y: { formatter: (val) => `S/ ${val.toLocaleString("es-PE")}` } },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        gradientToColors: ["#60A5FA", "#FCA5A5", "#6EE7B7"],
        opacityFrom: 0.5,
        opacityTo: 0.1,
      },
    },
  }

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [0, 1], [10, -10])
  const rotateY = useTransform(mouseX, [0, 1], [-10, 10])

  return (
    <div
      className="p-4 sm:p-16 font-sans text-gray-900 flex flex-col items-center justify-between bg-gradient-to-b from-white via-blue-50 to-[#EAF2FD]"
    >
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-20 overflow-hidden">
        <Image
          src="/images/9486e528-852c-46ba-8212-f7a6f55da614.png"
          alt="Fondo corporativo Reivaj"
          fill
          priority
          className="object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-blue-50/90" />

        <div className="md:flex justify-evenly items-center gap-10 relative z-10">
          <div className="md:w-3/5 max-w-4xl space-y-6 animate-fadeIn">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
              Reivaj Consultoría
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-[#0A66CC] to-[#5CA3F5] text-transparent bg-clip-text">
              Excelencia Financiera y Confianza Profesional
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
              Brindamos soluciones integrales en contabilidad, tributación, auditoría y planeamiento financiero. 
              Impulsamos decisiones estratégicas con análisis precisos, visión empresarial y resultados medibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href="/servicios"
                className="bg-[#0A66CC] hover:bg-[#084b99] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Conoce Nuestros Servicios
              </Link>
              <Link
                href="/contacto"
                className="border-2 border-[#0A66CC] text-[#0A66CC] hover:bg-[#0A66CC] hover:text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Solicita una Consulta
              </Link>
            </div>
          </div>

          <motion.div
            className="md:w-2/5 relative flex justify-center my-6 perspective"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const x = (e.clientX - rect.left) / rect.width
              const y = (e.clientY - rect.top) / rect.height
              mouseX.set(x)
              mouseY.set(y)
            }}
            onMouseLeave={() => {
              mouseX.set(0.5)
              mouseY.set(0.5)
            }}
            style={{ rotateX, rotateY }}
          >
            <div className="relative w-[360px] h-[440px] sm:w-[440px] sm:h-[480px]">
              {[
                { src: "/images/finance1.jpg", pos: "top-0 left-0", delay: 0 },
                { src: "/images/finance2.jpg", pos: "top-8 right-4", delay: 0.1 },
                { src: "/images/finance3.jpg", pos: "bottom-8 left-2", delay: 0.2 },
                { src: "/images/finance4.jpg", pos: "bottom-0 right-0", delay: 0.3 },
                { src: "/images/finance5.jpg", pos: "top-1/3 left-1/3", delay: 0.4 },
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1.2, delay: img.delay }}
                  whileHover={{
                    scale: 1.08,
                    rotateZ: i % 2 === 0 ? 2 : -2,
                    y: -8,
                  }}
                  className={`absolute ${img.pos} shadow-2xl rounded-3xl overflow-hidden transition-all duration-500`}
                >
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 4 + i,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={`Foto financiera ${i + 1}`}
                      width={220}
                      height={220}
                      className="object-cover w-[200px] h-[200px] sm:w-[230px] sm:h-[230px] rounded-3xl"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 via-transparent to-white/0 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      <section className="w-full max-w-5xl grid sm:grid-cols-4 gap-6 px-8 sm:px-0 text-center my-16 animate-slideUp">
        {[
          ["+15", "Años de Experiencia"],
          ["+250", "Empresas Asesoradas"],
          ["99%", "Cumplimiento Tributario"],
          ["100%", "Clientes Satisfechos"],
        ].map(([v, l]) => (
          <motion.div
            key={l}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="p-6 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <h3 className="text-4xl font-bold text-[#0A66CC]">{v}</h3>
            <p className="text-sm text-gray-600 mt-2">{l}</p>
          </motion.div>
        ))}
      </section>

      <section className="hidden sm:block w-full max-w-5xl px-8 sm:px-0 pb-20 animate-fadeIn">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Análisis Financiero - Evolución de Ingresos y Egresos
        </h3>
        <div className="relative w-full bg-white border border-gray-200 rounded-3xl shadow-lg p-6 overflow-hidden">
          <Image
            src="/images/9486e528-852c-46ba-8212-f7a6f55da614.png"
            alt="Fondo patrón financiero"
            fill
            className="object-cover opacity-5 absolute inset-0"
          />
          <Chart options={options} series={series} type="line" height={420} />
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1.2s ease-out; }
        .animate-slideUp { animation: fadeIn 1.4s ease-out; }
        .perspective { perspective: 1000px; }
      `}</style>
    </div>
  )
}
