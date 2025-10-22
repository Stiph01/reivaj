import Image from "next/image";
import { motion } from "framer-motion"

export default function Carrusel() {
  const fotos = [
      "/images/photo/IMG_9549.jpg",
      "/images/photo/IMG_9538.jpg",
      "/images/photo/IMG_9543.jpg",
      "/images/photo/IMG_9528.jpg",
      "/images/photo/IMG_9545.jpg",
      "/images/photo/IMG_9557.jpg",
      "/images/photo/IMG_9524.jpg",
    ]
    const duplicated = [...fotos, ...fotos]
    
    {
      /* CARRUSEL HORIZONTAL */
    }
  return (
      <section className="relative w-full flex justify-center items-center py-12">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="flex gap-6 sm:gap-8"
        >
          {duplicated.map((src, i) => (
            <motion.div key={i} className="rounded-2xl overflow-hidden shadow-lg flex-shrink-0" whileHover={{ scale: 1.04 }}>
              <Image
                src={src}
                alt={`Equipo Reivaj ${i + 1}`}
                width={420}
                height={420}
                className="object-cover w-[260px] sm:w-[320px] md:w-[400px] lg:w-[460px] h-[260px] sm:h-[320px] md:h-[400px] lg:h-[460px]"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
  );
}
