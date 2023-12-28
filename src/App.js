import { useLocation, Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/index.js'
import { Home } from './Views/index.js';

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
