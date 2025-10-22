import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Graphic(){
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

   {
     /* ANÁLISIS FINANCIERO */
   }
    return(
       
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

    )
}