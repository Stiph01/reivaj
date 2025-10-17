"use client"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

export default function Nosotros() {
  const testimonios = [
    {
      nombre: "María Fernández",
      empresa: "Gerente Financiera - Inversiones Andinas SAC",
      texto:
        "Excelente servicio, siempre atentos y con un enfoque estratégico que nos ha permitido optimizar la carga tributaria.",
      estrellas: 5,
      foto: "/images/avatar1.png",
    },
    {
      nombre: "Carlos Mendoza",
      empresa: "Fundador - TechNova Perú",
      texto:
        "Profesionalismo y puntualidad inigualables. Reivaj nos brinda confianza total en el manejo contable y fiscal.",
      estrellas: 5,
      foto: "/images/avatar2.png",
    },
    {
      nombre: "Lucía Ramírez",
      empresa: "CEO - Importadora Ramírez EIRL",
      texto:
        "Reivaj Consultoría es sinónimo de transparencia y resultados. Los recomiendo plenamente.",
      estrellas: 4,
      foto: "/images/avatar3.png",
    },
    {
      nombre: "Jorge Salazar",
      empresa: "Director General - Soluciones Empresariales SAC",
      texto:
        "Su asesoría contable nos permitió optimizar costos y cumplir con las normas de manera impecable. Un equipo excepcional.",
      estrellas: 5,
      foto: "/images/avatar4.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F5F8FF] to-white text-gray-900 flex flex-col items-center px-6 sm:px-20 py-24 font-sans overflow-hidden">
      <section className="max-w-6xl w-full text-center sm:text-left relative z-10">
        <div className="flex flex-col sm:flex-row items-center gap-14 mb-20">
          <Image
            src="/images/equipo_1.jpeg"
            alt="Equipo Reivaj Consultoría"
            width={480}
            height={320}
            className="rounded-3xl shadow-2xl object-cover ring-4 ring-[#0A66CC]/10"
          />
          <div className="max-w-xl">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#0A66CC] to-[#4F46E5] bg-clip-text text-transparent mb-5">
              Sobre Nosotros
            </h1>
            <p className="text-lg text-slate-700 leading-relaxed">
              En{" "}
              <span className="font-semibold text-[#0A66CC]">
                Reivaj Consultoría Contable y Tributaria
              </span>{" "}
              ofrecemos soluciones financieras, contables y tributarias con un
              enfoque estratégico, ético y humano. Ayudamos a empresas y
              emprendedores a tomar decisiones informadas, cumplir con la
              normativa vigente y optimizar su crecimiento económico.
            </p>
          </div>
        </div>

        <div className="mt-28 w-full flex flex-col items-center justify-center">
          <div className="bg-white border border-slate-100 rounded-[2rem] shadow-2xl p-10 sm:p-14 flex flex-col-reverse sm:flex-row items-center justify-between gap-10 sm:gap-16 max-w-5xl w-full text-center sm:text-left transition-all duration-700 hover:shadow-[#0A66CC]/25">
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A66CC] mb-2">
                Javier Quispe Cuba
              </h2>
              <p className="text-gray-600 italic mb-4">
                CEO de Reivaj Consultoría Contable y Tributaria · CPC 08-3451
              </p>
              <p className="text-[17px] text-gray-700 leading-relaxed max-w-2xl mx-auto sm:mx-0">
                Con más de una década de experiencia en el ámbito contable y
                tributario, el{" "}
                <strong className="text-[#0A66CC]">CPC Javier Quispe Cuba</strong>{" "}
                lidera Reivaj Consultoría con visión estratégica, innovación
                tecnológica y compromiso con la excelencia profesional. Su enfoque
                impulsa la confianza, fomenta el crecimiento y fortalece la
                sostenibilidad empresarial.
              </p>
            </div>
            <div className="flex justify-center sm:justify-end">
              <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-tr from-[#0A66CC] via-[#2D9CDB] to-[#60A5FA] p-[3px] shadow-[0_8px_25px_rgba(10,102,204,0.25)]">
                <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/12705795114.png"
                    alt="Javier Quispe Cuba - CEO de Reivaj"
                    width={160}
                    height={160}
                    className="rounded-full object-cover scale-95 hover:scale-100 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 mt-10">
          <div className="bg-white border border-slate-200 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 p-10">
            <h2 className="text-3xl font-bold text-[#0A66CC] mb-3">
              Nuestra Misión
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Brindar servicios contables y tributarios de excelencia,
              garantizando precisión, confianza y cumplimiento. Nos
              comprometemos con el desarrollo financiero sostenible de cada
              cliente, fortaleciendo la gestión empresarial con innovación.
            </p>
          </div>
          <div className="bg-white border border-slate-200 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 p-10">
            <h2 className="text-3xl font-bold text-[#0A66CC] mb-3">
              Nuestra Visión
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Ser reconocidos en Latinoamérica como una firma líder en
              consultoría contable y tributaria, destacando por nuestra
              transparencia, tecnología aplicada y acompañamiento cercano al
              éxito de cada cliente.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-[#0A66CC] via-[#2D9CDB] to-[#60A5FA] text-white rounded-3xl shadow-xl p-12 text-center">
          <h2 className="text-4xl font-extrabold mb-10 drop-shadow-lg">
            Nuestros Valores
          </h2>
          <div className="grid sm:grid-cols-3 gap-10">
            <div className="p-6 hover:scale-105 transition-transform duration-300">
              <span className="text-5xl">🤝</span>
              <h3 className="font-semibold mt-4 text-lg">Integridad</h3>
              <p className="text-sm opacity-90 mt-3">
                Actuamos con ética y transparencia en cada acción, fomentando la
                confianza mutua con nuestros clientes.
              </p>
            </div>
            <div className="p-6 hover:scale-105 transition-transform duration-300">
              <span className="text-5xl">📊</span>
              <h3 className="font-semibold mt-4 text-lg">Precisión</h3>
              <p className="text-sm opacity-90 mt-3">
                Garantizamos exactitud en los procesos contables y fiscales,
                sustentados en conocimiento técnico y rigor profesional.
              </p>
            </div>
            <div className="p-6 hover:scale-105 transition-transform duration-300">
              <span className="text-5xl">🚀</span>
              <h3 className="font-semibold mt-4 text-lg">Crecimiento</h3>
              <p className="text-sm opacity-90 mt-3">
                Impulsamos el desarrollo continuo de nuestros clientes mediante
                asesorías estratégicas orientadas al éxito.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A66CC] mb-12">
            Opiniones de Nuestros Clientes
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="max-w-6xl mx-auto pb-10"
          >
            {testimonios.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white border border-slate-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 mx-4 flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 mb-4">
                    <Image
                      src={t.foto}
                      alt={t.nombre}
                      fill
                      className="rounded-full object-cover border-4 border-[#0A66CC]/10 shadow-md"
                    />
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.estrellas)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-xl drop-shadow-sm">★</span>
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-6 leading-relaxed">
                    “{t.texto}”
                  </p>
                  <h3 className="font-bold text-[#0A66CC]">{t.nombre}</h3>
                  <p className="text-sm text-slate-500 mt-1">{t.empresa}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  )
}
