import { Routes, Route } from 'react-router-dom';
import { Home, About, Services, Projects, Contact } from './Views/index.js';
import { NavBar, Footer, FloatButton } from './Components/index.js'
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
      <FloatButton/>
      <Footer/>
    </div>
  );
}

export default App;
