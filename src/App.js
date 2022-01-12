import logo from './logo.svg';
import './App.css';
import Header from './pages/Shared/Header/Header';
import Home from './pages/Home/Home';
import initAuth from './firebase/init';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Buy from './pages/Home/Banner/Buy';
import Rent from './pages/Home/Banner/Rent';

initAuth();

function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
