"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

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

    const utilidad = data.map((d) => d.ingresos - d.egresos);
    setSeries([
      { name: "", data: data.map((d) => d.ingresos) },
      { name: "", data: data.map((d) => d.egresos) },
      { name: "", data: utilidad },
    ]);
  }, []);

  const options = {
    chart: {
      type: "line",
      height: 420,
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: true, easing: "easeinout", speed: 1000 },
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
        "Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic",
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
  };

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900 flex flex-col items-center justify-between p-8 sm:p-20">
      <main className="flex flex-col items-center text-center sm:items-start sm:text-left gap-10 max-w-5xl w-full animate-fadeIn">
        
        {/* ENCABEZADO */}
        <div className="space-y-4 text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Reivaj Consultoría
          </h1>
          <h2 className="text-xl sm:text-2xl font-medium text-[#0A66CC]">
            Excelencia Financiera y Confianza Profesional
          </h2>
          <h3 className="text-lg sm:text-xl text-gray-700 font-semibold">
            Especialistas en Asesoría Contable, Tributaria, Laboral y Financiera
          </h3>
        </div>

        {/* DESCRIPCIÓN */}
        <p className="text-gray-700 leading-relaxed text-lg max-w-2xl">
          Brindamos soluciones integrales en contabilidad, tributación, auditoría y planeamiento financiero.
          A través del análisis financiero ayudamos a optimizar decisiones empresariales y potenciar el
          crecimiento sostenido con precisión y estrategia.
        </p>

        {/* KPI */}
        <div className="grid sm:grid-cols-4 gap-6 mt-10 text-center w-full animate-slideUp">
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
        </div>

        {/* GRAFICO */}
        <div className="mt-16 w-full animate-fadeIn">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
            Análisis Financiero - Evolución de Ingresos y Egresos
          </h3>
          <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-md p-6">
            <Chart options={options} series={series} type="line" height={420} />
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fadeIn">
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

      {/* FOOTER */}
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

      {/* ANIMACIONES TAILWIND */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
        .animate-slideUp { animation: fadeIn 1.3s ease-out; }
      `}</style>
    </div>
  );
}
