import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheGap from './components/TheGap';
import TheProgram from './components/TheProgram';
import Curriculum from './components/Curriculum';
import WhoItsFor from './components/WhoItsFor';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import NeuralNetwork from './components/NeuralNetwork';
import About from './pages/About';

function Splash({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg flex items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <motion.div
        className="w-[200px] h-[200px] md:w-[280px] md:h-[280px]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <NeuralNetwork />
      </motion.div>
    </motion.div>
  );
}

function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Hero />
            <TheGap />
            <WhoItsFor />
            <Curriculum />
            <TheProgram />
            <ApplicationForm />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
