import { Text, Img, Heading, Button } from "./..";
import React from "react";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-start py-8 sm:py-4 bg-home_accredian_com-mine_shaft-1 flex-1`}
    >
      <div className="container-xs mb-10 flex justify-center px-14 lg:p-5 md:p-5 md:px-5 sm:px-4">
        <div className="flex w-[92%] flex-col items-center lg:w-full md:w-full">
          <div className="flex items-start justify-between gap-5 self-stretch sm:flex-col">
            <Img
              src="images/img_accredainnew_webp.png"
              alt="Footer Logo"
              className="h-[38px] w-[12%] object-cover sm:w-full"
            />
            <div className="mr-[66px] flex w-[22%] flex-col items-center self-center sm:mr-0 sm:w-full">
              <Button
                color="light_blue_A700"
                shape="round"
                className="w-full !rounded-lg border border-solid border-home_accredian_com-nero font-medium tracking-[0.40px] sm:px-4"
              >
                Schedule 1-on-1 Call Now
              </Button>
              <div className="mx-6 flex lg:mx-0 md:mx-0">
                <Text
                  size="textxs"
                  as="p"
                  className="!text-home_accredian_com-nero"
                >
                  Speak with our Learning Advisor
                </Text>
              </div>
            </div>
          </div>
          <div className="mt-[30px] h-px w-full self-stretch bg-gray-300" />
          <div className="flex w-[92%] items-start self-start lg:w-full md:w-full md:flex-col">
            <div className="w-[40%] self-center md:w-full">
              <div className="mt-8 flex flex-col items-start justify-center">
                <div className="ml-4 flex lg:ml-0 md:ml-0">
                  <Text
                    as="p"
                    className="self-end tracking-[0.19px] !text-home_accredian_com-nero"
                  >
                    Programs
                  </Text>
                </div>
                <div className="flex w-[88%] items-center justify-between gap-5 px-4 py-3 lg:w-full md:w-full">
                  <ul className="flex flex-wrap gap-2.5">
                    <li>
                      <a href="Data" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="tracking-[0.16px]">
                          Data
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="Science" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="tracking-[0.16px]">
                          Science
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="&" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="tracking-[0.16px]">
                          &
                        </Heading>
                      </a>
                    </li>
                    <li>
                      <a href="AI" target="_blank" rel="noreferrer">
                        <Heading as="h6" className="tracking-[0.16px]">
                          AI
                        </Heading>
                      </a>
                    </li>
                  </ul>
                  <Img
                    src="images/img_plus.svg"
                    alt="Add Icon Data"
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="flex items-center px-4">
                  <div className="flex py-3.5">
                    <ul className="flex flex-wrap gap-2.5">
                      <li>
                        <a href="Product" target="_blank" rel="noreferrer">
                          <Heading as="h6" className="tracking-[0.16px]">
                            Product
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="Management" target="_blank" rel="noreferrer">
                          <Heading as="h6" className="tracking-[0.16px]">
                            Management
                          </Heading>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Img
                    src="images/img_plus.svg"
                    alt="Add Icon Product"
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="flex items-center px-4">
                  <div className="flex py-3.5">
                    <ul className="flex flex-wrap gap-2.5">
                      <li>
                        <a href="Business" target="_blank" rel="noreferrer">
                          <Heading as="h6" className="tracking-[0.16px]">
                            Business
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="Analytics" target="_blank" rel="noreferrer">
                          <Heading as="h6" className="tracking-[0.16px]">
                            Analytics
                          </Heading>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Img
                    src="images/img_plus.svg"
                    alt="Add Icon Business"
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="flex items-center px-4">
                  <div className="flex py-3.5">
                    <ul className="flex flex-wrap gap-2.5">
                      <li>
                        <a href="Digital" target="_blank" rel="noreferrer">
                          <Heading as="h6" className="tracking-[0.16px]">
                            Digital
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a
                          href="Transformation"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Heading as="h6" className="tracking-[0.16px]">
                            Transformation
                          </Heading>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Img
                    src="images/img_plus.svg"
                    alt="Add Icon Digital"
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="flex items-center px-4">
                  <div className="flex py-3.5">
                    <ul className="flex flex-wrap gap-2.5">
                      <li>
                        <a href="Business" target="_blank" rel="noreferrer">
                          <Heading as="h6" className="tracking-[0.16px]">
                            Business
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="Management" target="_blank" rel="noreferrer">
                          <Heading as="h6" className="tracking-[0.16px]">
                            Management
                          </Heading>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Img
                    src="images/img_plus.svg"
                    alt="Add Icon Business"
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="flex items-center px-4">
                  <div className="flex py-3.5">
                    <ul className="flex flex-wrap gap-2.5">
                      <li>
                        <a href="Project" target="_blank" rel="noreferrer">
                          <Heading as="h6" className="tracking-[0.16px]">
                            Project
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="Management" target="_blank" rel="noreferrer">
                          <Heading as="h6" className="tracking-[0.16px]">
                            Management
                          </Heading>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Img
                    src="images/img_plus.svg"
                    alt="Add Icon Project"
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="flex items-center px-4">
                  <div className="flex py-2.5">
                    <div className="flex">
                      <ul className="flex flex-wrap gap-2.5">
                        <li>
                          <a
                            href="Strategy"
                            target="_blank"
                            rel="noreferrer"
                            className="self-end"
                          >
                            <Heading as="h6" className="tracking-[0.16px]">
                              Strategy
                            </Heading>
                          </a>
                        </li>
                        <li>
                          <a
                            href="&"
                            target="_blank"
                            rel="noreferrer"
                            className="self-end"
                          >
                            <Heading as="h6" className="tracking-[0.16px]">
                              &
                            </Heading>
                          </a>
                        </li>
                        <li>
                          <a
                            href="Leadership"
                            target="_blank"
                            rel="noreferrer"
                            className="self-end"
                          >
                            <Heading as="h6" className="tracking-[0.16px]">
                              Leadership
                            </Heading>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Img
                    src="images/img_plus.svg"
                    alt="Add Icon Strategy"
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="flex items-center px-4">
                  <div className="flex py-3.5">
                    <ul className="flex flex-wrap gap-2.5">
                      <li>
                        <a href="Senior" target="_blank" rel="noreferrer">
                          <Heading as="h6" className="tracking-[0.16px]">
                            Senior
                          </Heading>
                        </a>
                      </li>
                      <li>
                        <a href="Management" target="_blank" rel="noreferrer">
                          <Heading as="h6" className="tracking-[0.16px]">
                            Management
                          </Heading>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <Img
                    src="images/img_plus.svg"
                    alt="Add Icon Senior"
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="flex items-center px-4">
                  <div className="flex py-2.5">
                    <div className="flex">
                      <div className="flex">
                        <Heading as="h6" className="tracking-[0.16px]">
                          Fintech
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_plus.svg"
                    alt="Add Icon Fintech"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-1 flex-col gap-1 md:self-stretch">
              <div className="flex items-center justify-between gap-5 md:flex-col">
                <div className="relative h-[230px] flex-1 lg:h-auto md:h-auto md:w-full md:flex-none md:self-stretch">
                  <div className="flex flex-col items-start gap-1.5">
                    <Text
                      as="p"
                      className="tracking-[0.19px] !text-home_accredian_com-nero"
                    >
                      Contact Us
                    </Text>
                    <ul className="flex flex-col items-start">
                      <li>
                        <a
                          href="mailto:admissions@accredian.com"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Text
                            size="textxs"
                            as="p"
                            className="tracking-[0.13px] !text-home_accredian_com-nero"
                          >
                            Email us (For Data Science Queries):
                            admissions@accredian.com
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:pm@accredian.com"
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1.5"
                        >
                          <Text
                            size="textxs"
                            as="p"
                            className="tracking-[0.13px] !text-home_accredian_com-nero"
                          >
                            Email us (For Product Management
                            Queries):pm@accredian.com
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mt-[78px]">
                          <Text
                            size="textxs"
                            as="p"
                            className="tracking-[0.13px] !text-home_accredian_com-nero"
                          >
                            Office Address: 4th Floor, 250, Phase IV, Udyog
                            Vihar, Sector 18, Gurugram,
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="mt-2">
                          <Text
                            size="textxs"
                            as="p"
                            className="tracking-[0.13px] !text-home_accredian_com-nero"
                          >
                            Haryana 122015
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://home.accredian.com/whyaccredian"
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1.5"
                        >
                          <Text
                            size="textxl"
                            as="p"
                            className="tracking-[0.17px] !text-home_accredian_com-nero"
                          >
                            Why Accredian
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max flex-col items-start gap-1.5">
                    <Text
                      size="textxs"
                      as="p"
                      className="tracking-[0.13px] !text-home_accredian_com-nero"
                    >
                      Data Science Admission Helpline:+91 9079653292 (9 AM - 7
                      PM)
                    </Text>
                    <Text
                      size="textxs"
                      as="p"
                      className="tracking-[0.13px] !text-home_accredian_com-nero"
                    >
                      Product Management Admission Helpline:+91 9625811095
                    </Text>
                    <Text
                      size="textxs"
                      as="p"
                      className="tracking-[0.13px] !text-home_accredian_com-nero"
                    >
                      Enrolled Student Helpline: +91 7969322507
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <Text
                    as="p"
                    className="tracking-[0.19px] !text-home_accredian_com-nero"
                  >
                    Accredian
                  </Text>
                  <ul className="flex flex-col items-start">
                    <li>
                      <a
                        href="https://home.accredian.com/About"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text
                          size="textxs"
                          as="p"
                          className="tracking-[0.13px] !text-home_accredian_com-nero"
                        >
                          About
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://home.accredian.com/Career"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text
                          size="textxs"
                          as="p"
                          className="tracking-[0.13px] !text-home_accredian_com-nero"
                        >
                          Career
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://blog.accredian.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text
                          size="textxs"
                          as="p"
                          className="tracking-[0.13px] !text-home_accredian_com-nero"
                        >
                          Blog
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://home.accredian.com/policies/accredian-policy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text
                          size="textxs"
                          as="p"
                          className="tracking-[0.13px] !text-home_accredian_com-nero"
                        >
                          Admission Policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://home.accredian.com/terms/referral"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text
                          size="textxs"
                          as="p"
                          className="tracking-[0.13px] !text-home_accredian_com-nero"
                        >
                          Referral Policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://home.accredian.com/terms/privacy"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text
                          size="textxs"
                          as="p"
                          className="tracking-[0.13px] !text-home_accredian_com-nero"
                        >
                          Privacy Policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://home.accredian.com/terms"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text
                          size="textxs"
                          as="p"
                          className="tracking-[0.13px] !text-home_accredian_com-nero"
                        >
                          Terms Of Service
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://home.accredian.com/Faq"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Text
                          size="textxs"
                          as="p"
                          className="tracking-[0.13px] !text-home_accredian_com-nero"
                        >
                          Master FAQs
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex">
                <Text
                  as="p"
                  className="!font-light tracking-[0.19px] !text-home_accredian_com-nero"
                >
                  Follow Us
                </Text>
              </div>
              <div className="flex">
                <Img
                  src="images/img_facebook.svg"
                  alt="Facebook Icon"
                  className="h-[26px] w-[26px]"
                />
                <Img
                  src="images/img_thumbs_up.svg"
                  alt="Thumbs Up Icon"
                  className="h-[26px]"
                />
                <Img
                  src="images/img_trash.svg"
                  alt="Trash Icon"
                  className="h-[26px]"
                />
                <Img
                  src="images/img_user_home.accredian.com_nero.svg"
                  alt="User Icon"
                  className="h-[26px]"
                />
                <Img
                  src="images/img_link.svg"
                  alt="Link Icon"
                  className="h-[26px]"
                />
              </div>
            </div>
          </div>
          <Text
            size="textxs"
            as="p"
            className="mt-10 tracking-[0.13px] !text-home_accredian_com-nero"
          >
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </Text>
        </div>
      </div>
    </footer>
  );
}
