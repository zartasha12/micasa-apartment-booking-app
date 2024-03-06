const styles = {

  boxWidth: "xl:max-w-[1280px] w-full",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "lg:px-16 px-6",
  paddingY: "lg:py-16 py-6",
  padding: "lg:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",


  logoheading: "font-poppins font-bold text-[31px] leading-[46px] text-center",
  heading1: "font-Helvetica font-bold xs:text-[66px] text-[52px] xs:leading-[78px] leading-[66px] w-full text-[#10375C] ",

  paragraph: "font-Helvetica xs:text-[32px] text-[27px] xs:leading-[38px] leading-[34px] w-full text-black",

  

};
export const layout = {
  
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};
 export default styles;