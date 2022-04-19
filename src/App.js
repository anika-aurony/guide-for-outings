
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Home from './component/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Shared/Header/Header';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home/>}/>
        <Route path="about" element={ <About/>} />


      </Routes>
      
      
     
      
    </div>
  );
}

export default App;
