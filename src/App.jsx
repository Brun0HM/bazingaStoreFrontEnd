import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/navBar/NavBar";
import NaoEncontrado from "./pages/NaoEncontrado";
import Cart from "./pages/Cart";
import Cup from "./pages/Cup";
import Shirt from "./pages/Shirt";
import Figure from "./pages/Figure";
import Picture from "./pages/Picture";
import Config from "./pages/Config";
import Home from "./pages/Home";
import Cardegorias from "./components/cardegoria/Cardegorias";

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Cardegorias />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carts" element={<Cart />} />
            <Route path="/cups" element={<Cup />} />
            <Route path="/shirts" element={<Shirt />} />
            <Route path="/figures" element={<Figure />} />
            <Route path="/pictures" element={<Picture />} />
            <Route path="/Config" element={<Config />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
