import styles from "./Cardegorias.module.css";
import { FaCartPlus } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
const Cardegorias = () => {
  return (
    <div className={styles.card2}>
      <div>
        <img
          className="rounded-top-4"
          src="https://placehold.co/265x190"
          alt=""
        />
      </div>
      <div className="m-2">
        <div className="m-1 mt-2">
          <FaStar size={18} /> <FaStar size={18} /> <FaStar size={18} />{" "}
          <FaStar size={18} /> <FaStar size={18} />
        </div>
        <div className="d-flex justify-content-between align-items-center m-1">
          <div>
            <h3 className="fw-bold m-0">Nome</h3>
            <p className="m-0">R$00.00</p>
          </div>
          <a className="text-decoration-none" href="">
            <FaCartPlus size={30} color="black" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cardegorias;
