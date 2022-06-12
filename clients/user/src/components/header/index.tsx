import { useAppSelector } from "hooks/redux";
import { FiShoppingCart } from "react-icons/fi";
import styles from "./style.module.scss";

const HomeHeader = () => {
  const { cart } = useAppSelector((state) => state);
  return (
    <div className={styles.header}>
      <img className={styles.image} src="https://inresto.com/wp-content/themes/inresto/images/logo.svg" alt="" />
      <FiShoppingCart className={`${styles.cart} ${cart.items.length && styles.active}`} />
    </div>
  );
};

export default HomeHeader;
