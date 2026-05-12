import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IntroScreen from './components/IntroScreen';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEnter = () => {
    setHasEntered(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.8; // Kusligt låg volym
      audioRef.current.play();
    }
  };

  return (
    <Router>
      {/* music */}
      <audio ref={audioRef} src="/themesong.mp3" loop />

      <IntroScreen onEnter={handleEnter} isEntered={hasEntered} />

      {/* show after "Enter" */}
      <div className={`min-h-screen flex flex-col transition-opacity duration-1000 ${hasEntered ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Navigation */}
        <nav className="p-6 border-b border-white/10 flex justify-center space-x-8 font-cinzel text-sm md:text-base tracking-widest">
          <Link to="/" className="hover:text-blood transition-colors">HOME</Link>
          <Link to="/lore" className="hover:text-blood transition-colors">LORE</Link>
          <Link to="/characters" className="hover:text-blood transition-colors">CHARACTERS</Link>
          <Link to="/vision" className="hover:text-blood transition-colors">GAME VISION</Link>
          <Link to="/contact" className="hover:text-blood transition-colors">CONTACT</Link>
        </nav>

        {/* main content */}
        <main className="grow p-8 md:p-16 max-w-6xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<h2 className="text-4xl font-cinzel">Welcome to Zharuun</h2>} />
            <Route path="/lore" element={<h2 className="text-4xl font-cinzel">The Drowned Court</h2>} />
            <Route path="/characters" element={<h2 className="text-4xl font-cinzel">Bloodlines</h2>} />
            <Route path="/vision" element={<h2 className="text-4xl font-cinzel">Our Vision</h2>} />
            <Route path="/contact" element={<h2 className="text-4xl font-cinzel">Send a Raven</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}