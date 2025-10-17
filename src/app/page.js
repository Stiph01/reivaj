"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Home() {
  const [series, setSeries] = useState([]);

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
    ];
    setSeries([
      { name: "Ingresos", data: data.map((d) => d.ingresos) },
      { name: "Egresos", data: data.map((d) => d.egresos) },
    ]);
  }, []);

  const options = {
    chart: {
      type: "line",
      height: 400,
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    stroke: {
      width: 4,
      curve: "smooth",
    },
    colors: ["#0A66CC", "#E53E3E"],
    dataLabels: { enabled: false },
    grid: {
      borderColor: "#e5e7eb",
      strokeDashArray: 3,
    },
    markers: {
      size: 5,
      colors: ["#fff"],
      strokeColors: ["#0A66CC", "#E53E3E"],
      strokeWidth: 3,
      hover: { size: 7 },
    },
    xaxis: {
      type: "category",
      categories: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
      labels: {
        style: { colors: "#666", fontSize: "12px" },
      },
    },
    yaxis: {
      title: { text: "Soles (PEN)" },
      labels: { style: { colors: "#666" } },
    },
    legend: {
      position: "top",
      horizontalAlign: "center",
      fontWeight: 600,
    },
    tooltip: {
      theme: "light",
      x: { show: true },
      y: {
        formatter: (val) => `S/ ${val.toLocaleString("es-PE")}`,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
  };

  return (
    <div className="font-sans min-h-screen bg-white text-gray-900 flex flex-col items-center justify-between p-8 sm:p-20">
      <main className="flex flex-col items-center text-center sm:items-start sm:text-left gap-10 max-w-5xl w-full">
        <Image
          src="/images/9486e528-852c-46ba-8212-f7a6f55da614.png"
          alt="Reivaj Consultoría Contable y Tributaria"
          width={120}
          height={120}
          className="mx-auto sm:mx-0 drop-shadow-md"
          priority
        />

        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Reivaj Consultoría Contable y Tributaria
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-[#0A66CC]">
            Excelencia Financiera y Confianza Profesional
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-lg max-w-2xl">
          Brindamos soluciones integrales en{" "}
          <strong>contabilidad, asesoría tributaria, auditoría y planeamiento financiero</strong>.  
          A través del análisis de datos financieros, ayudamos a su empresa a crecer con estrategia y precisión.
        </p>

        {/* KPI RESUMEN */}
        <div className="grid sm:grid-cols-4 gap-6 mt-10 text-center w-full">
          <div className="p-4 bg-[#f8fafc] rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-4xl font-bold text-[#0A66CC]">+15</h3>
            <p className="text-sm text-gray-600 mt-1">Años de Experiencia</p>
          </div>
          <div className="p-4 bg-[#f8fafc] rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-4xl font-bold text-[#0A66CC]">+250</h3>
            <p className="text-sm text-gray-600 mt-1">Empresas Asesoradas</p>
          </div>
          <div className="p-4 bg-[#f8fafc] rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-4xl font-bold text-[#0A66CC]">99%</h3>
            <p className="text-sm text-gray-600 mt-1">Cumplimiento Tributario</p>
          </div>
          <div className="p-4 bg-[#f8fafc] rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-4xl font-bold text-[#0A66CC]">100%</h3>
            <p className="text-sm text-gray-600 mt-1">Clientes Satisfechos</p>
          </div>
        </div>

        {/* GRAFICO DE ANALISIS FINANCIERO */}
        <div className="mt-16 w-full">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
            Análisis Financiero - Evolución de Ingresos y Egresos
          </h3>
          <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-md p-4">
            <Chart options={options} series={series} type="line" height={400} />
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center sm:text-left">
            Representación mensual del flujo financiero: crecimiento sostenido en ingresos y control eficiente de egresos.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <a
            href="#servicios"
            className="rounded-full bg-[#0A66CC] hover:bg-[#084b99] text-white font-semibold shadow-md px-8 py-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Conoce Nuestros Servicios
          </a>
          <a
            href="#contacto"
            className="rounded-full border-2 border-[#0A66CC] text-[#0A66CC] hover:bg-[#0A66CC] hover:text-white font-semibold px-8 py-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Solicita una Consulta
          </a>
        </div>
      </main>

      <footer className="mt-20 border-t border-gray-200 pt-8 flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm">
        <a href="#nosotros" className="hover:text-[#0A66CC] transition-colors">
          Sobre Nosotros
        </a>
        <a href="#servicios" className="hover:text-[#0A66CC] transition-colors">
          Servicios
        </a>
        <a href="#contacto" className="hover:text-[#0A66CC] transition-colors">
          Contacto
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#0A66CC] transition-colors flex items-center gap-1"
        >
          LinkedIn <span className="text-lg">↗</span>
        </a>
      </footer>
    </div>
  );
}
