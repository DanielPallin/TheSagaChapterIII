import { motion, AnimatePresence } from 'framer-motion';

interface IntroScreenProps {
  onEnter: () => void;
  isEntered: boolean;
}

const BloodDrop = ({ delay, duration, left, size }: { delay: number, duration: number, left: number, size: number }) => (
  <motion.div
    className="absolute top-[-50px] text-blood drop-shadow-[0_3px_5px_rgba(138,3,3,0.8)]"
    style={{ left: `${left}%`, width: size, height: size * 1.5 }}
    initial={{ y: 0, opacity: 0, scaleY: 0.8 }}
    animate={{ 
      y: ['0vh', '100vh'],
      opacity: [0, 0.9, 0.9, 0],
      scaleY: [0.8, 1.3, 0.9]
    }}
    transition={{
      duration: duration,
      ease: "easeIn",
      repeat: Infinity,
      delay: delay
    }}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12 2.694c-.463 0-1.077.295-1.636.85-2.023 2.003-7.364 8.243-7.364 12.355a9 9 0 0 0 18 0c0-4.112-5.34-10.352-7.364-12.355-.559-.554-1.173-.85-1.636-.85z" />
    </svg>
  </motion.div>
);

// random blood-drop size
const INITIAL_BLOOD_DROPS = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 6,
  duration: 3 + Math.random() * 4,
  size: 8 + Math.random() * 20
}));

export default function IntroScreen({ onEnter, isEntered }: IntroScreenProps) {
  
  return (
    <AnimatePresence>
      {!isEntered && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-abyss text-parchment overflow-hidden"
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          {INITIAL_BLOOD_DROPS.map(drop => (
            <BloodDrop 
              key={drop.id} 
              left={drop.left} 
              delay={drop.delay} 
              duration={drop.duration} 
              size={drop.size} 
            />
          ))}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)] pointer-events-none" />

          <motion.div 
            className="relative z-10 text-center space-y-8 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-8xl font-cinzel font-bold tracking-[0.2em] text-parchment drop-shadow-[0_0_15px_rgba(138,3,3,0.5)]">
              THE SAGA
            </h1>
            <h2 className="text-xl md:text-3xl font-cinzel tracking-[0.4em] text-blood uppercase">
              Chapter III
            </h2>
            
            <button 
              onClick={onEnter}
              className="mt-16 px-10 py-4 border border-blood/30 text-parchment hover:border-blood hover:bg-blood hover:text-abyss hover:shadow-[0_0_20px_rgba(138,3,3,0.8)] transition-all duration-700 font-cinzel tracking-[0.3em] uppercase cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">Enter the darkness</span>
              <div className="absolute inset-0 bg-blood scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}