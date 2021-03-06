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
import About from './pages/About/About';
import Details from './pages/Home/Details/Details';
import Property from './pages/Property/Property';
import Contact from './pages/Contact/Contact';
import Sellproperty from './pages/Dashboard/UserDash/Sellproperty/Sellproperty';
import Privateroute from './pages/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthProvider/AuthProvider';




initAuth();

function App() {
  return (
    <div>
      <AuthProvider>

        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/property" element={<Property />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sellproperty" element={
              <Privateroute>
                <Sellproperty></Sellproperty>
              </Privateroute>
            } />

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
