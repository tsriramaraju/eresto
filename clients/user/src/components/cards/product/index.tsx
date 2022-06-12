import { ProductDoc } from "interfaces";
import { priceFormatter } from "utils/priceFormatter";
import styles from "./style.module.scss";

interface props {
  product: ProductDoc;
}

const ProductCard = ({ product }: props) => {
  return (
    <div className={styles.container}>
      <img src={product.images[0]} alt="" className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>{priceFormatter(product.price)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
