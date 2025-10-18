"use client"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"

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
      { name: "", data: data.map((d) => d.ingresos) },
      { name: "", data: data.map((d) => d.egresos) },
      { name: "", data: utilidad },
    ])
  }, [])

  const options = {
    chart: {
      type: "line",
      height: 420,
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 1200,
        animateGradually: { enabled: true, delay: 300 },
        dynamicAnimation: { enabled: true, speed: 1000 },
      },
    },
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
      categories: [
        "Ene", "Feb", "Mar", "Abr", "May", "Jun",
        "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
      ],
      labels: { style: { colors: "#555", fontSize: "13px", fontWeight: 500 } },
    },
    yaxis: {
      title: { text: "Soles (PEN)", style: { color: "#333", fontWeight: 600 } },
      labels: {
        style: { colors: "#666", fontSize: "13px" },
        formatter: (val) => `S/ ${val / 1000}k`,
      },
    },
    legend: { show: false },
    tooltip: {
      theme: "light",
      y: { formatter: (val) => `S/ ${val.toLocaleString("es-PE")}` },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 0.3,
        gradientToColors: ["#60A5FA", "#FCA5A5", "#6EE7B7"],
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
  }

  return (
    <div className="p-4 sm:p-16 font-sans text-gray-900 flex flex-col items-center justify-between bg-gradient-to-b from-white via-blue-50 to-[#EAF2FD]">
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center sm:text-left px-4 sm:px-20 overflow-hidden">
        <Image
          src="/images/fondo-corporativo.jpeg"
          alt="Fondo corporativo Reivaj"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-blue-50/90"></div>
        <div className="md:flex justify-evenly items-center gap-4">
          <div className="md:w-3/5 relative z-10 max-w-4xl space-y-6 animate-fadeIn">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
              Reivaj Consultoría
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0A66CC]">
              Excelencia Financiera y Confianza Profesional
            </h2>
            <h3 className="text-lg sm:text-xl text-gray-700 font-medium">
              Especialistas en Asesoría Contable, Tributaria, Laboral y
              Financiera
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto sm:mx-0">
              Brindamos soluciones integrales en contabilidad, tributación,
              auditoría y planeamiento financiero. Impulsamos la toma de
              decisiones estratégicas con análisis precisos, visión empresarial
              y resultados medibles.
            </p>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 pt-6">
              <Link
                href="/servicios"
                className="bg-[#0A66CC] hover:bg-[#084b99] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Conoce Nuestros Servicios
              </Link>
              <Link
                href="/contacto"
                className="border-2 border-[#0A66CC] text-[#0A66CC] hover:bg-[#0A66CC] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Solicita una Consulta
              </Link>
            </div>
          </div>
          <div className="md:w-2/5 p-3 flex justify-center my-6">
            <Image
              src="/images/image_finance.jpg"
              alt="imagen referencial consultoria financiera"
              width={700}
              height={700}
              className="relative z-10 w-full animate-fadeIn md:rounded-4xl rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl grid sm:grid-cols-4 gap-6 px-8 sm:px-0 text-center mb-12 animate-slideUp">
        {[
          ["+15", "Años de Experiencia"],
          ["+250", "Empresas Asesoradas"],
          ["99%", "Cumplimiento Tributario"],
          ["100%", "Clientes Satisfechos"],
        ].map(([v, l]) => (
          <div
            key={l}
            className="p-6 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-4xl font-bold text-[#0A66CC]">{v}</h3>
            <p className="text-sm text-gray-600 mt-2">{l}</p>
          </div>
        ))}
      </section>

      <section className="hidden sm:block w-full max-w-5xl px-8 sm:px-0 pb-20 animate-fadeIn">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
          Análisis Financiero - Evolución de Ingresos y Egresos
        </h3>
        <div className="relative w-full bg-white border border-gray-200 rounded-2xl shadow-md p-6 overflow-hidden">
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
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out;
        }
        .animate-slideUp {
          animation: fadeIn 1.4s ease-out;
        }
      `}</style>
    </div>
  );
}
