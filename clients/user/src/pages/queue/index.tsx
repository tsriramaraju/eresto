import styles from "./style.module.scss";

const QueueScreen = () => {
  return (
    <div className={styles.container}>
      <div>lottie</div>
      <p>You're currently on waitlist </p>
      <p>You will be notified when your turn comes up. You can also check the status of your queue at any time.</p>
    </div>
  );
};

export default QueueScreen;
