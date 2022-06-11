import { useAppSelector } from "hooks/redux";
import { useState } from "react";
import styles from "./style.module.scss";

const WelcomeScreen = () => {
  const [toggle, setToggle] = useState(false);
  const {
    info: { guests, mobile, name, tableNo },
  } = useAppSelector((state) => state);

  const [input, setInput] = useState({
    mobile,
    name,
    guests,
  });

  return (
    <div className={`${styles.container} ${toggle && styles.active}`}>
      <img className={styles.image} src="https://inresto.com/wp-content/themes/inresto/images/logo.svg" alt="" />
      {!toggle && (
        <div
          onClick={() => {
            setToggle(true);
          }}
          className={styles.button}
        >
          Find Table
        </div>
      )}
      <div className={`${styles.overlay} ${toggle && styles.active}`}>
        <p className={styles.heading}>Welcome</p>
        <p className={styles.description}>please enter required fields to book a table</p>
        <div className={styles.textField}>
          <p className={styles.title}>Mobile*</p>
          <input
            type="tel"
            name="mobile"
            className={styles.input}
            value={input.mobile}
            onChange={(e) => {
              setInput({ ...input, mobile: +e.target.value });
            }}
          />
        </div>
        <div className={styles.textField}>
          <p className={styles.title}>Name*</p>
          <input
            type="text"
            className={styles.input}
            value={input.name}
            onChange={(e) => {
              setInput({ ...input, name: e.target.value });
            }}
          />
        </div>
        <div className={styles.textField}>
          <p className={styles.title}>Guests*</p>
          <input
            type="number"
            className={styles.input}
            value={input.guests}
            onChange={(e) => {
              setInput({ ...input, guests: +e.target.value });
            }}
          />
        </div>
        <div className={styles.button}>Check Availability</div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
