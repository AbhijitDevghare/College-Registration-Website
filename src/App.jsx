import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'; 
import 'typeface-poppins';
import Home from './Components/Home/Home';


function App() {


      useEffect(() => {
        AOS.init({
          // AOS configurations (optional)
        });
      }, []);
      
    return (
    <>
        <Home/>     
    </>
  )
}

export default App
