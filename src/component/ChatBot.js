"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState("inicio")

  const handleWhatsapp = () => {
    const mensaje = encodeURIComponent(
      "Hola 👋, deseo más información sobre los servicios de Reivaj Consultoría Contable y Tributaria."
    )
    window.open(`https://wa.me/51998804826?text=${mensaje}`, "_blank")
  }

  return (
    <>
      {/* === BOTÓN CHATBOT DERECHA === */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 cursor-pointer"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-5 text-sm text-gray-700"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 border-b border-gray-200 pb-3 mb-3">
                <Image
                  src="/images/12705795114.png"
                  alt="Reivaj ChatBot"
                  width={45}
                  height={45}
                  className="rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-[#0A66CC]">Asistente Reivaj</h3>
                  <p className="text-xs text-gray-500">En línea ahora</p>
                </div>
              </div>

              {step === "inicio" && (
                <div className="space-y-3">
                  <p className="bg-gray-100 rounded-xl p-3">
                    👋 ¡Hola! Soy tu asistente virtual de <b>Reivaj Consultoría</b>.
                    ¿En qué puedo ayudarte hoy?
                  </p>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setStep("servicios")}
                      className="w-full bg-[#0A66CC]/10 text-[#0A66CC] font-medium py-2 rounded-lg hover:bg-[#0A66CC]/20 transition"
                    >
                      Ver servicios
                    </button>
                    <button
                      onClick={() => setStep("contacto")}
                      className="w-full bg-[#0A66CC]/10 text-[#0A66CC] font-medium py-2 rounded-lg hover:bg-[#0A66CC]/20 transition"
                    >
                      Formas de contacto
                    </button>
                    <button
                      onClick={handleWhatsapp}
                      className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
                    >
                      Hablar por WhatsApp 💬
                    </button>
                  </div>
                </div>
              )}

              {step === "servicios" && (
                <div className="space-y-3">
                  <p className="bg-gray-100 rounded-xl p-3">
                    Estos son algunos de nuestros servicios principales:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>📊 Contabilidad Integral</li>
                    <li>💼 Asesoría Tributaria</li>
                    <li>🧾 Auditoría Financiera</li>
                    <li>🏦 Planeamiento Financiero</li>
                    <li>👥 Gestión Laboral</li>
                  </ul>
                  <button
                    onClick={handleWhatsapp}
                    className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition mt-2"
                  >
                    Consultar por WhatsApp
                  </button>
                  <button
                    onClick={() => setStep("inicio")}
                    className="w-full text-gray-500 hover:text-[#0A66CC] text-sm mt-1"
                  >
                    ← Volver al inicio
                  </button>
                </div>
              )}

              {step === "contacto" && (
                <div className="space-y-3">
                  <p className="bg-gray-100 rounded-xl p-3">
                    📍 <b>Jr. Lima 326, Oficina 306 - Huancayo</b>
                    <br />📞 +51 998 804 826
                    <br />✉️ jjasesoria.contabilidad@gmail.com
                  </p>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={handleWhatsapp}
                      className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
                    >
                      Escribir al WhatsApp 💬
                    </button>
                    <button
                      onClick={() => setStep("inicio")}
                      className="w-full text-gray-500 hover:text-[#0A66CC] text-sm mt-1"
                    >
                      ← Volver al inicio
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-[#0A66CC] hover:bg-[#084b99] shadow-lg flex items-center justify-center transition-all duration-300"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-7 h-7">
              <path d="M16.72 13.29A8.06 8.06 0 0017 11a8 8 0 10-8 8 8.06 8.06 0 002.29-.28l3.34 1.11a1 1 0 001.27-1.27l-1.18-3.27zM10 13a2 2 0 112-2 2 2 0 01-2 2z" />
            </svg>
          )}
        </button>
      </motion.div>

      {/* === BOTÓN WHATSAPP IZQUIERDA === */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <button
          onClick={handleWhatsapp}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        >
          <Image
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
            alt="WhatsApp"
            width={28}
            height={28}
            className="invert"
          />
        </button>
      </motion.div>
    </>
  )
}
