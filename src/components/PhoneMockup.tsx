import { motion } from 'framer-motion';

interface PhoneMockupProps {
  imageSrc: string;
  alt: string;
  delay?: number;
  position?: 'left' | 'center' | 'right';
  className?: string;
}

export default function PhoneMockup({
  imageSrc,
  alt,
  delay = 0,
  position = 'center',
  className = ''
}: PhoneMockupProps) {

  // Different animation based on position
  const variants = {
    left: {
      initial: { opacity: 0, x: -50, y: 30, rotate: -5 },
      animate: { opacity: 1, x: 0, y: 0, rotate: -5 }
    },
    center: {
      initial: { opacity: 0, y: 40, scale: 0.95 },
      animate: { opacity: 1, y: 0, scale: 1 }
    },
    right: {
      initial: { opacity: 0, x: 50, y: 30, rotate: 5 },
      animate: { opacity: 1, x: 0, y: 0, rotate: 5 }
    }
  };

  const hoverVariants = {
    left: { rotate: -3, scale: 1.05, transition: { type: "spring", stiffness: 300 } },
    center: { y: -10, scale: 1.05, transition: { type: "spring", stiffness: 300 } },
    right: { rotate: 3, scale: 1.05, transition: { type: "spring", stiffness: 300 } }
  };

  return (
    <motion.div
      initial={variants[position].initial}
      animate={variants[position].animate}
      whileHover={hoverVariants[position]}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative will-change-transform ${className}`}
    >
      {/* Phone frame/bezel */}
      <div className="relative rounded-[3rem] overflow-hidden bg-neutral-900 shadow-2xl border-[6px] border-neutral-900">
        {/* Screen content */}
        <div className="relative bg-black">
          {/* Actual screenshot */}
          <img
            src={imageSrc}
            alt={alt}
            className="w-full h-auto block"
          />
        </div>

        {/* Screen glare effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Reflection shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-accent/20 blur-xl rounded-full" />
    </motion.div>
  );
}
