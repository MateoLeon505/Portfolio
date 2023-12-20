import { useLocation, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx'
import Home from './Views/Home/Home.jsx';

const App = () => {

  const location = useLocation();

  return (
    <div> 
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
