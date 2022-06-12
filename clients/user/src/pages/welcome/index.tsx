import { useAppSelector } from "hooks/redux";
import { useUserMutation } from "hooks/user";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { setInfo } from "redux/slices/infoSlice";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./style.module.scss";
import { BeatLoader } from "react-spinners";

const WelcomeScreen = () => {
  const [toggle, setToggle] = useState(false);
  const { table } = useParams();
  const {
    info: { guests, mobile, name, tableNo },
  } = useAppSelector((state) => state);

  const { addToast } = useToasts();
  const { sendOtp } = useUserMutation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    mobile,
    name,
    guests,
  });

  const getCaptchaToken = async () => {
    try {
      // let token = recaptchaRef.current?.getValue();
      // if (!token) {
      //   token = await recaptchaRef.current?.executeAsync();

      //   console.log("token");
      // }
      // console.log(token);
      return "token";
    } catch (error) {
      console.log(error);
    }
  };

  const checkAvailability = async () => {
    try {
      setLoading(true);
      let error = "";
      if (input.mobile.toString().length !== 10) {
        error = "Mobile number must be 10 digits";
      }

      if (input.name.length === 0) {
        error = "Name is required";
      }

      if (input.guests <= 0) {
        error = "Guests must be greater than 0";
      }

      if (error.length > 0) {
        addToast(error, {
          appearance: "error",
          autoDismiss: true,
          autoDismissTimeout: 3000,
        });
        setLoading(false);
        return;
      }

      const token = await getCaptchaToken();
      if (!token) {
        addToast("Captcha error, please refresh the page", {
          appearance: "error",
          autoDismiss: true,
        });
        setLoading(false);
        return;
      }
      dispatch(setInfo({ ...input, tableNo: table ? +table : 0 }));
      sendOtp.mutate(
        { mobile, name, recaptchaToken: token },
        {
          onSuccess: () => {
            navigate("/otp");
          },
        }
      );
    } catch (error) {
      setLoading(false);
    }
  };

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
        {/* <ReCAPTCHA className={styles.captcha} ref={recaptchaRef} size="invisible" sitekey="6Le1GGIgAAAAAKm1P3p6lgK3IipJraZiQB0vKRAD"> */}
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
        {/* </ReCAPTCHA> */}
        <div onClick={checkAvailability} className={styles.button}>
          {loading ? <BeatLoader color="white" size={10} loading={loading} speedMultiplier={0.6} /> : "Check Availability"}
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
