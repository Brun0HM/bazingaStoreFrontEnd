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
            <Route path="/cart" element={<Sobre />} />
            <Route path="/cup" element={<Contato />} />
            <Route path="/shirt" element={<Contato />} />
            <Route path="/figure" element={<Contato />} />
            <Route path="/picture" element={<Contato />} />

            <Route path="*" element={<NaoEncontrado />} />
          </Routes> */}
        </main>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
