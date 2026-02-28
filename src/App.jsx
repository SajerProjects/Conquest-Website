import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheGap from './components/TheGap';
import TheProgram from './components/TheProgram';
import Curriculum from './components/Curriculum';
import WhoItsFor from './components/WhoItsFor';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';
import About from './pages/About';

function Home() {
  return (
    <>
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
