import React from "react";

const sizes = {
  textxs: "text-sm font-normal not-italic",
  textmd: "text-base font-normal lg:text-[13px]",
  textxl: "text-lg font-normal not-italic lg:text-[15px]",
  text2xl: "text-xl font-normal not-italic lg:text-[17px]",
  text3xl: "text-[25px] font-normal lg:text-[21px] md:text-[23px] sm:text-[21px]",
  text4xl: "text-[40px] font-normal not-italic lg:text-[34px] md:text-[38px] sm:text-4xl",
};

const Text = ({ children, className = "", as, size = "text2xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-800 font-sourcesanspro ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
