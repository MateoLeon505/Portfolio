import { useLocation, Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from './Components/index.js'
import { Home } from './Views/index.js';
import './App.css'

const App = () => {

  const location = useLocation();

  return (
    <div> 
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
