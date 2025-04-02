import styles from "./Cardegorias.module.css";
import carrinhoIcon from "../../img/Card.svg"
const Cardegorias = () => {
  return (
    <div className={styles.card2}>
      <div>
        <img className="rounded-top-2" src="https://placehold.co/320x230" alt="" />
      </div>
      <div className="m-2">
      ⭐⭐⭐⭐⭐
        <div>
          <h3 className="fw-bold m-1">Nome</h3>
          <div className="d-flex justify-content-between m-1">
            <p>R$00.00</p>
            <a className="text-decoration-none" href="">🛒</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardegorias;
