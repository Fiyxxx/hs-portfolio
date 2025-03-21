import { useState } from "react";
import Header from "./components/Header";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

const App = () => {
  console.log("✅ App is rendering...");

  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <Header />
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Education />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;