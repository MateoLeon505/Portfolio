import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Services, Projects, Contact } from "./Views/index.js";
import { NavBar, Footer, FloatButton } from "./Components/index.js";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";

const App = () => {
  return (
    <div>
      <Suspense fallback={<CircularProgress sx={style} />}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <FloatButton />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;

const style = {
  "--CircularProgress-size": "100px",
  "--CircularProgress-trackThickness": "17px",
  "--CircularProgress-progressThickness": "17px",
  // position: "absolute",
  // top: "50%",
  // left: "50%",
  // transform: "translate(-50%, -50%)",
  // width: 400,
  // bgcolor: "#121212",
  // border: "2px solid #181A1B",
  // boxShadow: 24,
  // p: 4,
};
