import styles from './Cup.module.css'
import Cardegorias from '../components/cardegoria/Cardegorias'
const Cup = () => {
  return (
   <>
   <div className={styles.list}>
    <div>
      <h1 className='mb-5 m-4'>CategoriaNome</h1>
    </div>
    <div>  
      <Cardegorias />   
    </div>
   </div>
   </>
  )
}

export default Cup