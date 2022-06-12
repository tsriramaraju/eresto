import { CategoryDoc } from "interfaces";
import styles from "./style.module.scss";

interface props {
  category: CategoryDoc;
}

const CategoryCard = ({ category }: props) => {
  return (
    <div className={styles.container}>
      <img src={category.image} alt="images" className={styles.image} />
      <p className={styles.text}>{category.name}</p>
    </div>
  );
};

export default CategoryCard;
