import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-md",
};
const variants = {
  fill: {
    blue_gray_300_33: "bg-blue_gray-300_33 text-gray-900",
    "home.accredian.com_nero": "bg-home_accredian_com-nero text-blue-a200",
    light_blue_A700: "bg-light_blue-a700 text-home_accredian_com-nero",
    blue_600: "bg-blue-600 text-home_accredian_com-nero",
  },
  outline: {
    gray_600: "border-gray-600 border-2 border-solid text-gray-600",
  },
};
const sizes = {
  xl: "h-[72px] px-2",
  sm: "h-[54px] px-[34px] text-xl",
  md: "h-[64px] px-[34px] text-xl",
  lg: "h-[68px] px-[34px] text-base",
  xs: "h-[40px] px-[18px] text-[15px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "blue_600",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${
        (shape && shapes[shape]) || ""
      } ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]?.[color]) || ""
      }`}
      style={{ cursor: 'pointer' }}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xl", "sm", "md", "lg", "xs"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "blue_gray_300_33",
    "home.accredian.com_nero",
    "light_blue_A700",
    "blue_600",
    "gray_600",
  ]),
};

export { Button };
