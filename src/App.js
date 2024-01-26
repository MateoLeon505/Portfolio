import { Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from './Components/index.js'
import { Home, About, Services, Projects, Contact } from './Views/index.js';
import './App.css'

const App = () => {

  return (
    <div> 
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Services/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
