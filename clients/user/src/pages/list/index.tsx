import HomeBanners from "components/banners";
import CategoryCard from "components/cards/category";
import ProductCard from "components/cards/product";
import HomeHeader from "components/header";
import { useCategories, useProducts } from "hooks/data";
import styles from "./style.module.scss";

const ListScreen = () => {
  const { data: categories } = useCategories();
  const { data: products } = useProducts();
  return (
    <div className={styles.container}>
      <HomeHeader />
      <HomeBanners />
      <div className={styles.categories}>
        {categories?.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
      <div className={styles.products}>
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListScreen;
