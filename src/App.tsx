import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Treatments from "./components/Treatments";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {/* A página principal será renderizada mesmo enquanto o loading está ativo */}
      <Navbar />
      <Home />
      <About />
      <Treatments />
      <Contact />
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} FaceTraining® Studio</p>
      </footer>

      {/* O contêiner de loading estará por cima da página */}
      {loading && <Loading setLoading={setLoading} />}
    </div>
  );
}

export default App;
