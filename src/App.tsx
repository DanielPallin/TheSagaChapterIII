import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IntroScreen from './components/IntroScreen';
import Home from './pages/Home';
import Lore from './pages/Lore';
import Characters from './pages/Characters';
import Vision from './pages/Vision';
import Contact from './pages/Contact';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    setHasEntered(true);
    document.body.style.overflow = 'auto'; 
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
  };

  return (
    <Router>
      <audio ref={audioRef} src="/themesong.mp3" loop />

      <IntroScreen onEnter={handleEnter} isEntered={hasEntered} />

      {hasEntered && (
        <div className="min-h-screen flex flex-col animate-in fade-in duration-1000">
          
          {/* navigation */}
          <nav aria-label="Main navigation" className="p-6 border-b border-white/10 flex justify-center space-x-8 font-cinzel text-sm md:text-base tracking-widest">
            <Link to="/" className="hover:text-blood transition-colors">HOME</Link>
            <Link to="/lore" className="hover:text-blood transition-colors">LORE</Link>
            <Link to="/characters" className="hover:text-blood transition-colors">CHARACTERS</Link>
            <Link to="/vision" className="hover:text-blood transition-colors">GAME VISION</Link>
            <Link to="/contact" className="hover:text-blood transition-colors">CONTACT</Link>
          </nav>

          {/* main */}
          <main className="grow p-8 md:p-16 max-w-6xl mx-auto w-full">
            <Routes>
              {}
              <Route path="/" element={<Home />} />

              <Route path="/lore" element={<Lore />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      )}
    </Router>
  );
}