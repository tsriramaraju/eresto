import { getOrderAPI } from "api/order";
import HomeHeader from "components/header";
import { ItemStatus, OrderDoc } from "interfaces";
import Lottie from "react-lottie";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import animationData from "assets/cooking.json";
import styles from "./style.module.scss";
import { FiChevronsUp, FiPlusSquare } from "react-icons/fi";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const OrderScreen = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<null | OrderDoc>(null);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      setTimeout(fetchOrder, 5000);
    }
  }, []);

  const calculateProgress = (order: OrderDoc) => {
    const totalItems = order.items.length;
    const totalItemsCompleted = order.items.filter((item) => item.status === ItemStatus.delivered).length;
    const progress = (totalItemsCompleted / totalItems) * 100;
    setProgress(progress);
  };

  const fetchOrder = async () => {
    try {
      if (!id) return navigate(-1);
      setLoading(true);
      const res = await getOrderAPI(id);
      calculateProgress(res);
      setOrder(res);
    } catch (error) {
      console.log(error);
    }
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handlePay = () => {};

  return (
    <div className={styles.container}>
      <HomeHeader orderPage />
      <div className={styles.lottieContainer}>
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </div>
      <div className={styles.itemsContainer}>
        <p className={styles.text}>Good food takes time. Please be patient </p>
        <div className={styles.separator} />
        <div className={styles.content}>
          <FiChevronsUp className={styles.icon} />
          <p className={styles.summary}>summary</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.button}>
          <FiPlusSquare className={styles.icon} /> Add More Items
        </div>
        {progress < 100 ? (
          <div className={styles.progress}>
            <CircularProgressbar value={progress} text={`${progress}%`} />
          </div>
        ) : (
          <div className={styles.payButton}>Pay</div>
        )}
      </div>
    </div>
  );
};

export default OrderScreen;
