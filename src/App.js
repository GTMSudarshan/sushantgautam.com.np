import Navbar from './Pages/Navbar';
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Skills from './Pages/Skills';
import Resume from './Pages/Resume';

function App() {
  return (

    <div className="App">
         <Navbar/>
        <Home />
        <About />
        <Services />
        <Skills />
        <Resume />
    </div>
  );
}
  
export default App;