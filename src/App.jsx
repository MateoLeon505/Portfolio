import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home, About, Services, Projects, Contact } from "./Views/index.js";
import { NavBar, Footer, FloatButton, Loading } from "./Components/index.js";
import "./App.css";

const App = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {location.pathname !== "/contact" && <FloatButton />}
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
