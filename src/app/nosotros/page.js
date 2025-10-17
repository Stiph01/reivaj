import Image from "next/image";

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-6 sm:px-20 py-24">
      <section className="max-w-5xl w-full text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center gap-10 mb-16">
          <Image
            src="/images/oficina-reivaj.jpg"
            alt="Equipo Reivaj Consultoría"
            width={420}
            height={280}
            className="rounded-2xl shadow-lg object-cover"
          />
          <div>
            <h1 className="text-4xl font-bold text-[#0A66CC] mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              En <span className="font-semibold text-[#0A66CC]">Reivaj Consultoría Contable y Tributaria</span> nos especializamos en ofrecer servicios financieros, contables y tributarios con un enfoque estratégico y humano. Ayudamos a empresas y emprendedores a tomar decisiones informadas, garantizar el cumplimiento normativo y optimizar su rentabilidad.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-10 mt-10">
          <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-[#0A66CC] mb-3">Nuestra Misión</h2>
            <p className="text-gray-700 leading-relaxed">
              Brindar servicios contables y tributarios de excelencia, garantizando precisión, confianza y cumplimiento para cada cliente. Nos comprometemos con el desarrollo financiero sostenible de las empresas con las que trabajamos.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-[#0A66CC] mb-3">Nuestra Visión</h2>
            <p className="text-gray-700 leading-relaxed">
              Ser reconocidos en Latinoamérica como una firma líder en consultoría contable y tributaria, caracterizada por su innovación, ética y acompañamiento estratégico a cada cliente.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#0A66CC] to-[#60A5FA] text-white rounded-2xl shadow-lg p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <span className="text-4xl">🤝</span>
              <h3 className="font-semibold mt-3">Integridad</h3>
              <p className="text-sm opacity-90 mt-2">Actuamos con transparencia y ética profesional en cada decisión.</p>
            </div>
            <div>
              <span className="text-4xl">📊</span>
              <h3 className="font-semibold mt-3">Precisión</h3>
              <p className="text-sm opacity-90 mt-2">Ofrecemos resultados exactos y confiables basados en un análisis riguroso.</p>
            </div>
            <div>
              <span className="text-4xl">🚀</span>
              <h3 className="font-semibold mt-3">Crecimiento</h3>
              <p className="text-sm opacity-90 mt-2">Impulsamos el desarrollo continuo de nuestros clientes y de nuestro equipo.</p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row items-center gap-10">
          <Image
            src="/images/equipo-contable.jpg"
            alt="Equipo contable de Reivaj"
            width={420}
            height={280}
            className="rounded-2xl shadow-md object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-[#0A66CC] mb-4">Nuestro Compromiso</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              En Reivaj trabajamos junto a nuestros clientes para construir relaciones de largo plazo basadas en la confianza, la transparencia y la excelencia técnica. Nos aseguramos de que cada acción contable y tributaria se realice con responsabilidad, estrategia y visión empresarial.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
