import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className="bg-white vh-100  position-fixed">
      <img className="" src={props.logo} alt="Logo bazinga store" />
      <div className="d-flex flex-column justify-content-center align-items-center"></div>
      <BrowserRouter>
        <main>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cup" element={<Cup />} />
            <Route path="/shirt" element={<Shirt />} />
            <Route path="/figure" element={<Figure />} />
            <Route path="/picture" element={<Picture />} />
            <Route path="/Config" element={<Config />} />


            <Route path="*" element={<NaoEncontrado />} />
          </Routes> */}
        </main>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
