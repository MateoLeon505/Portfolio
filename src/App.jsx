import { Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from './Components/index.js'
import { Home, About, Services, Projects, Contact } from './Views/index.js';
import Fab from '@mui/material/Fab';
import { TbMessage } from "react-icons/tb";
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
      <Fab color="primary" aria-label="add" style={{position: 'fixed', bottom: 26, right: 26, transition: 'ease-in-out'}}>
        <TbMessage class='contactIcon'/>
      </Fab>
      <Footer/>
    </div>
  );
}

export default App;
