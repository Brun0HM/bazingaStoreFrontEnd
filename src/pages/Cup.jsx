import styles from "./Cup.module.css";
import Cardegorias from "../components/cardegoria/Cardegorias";
const Cup = () => {
  return (
    <>
      <div className={styles.list}>
        <div>
          <h1 className="mb-5 text-light">CategoriaNome</h1>
        </div>
        <div className={styles.categorias}>
          <Cardegorias />
          <Cardegorias />
          <Cardegorias />
          <Cardegorias />
          <Cardegorias />
          <Cardegorias />
          <Cardegorias />
          <Cardegorias />
        </div>
      </div>
    </>
  );
};

export default Cup;
