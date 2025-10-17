import Image from "next/image";

export default function Servicios() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-6 sm:px-20 py-24">
      <section className="max-w-6xl w-full text-center sm:text-left">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-[#0A66CC] mb-4">Nuestros Servicios</h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            En <span className="font-semibold text-[#0A66CC]">Reivaj Consultoría Contable y Tributaria</span> ofrecemos soluciones profesionales que fortalecen la gestión financiera, contable y fiscal de tu empresa. Nuestro objetivo es brindarte tranquilidad, cumplimiento y crecimiento sostenible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-8 text-center">
            <Image
              src="/images/contabilidad.jpg"
              alt="Contabilidad"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold text-[#0A66CC] mb-3">Contabilidad Integral</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Elaboración de estados financieros, registro contable de operaciones, conciliaciones bancarias y reportes personalizados para la toma de decisiones empresariales.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-8 text-center">
            <Image
              src="/images/tributaria.jpg"
              alt="Asesoría Tributaria"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold text-[#0A66CC] mb-3">Asesoría Tributaria</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Planificación fiscal, revisión de impuestos, declaraciones mensuales y anuales, representación ante SUNAT y estrategias para optimizar cargas tributarias.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-8 text-center">
            <Image
              src="/images/auditoria.jpg"
              alt="Auditoría Financiera"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold text-[#0A66CC] mb-3">Auditoría Financiera</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Evaluamos y verificamos la exactitud de la información contable y el cumplimiento normativo para garantizar transparencia y confianza ante inversionistas y autoridades.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-8 text-center">
            <Image
              src="/images/planeamiento.jpg"
              alt="Planeamiento Financiero"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold text-[#0A66CC] mb-3">Planeamiento Financiero</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Diseñamos estrategias financieras que impulsan la rentabilidad, optimizan recursos y facilitan el crecimiento sostenido de tu negocio a corto y largo plazo.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-8 text-center">
            <Image
              src="/images/nominas.jpg"
              alt="Gestión Laboral"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold text-[#0A66CC] mb-3">Gestión Laboral y Planillas</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Administración de planillas, liquidaciones, beneficios sociales, contratos laborales y cumplimiento de obligaciones ante entidades reguladoras.
            </p>
          </div>

          <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-8 text-center">
            <Image
              src="/images/empresas.jpg"
              alt="Constitución de Empresas"
              width={100}
              height={100}
              className="mx-auto mb-4 rounded-full object-cover"
            />
            <h2 className="text-2xl font-semibold text-[#0A66CC] mb-3">Constitución de Empresas</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              Asesoramos en la creación de nuevas empresas, elección del régimen tributario adecuado y gestión de inscripción ante la SUNAT y Registros Públicos.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-[#0A66CC] mb-4">¿Por qué elegirnos?</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            En Reivaj nos distinguimos por nuestro compromiso, precisión y trato personalizado. Cada servicio está diseñado para ofrecerte seguridad financiera, cumplimiento tributario y acompañamiento estratégico en cada etapa de tu negocio.
          </p>
        </div>
      </section>
    </div>
  );
}
