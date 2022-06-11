import styles from "./style.module.scss";
import { FiArrowLeft } from "react-icons/fi";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { BarLoader, BeatLoader, SyncLoader } from "react-spinners";
import { useNavigate } from "react-router";
import { useUserMutation } from "hooks/user";
import { useAppSelector } from "hooks/redux";

const OTPScreen = () => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [table, setTable] = useState(0);
  const navigate = useNavigate();
  const { verifyOtp } = useUserMutation();
  const {
    info: { guests, mobile, name, tableNo },
  } = useAppSelector((state) => state);
  const handleSubmit = () => {
    setLoading(true);
    verifyOtp.mutate(
      { guests, mobile, otp, table: tableNo ? tableNo : undefined },
      {
        onSuccess: (res) => {
          if (typeof res === "number") {
            navigate("/queue");
          } else {
            setTable(res.number);
            setTimeout(() => {
              navigate("/list");
            }, 3000);
          }
        },
      }
    );
  };
  return (
    <div className={styles.container}>
      <FiArrowLeft
        className={styles.back}
        onClick={() => {
          !table && navigate(-1);
        }}
      />
      {!table && (
        <>
          <p className={styles.title}>Confirm OTP</p>
          <p className={styles.description}>Enter OTP we just sent to your phone number</p>
          <OtpInput
            value={otp}
            onChange={(e: any) => {
              console.log(e);
              setOtp(e);
            }}
            numInputs={6}
            isInputNum
            separator={<span className={styles.span}>-</span>}
            shouldAutoFocus
            inputStyle={styles.otpInput}
            focusStyle={`${styles.otpInput} ${styles.focus}`}
            containerStyle={styles.otpContainer}
          />
          <div onClick={handleSubmit} className={styles.button}>
            {loading ? <BeatLoader color="white" size={10} loading={loading} speedMultiplier={0.6} /> : "confirm"}
          </div>
        </>
      )}

      {table !== 0 && (
        <div className={styles.table}>
          <h4 className={styles.heading}>Congratulations</h4>
          <p className={styles.description}>
            you have assigned to Table no. <span className={styles.span}>{table}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default OTPScreen;
