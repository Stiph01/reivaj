"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Servicios() {
  const servicios = [
    {
      title: "Contabilidad Integral",
      img: "/images/contabilidad.jpg",
      desc: "Elaboración de estados financieros, registro contable, conciliaciones bancarias y reportes personalizados para decisiones empresariales.",
    },
    {
      title: "Asesoría Tributaria",
      img: "/images/tributaria.jpg",
      desc: "Planificación fiscal, declaraciones PDT, representación ante SUNAT y estrategias para optimizar tu carga tributaria.",
    },
    {
      title: "Auditoría Financiera",
      img: "/images/auditoria.jpg",
      desc: "Verificación de la información contable y cumplimiento normativo para garantizar transparencia.",
    },
    {
      title: "Planeamiento Financiero",
      img: "/images/planeamiento.jpg",
      desc: "Diseñamos estrategias financieras que impulsan la rentabilidad y optimizan recursos.",
    },
    {
      title: "Gestión Laboral y Planillas",
      img: "/images/nominas.jpg",
      desc: "Administración de planillas, contratos y beneficios sociales con cumplimiento regulatorio.",
    },
    {
      title: "Constitución de Empresas",
      img: "/images/empresas.jpg",
      desc: "Asesoría integral para creación de empresas, elección de régimen y registro ante entidades oficiales.",
    },
  ];

  const especializados = [
    {
      icon: "🏢",
      title: "Constitución de Empresas & MYPES",
      desc: "Asesoría integral para constituir empresas o MYPES, elección del régimen tributario y registro legal.",
    },
    {
      icon: "💻",
      title: "Contabilidad Computarizada",
      desc: "Implementación de sistemas contables digitales con precisión y automatización.",
    },
    {
      icon: "🧾",
      title: "Declaraciones PDT / PLAME / PLE",
      desc: "Gestión profesional de tus declaraciones tributarias y laborales según normativa vigente.",
    },
    {
      icon: "📚",
      title: "Libros & Comprobantes Electrónicos",
      desc: "Emisión y registro electrónico conforme normativa, con soporte técnico permanente.",
    },
    {
      icon: "🏦",
      title: "Obligaciones Previsionales",
      desc: "Gestión de AFP, ONP, ESSALUD y seguridad social con cumplimiento puntual.",
    },
    {
      icon: "🔍",
      title: "Fiscalizaciones & Auditorías",
      desc: "Asesoramiento técnico ante revisiones fiscales y auditorías internas o externas.",
    },
  ];

  const logos = [
    { src: "/images/sunat.png", alt: "SUNAT" },
    { src: "/images/sunarp.png", alt: "SUNARP" },
    { src: "/images/osce.png", alt: "OSCE" },
    { src: "/images/inei.png", alt: "INEI" },
    { src: "/images/onp.png", alt: "ONP" },
    { src: "/images/essalud.png", alt: "ESSALUD" },
    { src: "/images/sencico.png", alt: "SENCICO" },
    { src: "/images/prima.png", alt: "PRIMA AFP" },
  ];

  const espRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((ent) => {
          if (ent.isIntersecting) ent.target.classList.add("animate-fadeUp");
        });
      },
      { threshold: 0.2 }
    );
    const els = espRef.current?.querySelectorAll(".card-especializado");
    els?.forEach((el) => observer.observe(el));
    return () => els?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-[#F6F9FF] to-white text-gray-900 px-6 sm:px-20 py-24 font-sans overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(10,102,204,0.08),transparent_70%)]"></div>

      <section className="max-w-7xl w-full mx-auto relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#0A66CC] via-[#2D9CDB] to-[#60A5FA] bg-clip-text text-transparent mb-6 tracking-tight drop-shadow-sm">
            Nuestros Servicios
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            En{" "}
            <span className="font-semibold text-[#0A66CC]">
              Reivaj Consultoría Contable y Tributaria
            </span>{" "}
            ofrecemos soluciones financieras, fiscales y contables diseñadas
            para generar confianza, precisión y un servicio estratégico de excelencia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              </div>
              <div className="p-10 text-center">
                <h2 className="text-2xl font-bold text-[#0A66CC] mb-3 tracking-tight">
                  {s.title}
                </h2>
                <p className="text-gray-700 text-[15px] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="mt-28 bg-white/95 rounded-3xl shadow-lg border border-slate-200 p-16 backdrop-blur-sm relative overflow-hidden"
          ref={espRef}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#EAF3FF]/40 via-transparent to-[#F5FAFF]/60"></div>
          <h2 className="text-4xl font-extrabold text-center text-[#0A66CC] mb-16 relative z-10">
            Servicios Especializados
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-slate-700 text-[15px] leading-relaxed relative z-10 max-w-6xl mx-auto">
            {especializados.map((item, idx) => (
              <div
                key={idx}
                className="card-especializado bg-gradient-to-br from-white to-[#F8FBFF] border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl text-[#0A66CC]">{item.icon}</span>
                  <h3 className="text-lg font-semibold text-[#0A66CC] leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-28">
          <h3 className="text-center text-2xl font-semibold text-[#0A66CC] mb-10">
            Organismos & Entidades Vinculadas
          </h3>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={60}
            slidesPerView={5}
            loop
            speed={4000}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            allowTouchMove={false}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="max-w-6xl mx-auto"
          >
            {logos.map((logo, i) => (
              <SwiperSlide
                key={i}
                className="flex justify-center items-center opacity-70 hover:opacity-100 transition duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={130}
                  height={50}
                  className="object-contain grayscale hover:grayscale-0 transition duration-500"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-28 text-center">
          <h2 className="text-3xl font-bold text-[#0A66CC] mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
            En Reivaj Consultoría fusionamos{" "}
            <span className="font-semibold text-[#0A66CC]">
              conocimiento técnico, ética profesional y visión estratégica
            </span>{" "}
            para guiar tu empresa hacia un futuro sólido, transparente y con crecimiento sostenible.
          </p>
        </div>
      </section>

      <style jsx>{`
        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out forwards;
        }
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
