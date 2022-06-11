import { useAppSelector } from "hooks/redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";

const WelcomeScreen = () => {
  const [toggle, setToggle] = useState(false);
  const {
    info: { guests, mobile, name, tableNo },
  } = useAppSelector((state) => state);

  const navigate = useNavigate();

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
          onClick={(e) => {
            setToggle(true);
          }}
          className={styles.button}
        >
          Find Table
        </div>
      )}
      <div className={`${styles.overlay} ${toggle && styles.active}`}>
        <p className={styles.heading}>Welcome</p>
        <p className={styles.description}>Please enter required fields to book a table</p>
        <form className={styles.form}>
          <div className={styles.textField}>
            <p className={styles.title}>Mobile*</p>
            <input
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              className={styles.input}
              value={input.mobile === 0 ? "" : input.mobile}
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
              placeholder="Enter your name"
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
              placeholder="Enter number of guests"
              className={styles.input}
              value={input.guests === 0 ? "" : input.guests}
              onChange={(e) => {
                setInput({ ...input, guests: +e.target.value });
              }}
            />
          </div>
        </form>
        <div
          onClick={() => {
            navigate("/otp");
          }}
          className={styles.button}
        >
          Check Availability
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
