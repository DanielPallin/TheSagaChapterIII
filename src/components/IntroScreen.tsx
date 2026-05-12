import { motion, AnimatePresence } from 'framer-motion';

interface IntroScreenProps {
  onEnter: () => void;
  isEntered: boolean;
}

export default function IntroScreen({ onEnter, isEntered }: IntroScreenProps) {
  return (
    <AnimatePresence>
      {!isEntered && (
        <motion.div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-abyss text-parchment"
          initial={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0 }} // Rullgardin
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div 
            className="text-center space-y-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
          >
            <h1 className="text-5xl md:text-7xl font-cinzel font-bold tracking-widest text-blood drop-shadow-lg">
              THE SAGA
            </h1>
            <p className="text-xl md:text-2xl font-cinzel tracking-widest uppercase">
              Chapter III
            </p>
            
            <button 
              onClick={onEnter}
              className="mt-12 px-8 py-3 border border-blood/50 text-blood hover:bg-blood hover:text-abyss transition-all duration-500 font-cinzel tracking-[0.2em] uppercase cursor-pointer"
            >
              Enter The Saga
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}