import { useAppDispatch, useAppSelector } from "hooks/redux";
import { ProductDoc } from "interfaces";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { addItem, removeItem, updateItem } from "redux/slices/cartSlice";
import { priceFormatter } from "utils/priceFormatter";
import styles from "./style.module.scss";

interface props {
  product: ProductDoc;
}

const ProductCard = ({ product }: props) => {
  const {
    cart: { items },
  } = useAppSelector((state) => state);

  const exists = items.find((item) => item.name === product.name);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.container}>
      <img src={product.images[0]} alt="" className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.price}>{priceFormatter(product.price)}</p>
        <div className={styles.pickerBlock}>
          {exists ? (
            <div className={styles.picker}>
              <FiMinusCircle
                onClick={() => {
                  const updatedQty = exists.quantity - 1;
                  updatedQty ? dispatch(updateItem({ ...exists, quantity: exists.quantity - 1 })) : dispatch(removeItem(exists));
                }}
                className={styles.icon}
              />
              <p className={styles.qty}> {exists.quantity}</p>
              <FiPlusCircle
                onClick={() => {
                  dispatch(updateItem({ ...exists, quantity: exists.quantity + 1 }));
                }}
                className={styles.icon}
              />
            </div>
          ) : (
            <p
              className={styles.add}
              onClick={() => {
                dispatch(addItem({ quantity: 1, addons: [], name: product.name, price: product.price, image: product.images[0] }));
              }}
            >
              Add
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
