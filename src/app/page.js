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
      { name: "Ingresos", data: data.map((d) => Math.round(d.ingresos)) },
      { name: "Egresos", data: data.map((d) => Math.round(d.egresos)) },
      { name: "Utilidad", data: utilidad.map((v) => Math.round(v)) },
    ])
  }, [data])

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) =>
        prev.map((d) => ({
          ...d,
          ingresos: Math.max(0, d.ingresos + (Math.random() * 2000 - 1000)),
          egresos: Math.max(0, d.egresos + (Math.random() * 1500 - 800)),
        }))
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const resize = () => {
      const w = window.innerWidth
      if (w < 640) setChartHeight(260)
      else if (w < 1024) setChartHeight(340)
      else setChartHeight(420)
    }
    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      animations: { enabled: true, easing: "easeinout", speed: 800 },
      dropShadow: { enabled: true, top: 2, left: 0, blur: 3, opacity: 0.2 },
    },
    stroke: { width: 4, curve: "smooth" },
    colors: ["#0A66CC", "#EF4444", "#10B981"],
    dataLabels: { enabled: false },
    grid: { borderColor: "#E2E8F0", strokeDashArray: 5 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.6,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
        gradientToColors: ["#60A5FA", "#FCA5A5", "#6EE7B7"],
      },
    },
    markers: { size: 0 },
    xaxis: {
      categories: data.map((d) => d.mes),
      labels: { style: { fontSize: "12px", colors: "#334155" } },
    },
    yaxis: {
      min: 0,
      max: 40000,
      tickAmount: 6,
      labels: { formatter: (v) => `${Math.round(v / 1000)}k`, style: { colors: "#334155" } },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      fontSize: "13px",
      labels: { colors: "#0A1A33" },
    },
    tooltip: {
      theme: "dark",
      y: { formatter: (val) => `${Math.round(val / 1000)}k` },
    },
  }

  const fotos = [
    "/images/photo/IMG_9549.jpg",
    "/images/photo/IMG_9538.jpg",
    "/images/photo/IMG_9543.jpg",
    "/images/photo/IMG_9528.jpg",
    "/images/photo/IMG_9545.jpg",
    "/images/photo/IMG_9557.jpg",
    "/images/photo/IMG_9524.jpg",
    "/images/photo/IMG_9560.jpg",
  ]
  const duplicated = [...fotos, ...fotos]

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

      {/* CARRUSEL HORIZONTAL */}
      <section className="relative w-full flex justify-center items-center py-12">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="flex gap-6 sm:gap-8"
        >
          {duplicated.map((src, i) => (
            <motion.div key={i} className="rounded-2xl overflow-hidden shadow-lg flex-shrink-0" whileHover={{ scale: 1.04 }}>
              <Image
                src={src}
                alt={`Equipo Reivaj ${i + 1}`}
                width={420}
                height={420}
                className="object-cover w-[260px] sm:w-[320px] md:w-[400px] lg:w-[460px] h-[260px] sm:h-[320px] md:h-[400px] lg:h-[460px]"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 py-12 text-center">
        {[["+10", "Años de Experiencia"], ["+250", "Empresas Asesoradas"], ["99%", "Cumplimiento Tributario"], ["100%", "Clientes Satisfechos"]].map(([v, l]) => (
          <motion.div key={l} whileHover={{ scale: 1.03, y: -2 }} transition={{ type: "spring", stiffness: 250, damping: 16 }} className="p-6 bg-white/95 border border-gray-200 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-[#0A66CC]">{v}</h3>
            <p className="text-sm text-gray-600 mt-2">{l}</p>
          </motion.div>
        ))}
      </section>

      {/* ANÁLISIS FINANCIERO */}
      <section className="block w-full max-w-6xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative backdrop-blur-2xl bg-gradient-to-br from-[#0A66CC]/10 via-[#E0F2FE]/30 to-white/5 border border-white/40 shadow-[0_8px_50px_rgba(10,102,204,0.25)] rounded-3xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0A66CC] via-[#60A5FA] to-[#10B981]" />
          <div className="relative px-6 sm:px-10 pt-10 pb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0A66CC] via-[#60A5FA] to-[#10B981] text-center drop-shadow mb-8">
              Análisis Financiero – Evolución de Ingresos, Egresos y Utilidad
            </h3>
            <div className="bg-gradient-to-b from-white/40 via-white/20 to-white/10 border border-white/40 rounded-2xl shadow-inner p-6">
              <Chart options={options} series={series} type="area" height={chartHeight} />
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
