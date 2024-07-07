import { Button, Heading, Text, SelectBox, Img } from "./..";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex flex-col self-stretch items-center gap-2`}
    >
      <div className="self-stretch bg-home_accredian_com-nero">
        <div className="flex justify-center bg-home_accredian_com-royal_blue_15_ py-4">
          <div className="container-xs flex justify-center px-14 lg:p-5 md:p-5 md:px-5 sm:px-4">
            <div className="flex w-[55%] items-center justify-center gap-3 lg:w-full md:w-full md:flex-col">
              <Text
                size="textmd"
                as="p"
                className="self-end !font-inter !text-[16.88px] !font-medium !text-home_accredian_com-mine_shaft-0 md:self-auto"
              >
                Navigate your ideal career path with tailored expert advice
              </Text>
              <div className="flex w-[23%] justify-center px-2 md:w-full">
                <div className="flex w-full justify-center">
                  <Heading
                    size="textlg"
                    as="p"
                    className="self-end !font-inter !text-[17.02px] capitalize !text-blue-600"
                  >
                    contact expert
                  </Heading>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xs lg:p-5 md:p-5">
        <div className="flex justify-between gap-5 py-2.5 md:flex-col">
          <div className="flex w-[20%] items-center justify-between gap-5 md:w-full">
            <Img
              src="images/img_header_logo.png"
              alt="Header Logo"
              className="h-[36px] w-[124px] object-contain"
            />
            <SelectBox
              shape="round"
              indicator={
                <Img
                  src="images/img_arrowdown.svg"
                  alt="Arrow Down"
                  className="h-[15px] w-[15px]"
                />
              }
              name="Courses Dropdown"
              placeholder={`Courses`}
              options={dropDownOptions}
              className="w-[50%] font-inter font-medium sm:pr-4 placeholder-white text-white"
            />
            {/* <Button
              shape="round"
              className="min-w-[114px] font-inter font-medium"
            >
              Try for free
            </Button> */}
          </div>
          <div className="flex items-center gap-8 sm:flex-col">
            <ul className="flex flex-wrap items-center gap-8">
              <li>
                <a href="#">
                  <Text
                    size="textxs"
                    as="p"
                    className="!font-inter !text-[14.75px] !font-medium capitalize !text-gray-900"
                  >
                    Refer & Earn
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text
                    size="textxs"
                    as="p"
                    className="!font-inter !text-[14.75px] !font-medium capitalize !text-gray-900"
                  >
                    Resources
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Heading
                    size="texts"
                    as="p"
                    className="!font-inter capitalize !text-gray-900"
                  >
                    About us
                  </Heading>
                </a>
              </li>
            </ul>
            <div className="flex gap-4">
              <Button
                color="blue_gray_300_33"
                shape="round"
                className="min-w-[76px] font-inter font-medium"
              >
                Login
              </Button>
              <Button
                shape="round"
                className="min-w-[114px] font-inter font-medium"
              >
                Try for free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
