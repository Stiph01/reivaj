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

  const options = {
    chart: {
      type: "area",
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: "easeInOut",
        speed: 1000,
        animateGradually: { enabled: true, delay: 150 },
        dynamicAnimation: { enabled: true, speed: 800 },
      },
      dropShadow: { enabled: true, top: 6, left: 0, blur: 10, color: "#0A66CC", opacity: 0.12 },
    },
    stroke: { width: 4, curve: "smooth" },
    colors: ["#0A66CC", "#E53E3E", "#10B981"],
    dataLabels: { enabled: false },
    grid: { borderColor: "#E2E8F0", strokeDashArray: 4, padding: { left: 20, right: 20 } },
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
      labels: { style: { fontSize: "13px", colors: "#64748B", fontWeight: 500 } },
    },
    yaxis: {
      labels: { formatter: (v) => `S/ ${v / 1000}k`, style: { colors: "#475569" } },
      title: { text: "Soles (PEN)", style: { color: "#0A1A33", fontWeight: 600 } },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      fontSize: "14px",
      fontWeight: 600,
      labels: { colors: "#0A1A33" },
      markers: { width: 14, height: 14, radius: 14 },
    },
    tooltip: {
      theme: "dark",
      style: { fontSize: "13px", fontWeight: 500 },
      y: { formatter: (val) => `S/ ${val.toLocaleString("es-PE")}` },
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
  ]
  const duplicated = [...fotos, ...fotos]

  return (
    <div className="font-sans text-gray-900 flex flex-col items-center justify-center bg-gradient-to-b from-[#F8FAFC] via-[#EFF6FF] to-[#E0F2FE]">
      <section className="relative w-full min-h-[85vh] flex flex-col md:flex-row items-center justify-center px-6 sm:px-20 py-10 overflow-hidden">
        <Image
          src="/images/9486e528-852c-46ba-8212-f7a6f55da614.png"
          alt="Fondo corporativo Reivaj"
          fill
          priority
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#F8FAFC]/60 to-[#E0F2FE]/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.06),transparent_80%)] animate-pulse-slow" />

        <div className="md:w-1/2 max-w-xl space-y-6 relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
            Reivaj Consultoría
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-[#0A66CC] to-[#60A5FA] text-transparent bg-clip-text">
            Excelencia Financiera y Confianza Profesional
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
            Brindamos soluciones integrales en contabilidad, tributación, auditoría y planeamiento financiero.
            Impulsamos decisiones estratégicas con análisis precisos, visión empresarial y resultados medibles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Link
              href="/servicios"
              className="bg-[#0A66CC] hover:bg-[#084b99] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-blue-300/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Conoce Nuestros Servicios
            </Link>
            <Link
              href="/contacto"
              className="border-2 border-[#0A66CC] text-[#0A66CC] hover:bg-[#0A66CC] hover:text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-blue-200/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Solicita una Consulta
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 h-[650px] relative overflow-hidden mt-10 md:mt-0 z-10">
          <motion.div
            animate={{ y: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col gap-6"
          >
            {duplicated.map((src, i) => (
              <motion.div
                key={i}
                className="rounded-3xl overflow-hidden shadow-lg hover:shadow-blue-300/40 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={src}
                  alt={`Equipo Reivaj ${i + 1}`}
                  width={320}
                  height={320}
                  className="rounded-3xl object-cover aspect-square"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full max-w-5xl grid sm:grid-cols-4 gap-6 px-8 sm:px-0 text-center py-12 animate-slideUp">
        {[
          ["+10", "Años de Experiencia"],
          ["+250", "Empresas Asesoradas"],
          ["99%", "Cumplimiento Tributario"],
          ["100%", "Clientes Satisfechos"],
        ].map(([v, l]) => (
          <motion.div
            key={l}
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="p-6 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl hover:border-blue-300 shadow-sm hover:shadow-blue-100 transition-all duration-500"
          >
            <h3 className="text-4xl font-bold text-[#0A66CC]">{v}</h3>
            <p className="text-sm text-gray-600 mt-2">{l}</p>
          </motion.div>
        ))}
      </section>

      <section className="hidden sm:block w-full max-w-6xl px-6 sm:px-0 pb-20 animate-fadeIn">
        <div className="relative bg-gradient-to-b from-[#ffffff] via-[#F9FAFB] to-[#EFF6FF] border border-gray-200 rounded-3xl shadow-[0_10px_40px_rgba(10,102,204,0.08)] overflow-hidden backdrop-blur-sm transition-all duration-700 hover:shadow-[0_20px_50px_rgba(10,102,204,0.15)]">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0A66CC] to-[#60A5FA]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(96,165,250,0.05),transparent_70%)]" />
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
            <Image src="/images/logo-reivaj-blanco.svg" alt="Marca de agua Reivaj" width={500} height={500} className="object-contain" />
          </div>
          <div className="relative px-8 pt-10 pb-8">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#0A1A33] tracking-tight">
                Análisis Financiero<span className="text-[#0A66CC]"> – Evolución Dinámica de Ingresos, Egresos y Utilidad</span>
              </h3>
              <div className="hidden sm:block h-[3px] w-44 bg-gradient-to-r from-[#0A66CC] to-[#60A5FA] rounded-full" />
            </div>
            <div className="bg-white/80 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-inner p-4 sm:p-6 hover:shadow-[0_8px_30px_rgba(10,102,204,0.1)] transition-all duration-500">
              <Chart options={options} series={series} type="area" height={420} />
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
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
