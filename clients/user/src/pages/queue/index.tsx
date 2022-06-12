import styles from "./style.module.scss";
import animationData from "assets/clock.json";
import Lottie from "react-lottie";
const QueueScreen = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.lottie}>
        <Lottie options={defaultOptions} height="100%" width="100%" />
      </div>
      <p className={styles.heading}>
        You're currently on waitlist
        <span className={styles.span}> 3</span>
      </p>
      <p className={styles.description}>You will be notified when your turn comes up. You can also check the status of your queue at any time.</p>
    </div>
  );
};

export default QueueScreen;
