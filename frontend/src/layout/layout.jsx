import React from "react";
import styles from "../style";
import { Header, Hero, Footer } from "../components";

const layout = ({ children }) => {
  return (
    <div className="w-full overflow-hidden min-h-screen flex flex-col">
      <div className={`bg-[#10375C] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Header />
        </div>
      </div>
      <div className={` flex-1  ${styles.paddingX} ${styles.paddingY}`}>
        {children}
      </div>
      <div className={`bg-[#10375C] ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default layout;
