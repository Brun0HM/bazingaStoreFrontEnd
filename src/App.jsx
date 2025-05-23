import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/navBar/NavBar";
import NaoEncontrado from "./pages/NaoEncontrado";
import Cart from "./pages/Cart";
import Cup from "./pages/Cup.jsx";
import Shirt from "./pages/Shirt";
import Figure from "./pages/Figure";
import Picture from "./pages/Picture";
import Config from "./pages/Config";
import Home from "./pages/Home";
import logoM from "./assets/logo.svg";
import Cardegorias from "./components/cardegoria/Cardegorias";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar
          logo={logoM}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cup" element={<Cup />} />
            <Route path="/shirt" element={<Shirt />} />
            <Route path="/figure" element={<Figure />} />
            <Route path="/picture" element={<Picture />} />
            <Route path="/Config" element={<Config />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
