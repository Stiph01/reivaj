"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [typing, setTyping] = useState(false)
  const [hoverWhatsApp, setHoverWhatsApp] = useState(false)
  const router = useRouter()
  const chatRef = useRef(null)

  const delay = (ms) => new Promise((res) => setTimeout(res, ms))
  const abrirWhatsApp = (mensaje) => {
    const texto = encodeURIComponent(mensaje)
    window.open(`https://wa.me/51998804826?text=${texto}`, "_blank")
  }

  const addMessage = async (text, sender = "bot", delayTime = 500) => {
    setTyping(true)
    await delay(delayTime)
    setTyping(false)
    setMessages((prev) => [...prev, { text, sender }])
  }

  const scrollToBottom = () => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }
  useEffect(scrollToBottom, [messages, typing])

  const showMainOptions = async () => {
    await addMessage("Selecciona una opción:", "bot", 400)
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot-buttons",
        buttons: [
          { label: "💼 Ver servicios", action: "servicios" },
          { label: "📞 Contactar ahora", action: "contacto" },
          { label: "ℹ️ Información general", action: "info" },
        ],
      },
    ])
  }

  const handleBotResponse = async (action) => {
    if (action === "servicios") {
      await addMessage("Nuestros servicios principales 👇", "bot", 500)
      await addMessage(
        "📊 Contabilidad Integral\n💼 Asesoría Tributaria\n🧾 Auditoría Financiera\n🏦 Planeamiento Financiero\n👥 Gestión Laboral",
        "bot",
        600
      )
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot-buttons",
          buttons: [
            { label: "Contabilidad", action: "contabilidad" },
            { label: "Tributaria", action: "tributaria" },
            { label: "Auditoría", action: "auditoria" },
            { label: "Planeamiento", action: "planeamiento" },
            { label: "Laboral", action: "laboral" },
          ],
        },
      ])
    }

    if (action === "contacto") {
      await addMessage("📞 Conectándote con un asesor de Reivaj...", "bot", 600)
      await delay(500)
      abrirWhatsApp("Hola 👋, quiero hablar con un asesor de Reivaj Consultoría Contable y Tributaria.")
      await addMessage("Abriendo WhatsApp 💬", "bot", 400)
      setOpen(false)
    }

    if (action === "info") {
      await addMessage(
        "Reivaj Consultoría Contable y Tributaria brinda asesoría contable, tributaria y financiera con más de 10 años de experiencia en Perú y Latinoamérica 🌎.",
        "bot",
        600
      )
      await showMainOptions()
    }

    if (["contabilidad", "tributaria", "auditoria", "planeamiento", "laboral"].includes(action)) {
      await addMessage(`Excelente elección: ${action}. 🚀`, "bot", 500)
      await addMessage("Te conectaremos con un asesor especializado...", "bot", 600)
      await delay(800)
      abrirWhatsApp(`Hola 👋, quiero obtener más información sobre el servicio de ${action} de Reivaj Consultoría.`)
      setOpen(false)
    }
  }

  useEffect(() => {
    if (open && messages.length === 0) {
      ;(async () => {
        await addMessage("🤖 ¡Hola! Soy tu asistente contable y financiero virtual de Reivaj.", "bot", 600)
        await addMessage("¿En qué puedo ayudarte hoy?", "bot", 500)
        await showMainOptions()
      })()
    }
  }, [open])

  return (
    <>
      {/* CHATBOT (DERECHA) */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <AnimatePresence>
          {open && (
            <motion.div
              className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 border-b border-gray-200 bg-[#0A66CC] text-white px-4 py-3">
                <Image
                  src="/images/12705795114.png"
                  alt="Asistente Reivaj"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white/50"
                />
                <div>
                  <h3 className="font-semibold text-sm">Asistente Reivaj</h3>
                  <p className="text-xs text-white/80">En línea</p>
                </div>
              </div>

              <div
                ref={chatRef}
                className="flex-1 overflow-y-auto px-4 py-3 text-sm space-y-2 scrollbar-thin scrollbar-thumb-[#0A66CC]/20"
              >
                {messages.map((m, i) => (
                  <div key={i}>
                    {m.sender === "bot" && (
                      <motion.div
                        className="self-start bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl max-w-[80%] shadow-sm whitespace-pre-line"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        {m.text}
                      </motion.div>
                    )}
                    {m.sender === "user" && (
                      <motion.div
                        className="self-end bg-[#0A66CC] text-white px-4 py-2 rounded-2xl max-w-[80%] shadow-sm whitespace-pre-line ml-auto"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        {m.text}
                      </motion.div>
                    )}
                    {m.sender === "bot-buttons" && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {m.buttons.map((btn, j) => (
                          <motion.button
                            key={j}
                            onClick={() => handleBotResponse(btn.action)}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#0A66CC]/10 hover:bg-[#0A66CC]/20 text-[#0A66CC] border border-[#0A66CC]/30 px-3 py-1.5 rounded-full text-xs transition-all"
                          >
                            {btn.label}
                          </motion.button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {typing && (
                  <div className="self-start bg-gray-100 text-gray-600 px-4 py-2 rounded-2xl w-24 animate-pulse">
                    Escribiendo...
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* BOTÓN DEL CHATBOT CON ÍCONO DE ROBOT */}
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-[#0A66CC] hover:bg-[#084b99] shadow-lg flex items-center justify-center transition-all duration-300"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ duration: 0.3 }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" className="w-7 h-7">
                <path d="M256 0c17.7 0 32 14.3 32 32v32h48c35.3 0 64 28.7 64 64v64h48c17.7 0 32 14.3 32 32v192c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V224c0-17.7 14.3-32 32-32h48v-64c0-35.3 28.7-64 64-64h48V32c0-17.7 14.3-32 32-32zM144 224a32 32 0 100 64 32 32 0 000-64zm224 0a32 32 0 100 64 32 32 0 000-64zm-112 96c-35.3 0-64 21.5-64 48s28.7 48 64 48 64-21.5 64-48-28.7-48-64-48z" />
              </svg>
            </motion.div>
          )}
        </button>
      </motion.div>

      {/* BOTÓN WHATSAPP CON TOOLTIP */}
      <div
        className="fixed bottom-6 left-6 z-50"
        onMouseEnter={() => setHoverWhatsApp(true)}
        onMouseLeave={() => setHoverWhatsApp(false)}
      >
        <AnimatePresence>
          {hoverWhatsApp && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-gray-900/90 text-white text-xs px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
            >
              💬 Hablar con un asesor
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() =>
            abrirWhatsApp("Hola 👋, quiero hablar con un asesor de Reivaj Consultoría Contable y Tributaria.")
          }
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] shadow-lg flex items-center justify-center transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-8 h-8">
            <path d="M16.03 3C9.38 3 4 8.38 4 15.02c0 2.54.79 4.9 2.13 6.87L4 29l7.33-2.06A11.96 11.96 0 0016.03 27C22.67 27 28 21.62 28 14.98S22.67 3 16.03 3zm0 21.93a9.93 9.93 0 01-5.06-1.38l-.36-.21-4.36 1.22 1.24-4.24-.23-.37A9.93 9.93 0 016.1 15.02c0-5.5 4.45-9.95 9.93-9.95S25.97 9.52 25.97 15s-4.45 9.93-9.94 9.93zm5.66-7.41c-.3-.15-1.79-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.46-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.52-.07-.15-.67-1.6-.92-2.18-.24-.57-.49-.5-.67-.5-.17 0-.38-.02-.58-.02-.2 0-.52.08-.8.38-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.09 3.2 5.08 4.48.71.31 1.27.5 1.7.64.72.23 1.38.2 1.9.12.58-.09 1.79-.73 2.04-1.44.25-.71.25-1.32.17-1.44-.07-.12-.27-.2-.57-.35z" />
          </svg>
        </button>
      </div>
    </>
  )
}
