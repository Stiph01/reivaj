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
      max: 45000,
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
      <section className="relative w-full min-h-[80vh] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 px-6 lg:px-16 py-12 overflow-hidden">
        <Image
          src="/images/9486e528-852c-46ba-8212-f7a6f55da614.png"
          alt="Fondo corporativo Reivaj"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#F8FAFC]/60 to-[#E0F2FE]/80" />

        <div className="w-full lg:w-1/2 max-w-2xl text-center lg:text-left relative z-10 space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">Reivaj Consultoría</h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-[#0A66CC] to-[#60A5FA] bg-clip-text text-transparent">
            Excelencia Financiera y Confianza Profesional
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Brindamos soluciones integrales en contabilidad, tributación, auditoría y planeamiento financiero. Impulsamos decisiones estratégicas con análisis precisos y resultados medibles.
          </p>
        </div>

        <div className="w-full lg:w-1/2 relative z-10">
          <div className="mx-auto w-full overflow-hidden">
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
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 py-12 text-center">
        {[["+10", "Años de Experiencia"], ["+250", "Empresas Asesoradas"], ["99%", "Cumplimiento Tributario"], ["100%", "Clientes Satisfechos"]].map(([v, l]) => (
          <motion.div key={l} whileHover={{ scale: 1.03, y: -2 }} transition={{ type: "spring", stiffness: 250, damping: 16 }} className="p-6 bg-white/95 border border-gray-200 rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-[#0A66CC]">{v}</h3>
            <p className="text-sm text-gray-600 mt-2">{l}</p>
          </motion.div>
        ))}
      </section>

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
