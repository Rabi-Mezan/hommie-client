import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home';
import initAuth from './firebase/init';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buy from './pages/Home/Banner/Buy';
import Rent from './pages/Home/Banner/Rent';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Footer from './pages/Shared/Header/Footer/Footer';

initAuth();

function App() {
  return (
    <div>

      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
