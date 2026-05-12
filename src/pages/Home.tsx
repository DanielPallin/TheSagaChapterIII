import { motion } from 'framer-motion';

export default function Home() {
  return (

    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="max-w-3xl mx-auto text-center space-y-10 mt-16"
      aria-labelledby="home-title"
    >
      <header className="space-y-4">
        <h1 
          id="home-title" 
          className="text-4xl md:text-6xl font-cinzel font-bold text-blood drop-shadow-[0_0_15px_rgba(138,3,3,0.3)] tracking-wider"
        >
          Welcome to The Saga
        </h1>
        <h2 className="text-xl md:text-2xl font-cinzel text-parchment/80 tracking-[0.2em] uppercase">
          Chapter III — A Dark Fantasy Concept
        </h2>
      </header>

      {}
      <div className="space-y-6 text-lg md:text-xl leading-relaxed text-parchment/90 font-light">
        <p>
          Step into the unforgiving, dark fantasy world of Zharuun. 
          This experience serves as a living conceptual exploration, representing the third chapter of a much larger epic.
        </p>
        <p>
          The narrative remains unfinished, and the lore is being forged in real-time. 
          Tread carefully as you explore — some secrets are intentionally kept hidden by design.
        </p>
      </div>

      {}
      <div className="flex justify-center pt-8" aria-hidden="true">
        <div className="w-32 h-px bg-linear-to-r from-transparent via-blood to-transparent opacity-60" />
      </div>
    </motion.section>
  );
}