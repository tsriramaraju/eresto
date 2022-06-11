import { useAppDispatch } from "hooks/redux";
import { ReactElement, useEffect, useState } from "react";
import { setKeyboard } from "redux/slices/keyboardSlice";
import { setPath } from "redux/slices/pathSlice";
import { isMobile } from "react-device-detect";
import styles from "./style.module.scss";

type props = {
  children?: ReactElement;
};

const Layout = ({ children }: props) => {
  const [isCompatible, setCompatible] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // console.log("layout");

    const height = window.innerHeight;
    dispatch(setPath(window.location.pathname));
    setCompatible(isMobile);
    //     if (window.innerWidth / window.innerHeight > 1) {
    //       setCompatible(true);
    //     } else setCompatible(window.innerWidth > 1000 ? true : false);

    window.addEventListener("resize", () => {
      setCompatible(isMobile);
      // if (window.innerWidth / window.innerHeight > 1) {
      //   setCompatible(true);
      // } else setCompatible(window.innerWidth > 1000 ? true : false);
      detectKeyboard(height, window.innerHeight);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const detectKeyboard = (oldHeight: number, newHeight: number) => {
    if (oldHeight * 0.65 > newHeight) dispatch(setKeyboard(true));
    else dispatch(setKeyboard(false));
  };

  //    const defaultOptions = {
  //      loop: true,
  //      autoplay: true,
  //      animationData: animationData,
  //      rendererSettings: {
  //        preserveAspectRatio: "xMidYMid slice",
  //      },
  //    };
  return isCompatible ? <div className={styles.container}>{children}</div> : <div className={styles.container}>wrong device buddy</div>;
};

export default Layout;
