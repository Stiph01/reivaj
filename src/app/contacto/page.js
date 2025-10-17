import Image from "next/image"

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F5F8FF] to-white text-gray-900 flex flex-col items-center px-6 sm:px-20 py-24 font-sans">
      <section className="max-w-5xl w-full text-center sm:text-left">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#0A66CC] to-[#4F46E5] bg-clip-text text-transparent mb-4">
            Contáctanos
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Estamos listos para ayudarte a optimizar la gestión contable y tributaria de tu empresa. 
            Completa el formulario o comunícate con nosotros a través de nuestros canales oficiales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
            <h2 className="text-2xl font-semibold text-[#0A66CC] mb-6 text-center sm:text-left">
              Envíanos un mensaje
            </h2>
            <form className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A66CC] bg-white"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A66CC] bg-white"
              />
              <input
                type="text"
                placeholder="Asunto"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A66CC] bg-white"
              />
              <textarea
                rows="5"
                placeholder="Mensaje"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A66CC] bg-white resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#0A66CC] hover:bg-[#084b99] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-[#0A66CC] mb-3">
                Información de contacto
              </h2>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Dirección:</span> Jr. Lima 326, Huancayo, Perú
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Teléfono:</span> +51 999 456 789
              </p>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Correo:</span> contacto@reivajconsultoria.com
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#0A66CC] mb-3">
                Horario de atención
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Lunes a Viernes: 9:00 a.m. - 6:00 p.m.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Sábados: 9:00 a.m. - 1:00 p.m.
              </p>
            </div>

            <div className="flex justify-center sm:justify-start gap-5">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-[#0A66CC] text-white rounded-full hover:bg-[#084b99] transition"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                  className="invert"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-[#0A66CC] text-white rounded-full hover:bg-[#084b99] transition"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="invert"
                />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center bg-[#0A66CC] text-white rounded-full hover:bg-[#084b99] transition"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg"
                  alt="Instagram"
                  width={20}
                  height={20}
                  className="invert"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <iframe
            className="w-full h-80 rounded-3xl shadow-xl border-2 border-[#0A66CC]/20"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.622075567791!2d-75.2101124!3d-12.0695033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x910e964fb2906ba7%3A0xb296303bb47ccdc2!2sJr.%20Lima%20326%2C%20Huancayo%2012001%2C%20Per%C3%BA!5e0!3m2!1ses-419!2sar!4v1760740909034!5m2!1ses-419!2sar"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="text-center mt-6">
            <a
              href="https://maps.app.goo.gl/ggecBrXDBBrUkWpw7"
              target="_blank"
              className="inline-block bg-[#0A66CC] hover:bg-[#084b99] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
