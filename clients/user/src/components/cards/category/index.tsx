import { CategoryDoc } from "interfaces";
import styles from "./style.module.scss";

interface props {
  category: CategoryDoc;
  onclick: () => void;
  active?: boolean;
}

const CategoryCard = ({ category, onclick, active }: props) => {
  return (
    <div onClick={onclick} className={`${styles.container} ${active && styles.active}`}>
      <img src={category.image} alt="images" className={styles.image} />
      <p className={styles.text}>{category.name}</p>
    </div>
  );
};

export default CategoryCard;
