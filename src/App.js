
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Home from './component/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Shared/Header/Header';
import Blog from './component/Blog/Blog';
import NotFound from './component/Shared/NotFound/NotFound';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Checkout from './component/Checkout/Checkout';
import RequiredAuth from './component/RequiredAuth/RequiredAuth';
import Footer from './component/Shared/Footer/Footer';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog></Blog>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/checkout" element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>} />



      </Routes>
      <Footer></Footer>




    </div>
  );
}

export default App;
