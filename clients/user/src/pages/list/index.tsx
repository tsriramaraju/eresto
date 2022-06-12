import { createOrderAPI } from "api/order";
import HomeBanners from "components/banners";
import CategoryCard from "components/cards/category";
import ProductCard from "components/cards/product";
import HomeHeader from "components/header";
import { useCategories, useProducts } from "hooks/data";
import { useAppSelector } from "hooks/redux";
import { ItemStatus, OrderStatus } from "interfaces";
import { useState } from "react";
import { useNavigate } from "react-router";
import { priceFormatter } from "utils/priceFormatter";
import styles from "./style.module.scss";

const ListScreen = () => {
  const { data: categories } = useCategories();
  const { data: products } = useProducts();
  const navigate = useNavigate();
  const {
    cart: { items, finalPrice },
    info: { tableNo, mobile },
  } = useAppSelector((state) => state);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  //  FIXME : remove equals
  const filteredProducts = products?.filter((prod) => prod.category !== selectedCategory);

  const handleClick = async () => {
    try {
      const res = await createOrderAPI({
        customerId: mobile.toString(),
        finalPrice,
        items: items.map((item) => ({
          ...item,
          status: ItemStatus.pending,
        })),
        status: OrderStatus.pending,
        tableId: tableNo.toString(),
      });

      navigate("/order/" + res._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <HomeHeader />
      <HomeBanners />
      <div className={styles.categories}>
        {categories?.map((category) => (
          <CategoryCard
            active={selectedCategory === category._id}
            onclick={() => {
              if (selectedCategory === category._id) {
                setSelectedCategory(null);
              } else {
                setSelectedCategory(category._id);
              }
            }}
            key={category._id}
            category={category}
          />
        ))}
      </div>
      <div className={styles.products}>
        {filteredProducts?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className={`${styles.checkout} ${finalPrice && styles.active}`}>
        <div className={styles.row}>
          <p className={styles.text}>Price</p>
          <p className={styles.price}>{priceFormatter(finalPrice)}</p>
        </div>
        <div onClick={handleClick} className={styles.button}>
          Order Now
        </div>
      </div>
    </div>
  );
};

export default ListScreen;
