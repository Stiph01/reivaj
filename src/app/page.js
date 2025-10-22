"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

export default function Home() {
  const [series, setSeries] = useState([])
  const [data, setData] = useState([
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
  ])
  const [chartHeight, setChartHeight] = useState(420)

  useEffect(() => {
    const utilidad = data.map((d) => d.ingresos - d.egresos)
    setSeries([
      { name: "Ingresos", data: data.map((d) => d.ingresos) },
      { name: "Egresos", data: data.map((d) => d.egresos) },
      { name: "Utilidad", data: utilidad },
    ])
  }, [data])

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((d) => ({
          ...d,
          ingresos: d.ingresos + (Math.random() * 2000 - 1000),
          egresos: d.egresos + (Math.random() * 1500 - 800),
        }))
      )
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const setH = () => {
      const w = window.innerWidth
      if (w < 640) setChartHeight(300)
      else if (w < 1024) setChartHeight(360)
      else setChartHeight(420)
    }
    setH()
    window.addEventListener("resize", setH)
    return () => window.removeEventListener("resize", setH)
  }, [])

  const options = {
    chart: { type: "area", toolbar: { show: false } },
    stroke: { width: 4, curve: "smooth" },
    colors: ["#0A66CC", "#E53E3E", "#10B981"],
    dataLabels: { enabled: false },
    grid: { borderColor: "#E2E8F0", strokeDashArray: 4 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.45,
        opacityFrom: 0.35,
        opacityTo: 0.05,
        stops: [0, 90, 100],
        gradientToColors: ["#60A5FA", "#FCA5A5", "#6EE7B7"],
      },
    },
    markers: { size: 0 },
    xaxis: {
      categories: data.map((d) => d.mes),
      labels: { style: { fontSize: "12px", colors: "#64748B" } },
    },
    yaxis: {
      labels: { formatter: (v) => `S/ ${v / 1000}k`, style: { colors: "#475569" } },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      fontSize: "13px",
      labels: { colors: "#0A1A33" },
    },
    tooltip: { theme: "dark", y: { formatter: (val) => `S/ ${val.toLocaleString("es-PE")}` } },
    responsive: [
      { breakpoint: 640, options: { stroke: { width: 3 } } },
      { breakpoint: 1024, options: { stroke: { width: 3.5 } } },
    ],
  }

  const fotos = [
    "/images/photo/IMG_9549.jpg",
    "/images/photo/IMG_9538.jpg",
    "/images/photo/IMG_9543.jpg",
    "/images/photo/IMG_9528.jpg",
    "/images/photo/IMG_9545.jpg",
    "/images/photo/IMG_9557.jpg",
    "/images/photo/IMG_9524.jpg",
  ]
  const duplicated = [...fotos, ...fotos]

  return (
    <div className="font-sans text-gray-900 flex flex-col items-center justify-center bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#E0F2FE]">
      <section className="relative w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 px-5 sm:px-8 lg:px-16 py-10 sm:py-14 overflow-hidden">
        <Image
          src="/images/9486e528-852c-46ba-8212-f7a6f55da614.png"
          alt="Fondo corporativo Reivaj"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#F8FAFC]/60 to-[#E0F2FE]/80" />

        <div className="w-full lg:w-1/2 max-w-2xl space-y-5 sm:space-y-6 relative z-10 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">Reivaj Consultoría</h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-[#0A66CC] to-[#60A5FA] text-transparent bg-clip-text">
            Excelencia Financiera y Confianza Profesional
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mx-auto lg:mx-0 max-w-xl">
            Brindamos soluciones integrales en contabilidad, tributación, auditoría y planeamiento financiero. Impulsamos decisiones estratégicas con análisis precisos, visión empresarial y resultados medibles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Link href="/servicios" className="bg-[#0A66CC] hover:bg-[#084b99] text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg transition-all">
              Conoce Nuestros Servicios
            </Link>
            <Link href="/contacto" className="border-2 border-[#0A66CC] text-[#0A66CC] hover:bg-[#0A66CC] hover:text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-lg transition-all">
              Solicita una Consulta
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative z-10">
          <div className="mx-auto w-[80vw] sm:w-[420px] lg:w-[520px] xl:w-[560px] min-h-[320px] sm:min-h-[520px] lg:min-h-[600px] relative overflow-visible">
            <motion.div
              animate={{ y: ["0%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 26, ease: "linear" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col gap-4 sm:gap-6"
            >
              {duplicated.map((src, i) => (
                <motion.div
                  key={i}
                  className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-all flex-shrink-0"
                  whileHover={{ scale: 1.04 }}
                >
                  <Image
                    src={src}
                    alt={`Equipo Reivaj ${i + 1}`}
                    width={560}
                    height={560}
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 420px, 560px"
                    className="object-cover aspect-square w-[80vw] max-w-[560px] sm:w-[420px] lg:w-[520px] xl:w-[560px] h-auto"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 px-5 sm:px-6 lg:px-0 text-center py-10">
        {[
          ["+10", "Años de Experiencia"],
          ["+250", "Empresas Asesoradas"],
          ["99%", "Cumplimiento Tributario"],
          ["100%", "Clientes Satisfechos"],
        ].map(([v, l]) => (
          <motion.div
            key={l}
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: "spring", stiffness: 250, damping: 16 }}
            className="p-5 sm:p-6 bg-white/95 border border-gray-200 rounded-2xl shadow-sm"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A66CC]">{v}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">{l}</p>
          </motion.div>
        ))}
      </section>

      <section className="block w-full max-w-6xl px-5 sm:px-6 lg:px-0 pb-16">
        <div className="relative bg-gradient-to-b from-[#ffffff] via-[#F9FAFB] to-[#EFF6FF] border border-gray-200 rounded-3xl shadow-[0_10px_40px_rgba(10,102,204,0.08)] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0A66CC] to-[#60A5FA]" />
          <div className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-6">
            <h3 className="text-lg sm:text-2xl font-bold text-[#0A1A33] tracking-tight mb-4 sm:mb-6 text-center sm:text-left">
              Análisis Financiero<span className="text-[#0A66CC]"> – Evolución de Ingresos, Egresos y Utilidad</span>
            </h3>
            <div className="bg-white/80 border border-gray-100 rounded-2xl shadow-inner p-3 sm:p-4 lg:p-6">
              <Chart options={options} series={series} type="area" height={chartHeight} />
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1.2s ease-out; }
        .animate-slideUp { animation: fadeIn 1.4s ease-out; }
      `}</style>
    </div>
  )
}
