import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { X, Send, MessageSquare, Sparkles } from 'lucide-react';

const FloatingWidgets = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: 'bot', 
      text: '¡Hola! Soy el asistente de Luis Enrique Abri Fernández, quien combina marketing para hacer crecer tu marca con mentoría en mercados financieros. Puedes conocer sus servicios, casos y comunidad. ¿En qué te puedo orientar hoy?', 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const generateAIResponse = (userInput) => {
    const text = userInput.toLowerCase();
    
    if (text.includes('hola') || text.includes('saludos') || text.includes('buenos dias') || text.includes('buenas tardes')) {
      return "¡Un cordial saludo! Luis Enrique combina marketing, contenido y educación financiera paso a paso. ¿Te gustaría conocer sus servicios, sus casos o coordinar una conversación directa?";
    }
    if (text.includes('servicio') || text.includes('solucion') || text.includes('ofrece') || text.includes('que hace') || text.includes('qué hace') || text.includes('que sabe')) {
      return "Luis Enrique trabaja en cuatro frentes:\n\n1. Estrategia de Comunicación: mensajes clave y plan de difusión para conectar con las personas correctas.\n2. Gestión de Redes y Contenido: imagen, video y copy con una línea visual coherente.\n3. Asesoría Estratégica para Emprendedores: diagnóstico FODA/PESTEL, segmentación y plan de acción.\n4. Mentoría en Mercados Financieros: educación paso a paso, con práctica guiada y gestión de riesgo.";
    }
    if (text.includes('perfil') || text.includes('adaptable') || text.includes('versatil') || text.includes('habilidades') || text.includes('quien es') || text.includes('quién es')) {
      return "Luis Enrique Abri Fernández estudia Marketing, Publicidad y Comercio y es mentor en mercados financieros. Combina la creatividad del marketing con la disciplina de los mercados: identifica el problema, diseña la solución y la entrega de forma clara, digital o presencial.";
    }
    if (text.includes('proyecto') || text.includes('caso') || text.includes('trabajo') || text.includes('exito') || text.includes('éxito')) {
      return "Algunos resultados de su trabajo con emprendedores:\n• Tienda de moda local: +60% de interacción y +1.200 seguidores en 90 días\n• Delivery: plan de acción de 90 días con 2 segmentos prioritarios\n• Comunidad de aprendizaje financiero: +30 participantes\n\nPuedes ver el detalle en la sección 'Casos'.";
    }
    if (text.includes('precio') || text.includes('tarifa') || text.includes('cotizacion') || text.includes('cotización') || text.includes('costo') || text.includes('asesoria') || text.includes('asesoría') || text.includes('consulta')) {
      return "Cada propuesta se formula a medida según el tamaño del desafío y tus metas. Puedes contactar a Luis Enrique por WhatsApp (+591 70000000) para conversar sin compromiso.";
    }
    if (text.includes('mentoria') || text.includes('mentoría') || text.includes('mentor') || text.includes('aprender') || text.includes('comunidad')) {
      return "La mentoría en mercados financieros acompaña el aprendizaje con comunidad y práctica guiada: análisis del mercado, comportamiento de activos, gestión de riesgo y explicación didáctica. Es contenido educativo; no constituye recomendación de inversión.";
    }
    if (text.includes('finanza') || text.includes('mercado') || text.includes('inversion') || text.includes('inversión') || text.includes('invertir') || text.includes('activos') || text.includes('bolsa') || text.includes('trading')) {
      return "Sobre mercados financieros, Luis Enrique enseña paso a paso y con enfoque educativo: entender el mercado, analizar activos, practicar con riesgo controlado y tomar decisiones informadas. No hay promesas de rendimiento ni recomendaciones personalizadas: es formación para que decidas con criterio.";
    }
    if (text.includes('contacto') || text.includes('contacta') || text.includes('escribir') || text.includes('correo') || text.includes('telefono') || text.includes('celular') || text.includes('hablar')) {
      return "Comunícate directamente con Luis Enrique por WhatsApp al +591 70000000 (botón en la esquina inferior izquierda) o por correo a luisabri.contacto@gmail.com.";
    }
    if (text.includes('gracias') || text.includes('excelente') || text.includes('perfecto')) {
      return "¡Ha sido un placer! Estoy a tu total disposición para cualquier consulta adicional.";
    }
    
    return "Gracias por tu consulta. Luis Enrique comparte contenido de marketing y educación financiera paso a paso. Puedes contactarlo por WhatsApp al +591 70000000 o al correo luisabri.contacto@gmail.com.";
  };

  const processMessage = (textToSend) => {
    if (!textToSend.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: generateAIResponse(textToSend),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 600);
  };

  const handleSend = (e) => {
    e.preventDefault();
    processMessage(input);
    setInput('');
  };

  return (
    <>
      {/* Botón Flotante WhatsApp Oficial (Izquierda) */}
      <div className="fixed bottom-6 left-6 z-40">
        <motion.a
          href="https://wa.me/59170000000?text=Hola%20Luis%20Enrique,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20conversar."
          target="_blank"
          rel="noreferrer"
          aria-label="Contactar por WhatsApp"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-13 h-13 p-3.5 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-[0_4px_25px_rgba(16,185,129,0.45)] hover:bg-emerald-600 transition-all group"
        >
          <FaWhatsapp size={26} className="group-hover:scale-110 transition-transform" />
        </motion.a>
      </div>

      {/* Widget Chatbot (Derecha) */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence mode="wait">
          {isChatOpen ? (
            /* Ventana del Asistente Flotante */
            <motion.div
              key="chat-window"
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ duration: 0.22 }}
              className="glass-card w-[320px] sm:w-[380px] max-h-[82vh] rounded-2xl bg-obsidian-card/95 backdrop-blur-2xl border border-white/12 shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col"
            >
              {/* Encabezado del Asistente */}
              <div className="bg-white/[0.04] p-4 border-b border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-deep/20 border border-emerald-light/30 flex items-center justify-center text-emerald-light shadow-sm">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Asistente de Luis Enrique</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                      <span className="text-titanium text-[11px] font-medium">Disponible ahora</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsChatOpen(false)}
                  aria-label="Cerrar chat"
                  className="p-1.5 rounded-xl text-titanium hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Contenedor de Mensajes */}
              <div className="p-4 h-[280px] sm:h-[310px] overflow-y-auto flex flex-col gap-3 text-xs leading-relaxed bg-obsidian-black/50">
                {messages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={`flex flex-col max-w-[88%] ${
                      msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'
                    }`}
                  >
                    <div 
                      className={`p-3.5 rounded-2xl whitespace-pre-line ${
                        msg.sender === 'user'
                          ? 'bg-emerald-deep text-white rounded-br-sm shadow-sm'
                          : 'bg-white/[0.05] border border-white/[0.08] text-slate-200 rounded-bl-sm shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-titanium mt-1 px-1">{msg.time}</span>
                  </div>
                ))}

                {isTyping && (
                  <div className="self-start bg-white/[0.05] border border-white/[0.08] p-3 rounded-2xl rounded-bl-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-light animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-light animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-light animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Formulario de Entrada */}
              <form onSubmit={handleSend} className="p-3 border-t border-white/[0.08] bg-white/[0.03] flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pregunta sobre servicios, casos, mentoría..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white placeholder-titanium focus:outline-none focus:border-emerald-light/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2 rounded-xl bg-emerald-deep text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-emerald-hover transition-all flex items-center justify-center shadow-sm"
                  aria-label="Enviar mensaje"
                >
                  <Send size={15} />
                </button>
              </form>
            </motion.div>
          ) : (
            /* Botón Gatillador Cuando el Chat está Cerrado */
            <motion.button
              key="chat-trigger"
              onClick={() => setIsChatOpen(true)}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-13 h-13 p-3.5 rounded-2xl bg-emerald-deep text-white flex items-center justify-center shadow-[0_4px_25px_rgba(5,150,105,0.45)] hover:bg-emerald-hover transition-all focus:outline-none group"
              aria-label="Abrir asistente virtual"
            >
              <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingWidgets;
