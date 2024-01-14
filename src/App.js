import { NavBar, Footer } from './Components/index.js'
import { Home, About } from './Views/index.js';
import './App.css'

const App = () => {

  return (
    <div> 
      <NavBar/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
