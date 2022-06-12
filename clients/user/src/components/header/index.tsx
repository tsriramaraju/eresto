import { FiShoppingCart } from "react-icons/fi";
import styles from "./style.module.scss";

const HomeHeader = () => {
  return (
    <div className={styles.header}>
      <img className={styles.image} src="https://inresto.com/wp-content/themes/inresto/images/logo.svg" alt="" />
      <FiShoppingCart className={styles.cart} />
    </div>
  );
};

export default HomeHeader;
