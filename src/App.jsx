import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Faq from "./components/Faq";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
