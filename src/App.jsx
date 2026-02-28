import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheGap from './components/TheGap';
import TheProgram from './components/TheProgram';
import Curriculum from './components/Curriculum';
import WhoItsFor from './components/WhoItsFor';
import Founder from './components/Founder';
import Principles from './components/Principles';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheGap />
        <TheProgram />
        <Curriculum />
        <WhoItsFor />
        <Founder />
        <Principles />
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
