import React from "react";
import styles from "../style";
import { footerLinks, socialMedia } from "../constant";

const Footer = () => (
  <section className={`${styles.paddingY} flex justify-center flex-col `}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex flex-1 justify-between flex-col mr-10">
        <h1
          className={`font-poppins font-bold text-[31px] leading-[46px] text text-transparent mb-6`}
        >
          <span className="text-white">Mi</span>
          <span className="text-[#ff5722]">Casa</span>
        </h1>
        <p className="[font-family: 'Montserrat'] cursor-pointer text-[16px] text-[#D9DBE1] mb-4">
          Copyrights MiCasa Homes and Properties
        </p>
        <p className="[font-family: 'Montserrat'] cursor-pointer text-[16px] text-[#D9DBE1]">
          All rights reserved.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins text-[18px] leading-[27px] text-white font-bold">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-[#D9DBE1] cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
