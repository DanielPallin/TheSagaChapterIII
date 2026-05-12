import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    
    // key
    formData.append("access_key", "8d5ee08f-16a1-422d-a595-c741f26f01f9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          'Accept': 'application/json'
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.currentTarget.reset(); // Tömmer formuläret
      } else {
        console.error("Web3Forms Error:", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Nätverksfel eller JSON-parse fel:", error);
      setStatus('error');
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="max-w-4xl mx-auto space-y-16 py-12"
    >
      <header className="text-center space-y-6 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-cinzel text-blood uppercase tracking-widest drop-shadow-[0_0_15px_rgba(138,3,3,0.3)]">
          Send a Raven
        </h1>
        <p className="text-lg text-parchment/80 leading-relaxed font-light">
          Whether you seek an alliance, wish to discuss the lore of Zharuun, or have inquiries regarding the development of The Saga, the shadows are listening.
        </p>
        <div className="flex justify-center pt-4" aria-hidden="true">
          <div className="w-24 h-px bg-linear-to-r from-transparent via-blood to-transparent opacity-60" />
        </div>
      </header>

      {/* kontaktformulär */}
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="bg-blood/5 border border-blood/20 p-8 md:p-12 space-y-8 relative overflow-hidden"
        onSubmit={handleSubmit}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(138,3,3,0.05)_0%,transparent_50%)] pointer-events-none" />

        {/* status */}
        {status === 'success' && (
          <div className="bg-blood/20 border border-blood text-parchment p-4 text-center font-cinzel tracking-widest">
            The raven has been dispatched. We will read your words in the shadows.
          </div>
        )}
        
        {status === 'error' && (
          <div className="bg-red-900/50 border border-red-500 text-parchment p-4 text-center font-cinzel tracking-widest">
            The raven was shot down. Please try again.
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 relative z-10">
          <div className="space-y-2">
            <label htmlFor="name" className="font-cinzel text-blood tracking-widest text-sm uppercase block">
              Your Name
            </label>
            <input 
              type="text" 
              id="name"
              name="name"
              required
              className="w-full bg-abyss border-b border-parchment/30 text-parchment py-3 px-4 focus:outline-none focus:border-blood focus:bg-blood/10 transition-colors font-light"
              placeholder="Enter your name..."
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="font-cinzel text-blood tracking-widest text-sm uppercase block">
              Your Seal (Email)
            </label>
            <input 
              type="email" 
              id="email"
              name="email"
              required
              className="w-full bg-abyss border-b border-parchment/30 text-parchment py-3 px-4 focus:outline-none focus:border-blood focus:bg-blood/10 transition-colors font-light"
              placeholder="Enter your email..."
            />
          </div>
        </div>

        <div className="space-y-2 relative z-10">
          <label htmlFor="message" className="font-cinzel text-blood tracking-widest text-sm uppercase block">
            Your Message
          </label>
          <textarea 
            id="message"
            name="message"
            required
            rows={5}
            className="w-full bg-abyss border-b border-parchment/30 text-parchment py-3 px-4 focus:outline-none focus:border-blood focus:bg-blood/10 transition-colors font-light resize-none"
            placeholder="Speak your mind..."
          />
        </div>

                {/* Anti-spam honeypot */}
                <label htmlFor="contact-botcheck" className="sr-only">
          Leave unchecked (spam protection)
        </label>
        <input
          id="contact-botcheck"
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
        />

        <div className="pt-4 text-center relative z-10">
          <button 
            type="submit"
            disabled={status === 'submitting'}
            className="px-12 py-4 border border-blood text-parchment hover:bg-blood hover:text-abyss transition-all duration-500 font-cinzel tracking-[0.3em] uppercase cursor-pointer relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 group-hover:drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]">
              {status === 'submitting' ? 'Dispatching...' : 'Dispatch Message'}
            </span>
            <div className="absolute inset-0 bg-blood scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </button>
        </div>
      </motion.form>

      {/* alts */}
      <div className="text-center space-y-4 pt-12">
        <p className="font-cinzel text-parchment/60 tracking-widest uppercase text-sm">
          coming soon...
        </p>
        <div className="flex justify-center space-x-8 text-parchment/80 font-light">
          <a href="#" className="hover:text-blood transition-colors">Twitter / X</a>
          <span className="text-blood/30">|</span>
          <a href="#" className="hover:text-blood transition-colors">Discord</a>
          <span className="text-blood/30">|</span>
          <a href="#" className="hover:text-blood transition-colors">Steam</a>
        </div>
      </div>
    </motion.section>
  );
}