import React from "react";
import styles from "../style";
import Whatyouneed from "./Whatyouneed";

const Hero = () => (
  <section id="home" className={`flex flex-col `}>
    <div className="h-[686px] w-full relative">
      <div
        className={`flex-1 flex-col xl:px-0 px-6 ${styles.flexStart} ${styles.paddingX} inset-0 m-auto absolute `}
      >
        <h1 className={`${styles.heading1} mb-6`}>Buy, Sell, Rent.</h1>
        <p
          className={`${styles.paragraph}  font-semibold text-wrap mb-8 max-w-[470px]`}
        >
          The best deals, for both Realtors and Customers.
        </p>
        <button className="font-bold bg-[#10375C] text-white text-[18px] h-[50px] w-[120px] rounded-md ">
          Explore
        </button>
      </div>
      {/* <div className={`flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={heroimage} alt="homeimage" className=" h-[678px]" /> */}
      <div className="bg-[#10375C] flex flex-1 absolute h-[129px] w-full -bottom-11 items-center rounded-[10px] ">
        <Whatyouneed />
      </div>
    </div>
  </section>
);

export default Hero;
