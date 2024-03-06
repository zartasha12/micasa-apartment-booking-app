import React from "react";
import { Hero } from "../components";
import styles from "../style";
import { heroimage, pexels } from "../assets";

const Mainpage = () => {
  return (
    <>
      <div
        className={` ${styles.flexCenter} w-full bg-cover bg-center`}
        style={{ backgroundImage: `url(${heroimage})` }}
      >
        <div className={`${styles.boxWidth} `}>
          <Hero />
        </div>
      </div>
      <div className="bg-[#e157221c] h-[315.18px] w-full"></div>
    </>
  );
};

export default Mainpage;
