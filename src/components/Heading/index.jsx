import React from "react";

const sizes = {
  texts: "text-[15px] font-medium",
  textlg: "text-[17px] font-medium lg:text-sm",
  headingxs: "text-base font-semibold lg:text-[13px]",
  headings: "text-[17px] font-bold lg:text-sm",
  headingmd: "text-lg font-semibold lg:text-[15px]",
  headinglg: "text-xl font-bold lg:text-[17px]",
  headingxl: "text-[27px] font-semibold lg:text-[22px] md:text-[25px] sm:text-[23px]",
  heading2xl: "text-[28px] font-semibold lg:text-[23px] md:text-[26px] sm:text-2xl",
  heading3xl: "text-[88px] font-bold lg:text-[88px] md:text-5xl",
};

const Heading = ({ children, className = "", size = "headings", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-home_accredian_com-nero font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
