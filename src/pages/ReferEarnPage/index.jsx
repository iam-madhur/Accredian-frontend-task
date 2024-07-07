import { Helmet } from "react-helmet";
import {
  Img,
  Button,
  Text,
  Heading,
  SelectBox,
  Switch,
} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import UserProfile from "../../components/UserProfile";
import Modal from "../../components/Modal/index";
import { createColumnHelper } from "@tanstack/react-table";
import React, { Suspense, useState } from "react";
import {
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  Accordion,
  AccordionItem,
} from "react-accessible-accordion";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const referralStepsList = [
  {
    userImage: "images/img_user.svg",
    submitText: "Submit referrals easily via our website’s referral section.",
  },
  {
    userImage: "images/img_upload.svg",
    submitText: "Earn rewards once your referral joins an Accredian program.",
  },
  {
    userImage: "images/img_television.svg",
    submitText:
      "Both parties receive a bonus 30 days after program enrollment.",
  },
];
const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const tableData = [
  {
    programsCell: "Professional Certificate Program in Product Management",
    referrerRow: "₹ 7,000",
    refereeRow: "₹ 9,000",
  },
  {
    programsCell: "PG Certificate Program in Strategic Product Management",
    referrerRow: "₹ 9,000",
    refereeRow: "₹ 11,000",
  },
  {
    programsCell: "Executive Program in Data Driven Product Management",
    referrerRow: "₹ 10,000",
    refereeRow: "₹ 10,000",
  },
  {
    programsCell:
      "Executive Program in Product Management and Digital Transformation",
    referrerRow: "₹ 10,000",
    refereeRow: "₹ 10,000",
  },
  {
    programsCell: "Executive Program in Product Management",
    referrerRow: "₹ 10,000",
    refereeRow: "₹ 10,000",
  },
  {
    programsCell: "Advanced Certification in Product Management",
    referrerRow: "₹ 10,000",
    refereeRow: "₹ 10,000",
  },
  {
    programsCell:
      "Executive Program in Product Management and Project Management",
    referrerRow: "₹ 10,000",
    refereeRow: "₹ 10,000",
  },
];

export default function ReferEarnPagePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [referrerEmail, setReferrerEmail] = useState(""); // State to capture email input

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (email) => {
    // Handle the submitted email
    console.log("Submitted email:", email);
    // Additional logic to handle submission, e.g., API calls, validation, etc.
    handleCloseModal(); // Close the modal after submission
  };

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("programsCell", {
        cell: (info) => (
          <div className="flex items-start gap-[13px] self-center sm:flex-col">
            <Img
              src="images/img_group.png"
              alt="Professional Image"
              className="h-[18px] object-cover sm:w-full"
            />
            <Text
              as="p"
              className="flex-1 self-center leading-6 sm:self-stretch"
            >
              {info?.getValue?.()}
            </Text>
          </div>
        ),
        header: (info) => (
          <div className="flex flex-1 py-3.5">
            <Heading
              size="headinglg"
              as="h5"
              className="!font-sourcesanspro !text-blue-900"
            >
              Programs
            </Heading>
          </div>
        ),
        meta: { width: "504px" },
      }),
      tableColumnHelper.accessor("referrerRow", {
        cell: (info) => (
          <div className="mb-1.5 flex">
            <Text as="p">{info?.getValue?.()}</Text>
          </div>
        ),
        header: (info) => (
          <div className="flex p-2.5">
            <Heading
              size="headinglg"
              as="h5"
              className="mb-1 !font-sourcesanspro !text-blue-900"
            >
              Referrer Bonus
            </Heading>
          </div>
        ),
        meta: { width: "192px" },
      }),
      tableColumnHelper.accessor("refereeRow", {
        cell: (info) => (
          <div className="mb-1.5 ml-3.5 flex md:ml-0">
            <Text as="p">{info?.getValue?.()}</Text>
          </div>
        ),
        header: (info) => (
          <div className="ml-3.5 flex p-3">
            <Heading
              size="headinglg"
              as="h5"
              className="!font-sourcesanspro !text-blue-900"
            >
              Referee Bonus
            </Heading>
          </div>
        ),
        meta: { width: "156px" },
      }),
    ];
  }, []);

  return (
    <>
      <Helmet>
        <title>Refer & Earn Program - Win Rewards | Accredian</title>
        <meta
          name="description"
          content="Join the Accredian Refer & Earn program and win up to Rs. 15,000. Refer friends to our expert-led courses in Product Management, Data Science, and more. Start earning rewards today!"
        />
      </Helmet>

      {/* main content section */}
      <div className="w-full bg-home_accredian_com-nero">
        {/* refer earn section */}
        <div className="flex flex-col items-center">
          {/* header section */}
          <Header />

          {/* tab navigation section */}
          <div className="mt-12 flex justify-center self-stretch">
            <div className="container-xs flex justify-center lg:p-5 md:p-5">
              <Tabs
                className="flex w-full flex-col items-center gap-[26px]"
                selectedTabClassName="!text-blue-600"
                selectedTabPanelClassName="m-auto relative tab-panel--selected"
              >
                <TabList className="mx-[280px] flex flex-wrap items-center gap-28 rounded-[30px] bg-blue-600_1c px-[70px] py-3 lg:mx-0 lg:gap-5 lg:px-8 md:mx-0 md:gap-5 md:px-5 sm:px-4">
                  <Tab className="ml-3.5 text-[25px] font-normal text-gray-800 lg:text-[21px]">
                    Refer
                  </Tab>
                  <Tab className="self-start text-[25px] font-normal text-gray-800 lg:text-[21px]">
                    Benefits
                  </Tab>
                  <Tab className="text-[25px] font-normal text-gray-800 lg:text-[21px]">
                    FAQs
                  </Tab>
                  <Tab className="text-[25px] font-normal text-gray-800 lg:text-[21px]">
                    Support
                  </Tab>
                </TabList>
                <div className="relative h-[724px] self-stretch">
                  {[...Array(4)].map((_, index) => (
                    <TabPanel
                      key={`tab-panel${index}`}
                      className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[692px] flex-1 justify-center"
                    >
                      <div className="absolute bottom-0 left-0 right-0 top-0 h-[692px] w-full flex-1">
                        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[692px] flex-1 lg:h-auto md:h-auto">
                          <div className="flex-1 rounded-[28px] bg-blue-50 shadow-md">
                            <div className="mb-[82px] flex items-start md:flex-col">
                              <div className="flex w-[46%] flex-col items-start self-center md:w-full">
                                <Img
                                  src="images/img_anniversary_8.png"
                                  alt="Anniversary Image"
                                  className="h-[86px] w-[24%] object-cover"
                                />
                                <Heading
                                  size="heading3xl"
                                  as="h1"
                                  className="ml-11 mt-10 self-stretch leading-[88px] !text-gray-900 lg:ml-0 lg:text-5xl md:ml-0"
                                >
                                  Let’s Learn & Earn
                                </Heading>
                                <Text
                                  size="text4xl"
                                  as="p"
                                  className="ml-11 mt-9 leading-[65px] !text-gray-900 lg:ml-0 md:ml-0 md:text-[34px] sm:text-[32px]"
                                >
                                  <span className="text-gray-900">
                                    <>
                                      Get a chance to win <br />
                                      up-to&nbsp;
                                    </>
                                  </span>
                                  <span className="text-[54px] font-bold text-blue-600">
                                    Rs. 15,000
                                  </span>
                                </Text>
                              </div>
                              <div className="flex flex-1 flex-col items-end gap-[110px] px-3 lg:gap-[110px] md:gap-[82px] md:self-stretch sm:gap-[55px]">
                                <div className="mr-3 flex w-[90%] items-start justify-between gap-5 lg:mr-0 lg:w-full md:mr-0 md:w-full">
                                  <Img
                                    src="images/img_anniversary_8_156x156.png"
                                    alt="Small Anniversary Image"
                                    className="h-[156px] w-[156px] self-center object-cover"
                                  />
                                  <Img
                                    src="images/img_anniversary_8_86x156.png"
                                    alt="Tall Anniversary Image"
                                    className="h-[86px] w-[24%] object-cover"
                                  />
                                </div>
                                <Img
                                  src="images/img_anniversary_8_1.png"
                                  alt="Wide Anniversary Image"
                                  className="h-[156px] w-[156px] object-cover"
                                />
                              </div>
                            </div>
                          </div>
                          <Img
                            src="images/img_anniversary_8_156x156.png"
                            alt="Large Anniversary Image"
                            className="absolute bottom-[7%] left-0 right-0 m-auto h-[156px] w-[156px] object-cover"
                          />
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                  <Img
                    src="images/img_anniversary_7.png"
                    alt="Previous Anniversary Image"
                    className="absolute bottom-0 right-[3%] top-0 my-auto h-[724px] w-[60%] object-cover"
                  />
                </div>
              </Tabs>
            </div>
          </div>

          {/* how to refer section */}
          <div className="mt-[42px] flex h-[784px] items-center justify-center self-stretch bg-[url(/public/images/img_group_71.png)] bg-cover bg-no-repeat p-7 lg:h-auto md:h-auto sm:p-4">
            <div className="mt-1.5 flex w-[74%] flex-col items-center gap-16 lg:w-full md:w-full sm:gap-8">
              <div className="container-xs flex flex-col items-center px-14 lg:p-5 md:p-5 md:px-5 sm:px-4">
                <Heading
                  size="headingxl"
                  as="h2"
                  className="!text-[27.66px] !text-gray-900 md:!text-[21px]"
                >
                  <span className="text-gray-900">How Do I&nbsp;</span>
                  <span className="text-blue-600">Refer?</span>
                </Heading>
              </div>
              <div className="flex h-[400px] items-start self-stretch bg-[url(/public/images/img_group_11.png)] bg-cover bg-no-repeat py-36 lg:h-auto lg:py-8 md:h-auto md:py-5 sm:py-4">
                <div className="container-xs mb-4 flex justify-center px-14 lg:p-5 md:p-5 md:px-5 sm:px-4">
                  <div className="mr-[18px] flex w-[80%] gap-[206px] lg:mr-0 md:mr-0 md:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {referralStepsList.map((d, index) => (
                        <UserProfile
                          {...d}
                          key={"referEarnList" + index}
                          className="mb-1.5 lg:gap-[26px] md:mb-0 md:w-full md:gap-[26px] translate-x-[25px] translate-y-[-35px]"
                        />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>
              <div className="container-xs flex flex-col items-center px-14 lg:p-5 md:p-5 md:px-5 sm:px-4">
                <Button
                  onClick={handleOpenModal}
                  size="md"
                  shape="round"
                  className="min-w-[236px] !rounded-lg font-sourcesanspro lg:text-[17px] sm:px-4"
                >
                  Refer Now
                </Button>
                <Modal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  onSubmit={handleSubmit}
                  initialValues={{ referrerEmail }} // Pass initial values if needed
                />
              </div>
            </div>
          </div>

          {/* referral benefits section */}
          <div className="mt-[100px] flex justify-center self-stretch">
            <div className="container-xs flex justify-center px-14 lg:p-5 md:p-5 md:px-5 sm:px-4">
              <div className="flex w-full flex-col items-center">
                <Heading
                  size="headingxl"
                  as="h2"
                  className="!text-[27.66px] !text-gray-900 md:!text-[21px]"
                >
                  <span className="text-gray-900">What Are The&nbsp;</span>
                  <span className="text-blue-600">Referral Benefits?</span>
                </Heading>
                <div className="mt-9 flex items-center justify-end gap-[23px] self-stretch">
                  <Text as="p">Enrolled</Text>
                  <Switch className="border-[1.5px] border-solid border-blue_gray-800" />
                </div>
                <div className="ml-3 mt-2.5 flex items-center gap-10 self-stretch lg:ml-0 md:ml-0 md:flex-col">
                  <div className="w-[22%] md:w-full">
                    <div className="flex items-end justify-between gap-5 rounded-tl-lg rounded-tr-lg bg-blue-600 px-2.5 py-2 shadow-sm">
                      <Heading
                        size="headingmd"
                        as="h3"
                        className="ml-1 !font-sourcesanspro uppercase lg:ml-0 md:ml-0"
                      >
                        ALL PROGRAMS
                      </Heading>
                      <Img
                        src="images/img_arrow_right.svg"
                        alt="Programs Arrow"
                        className="mb-1 h-[16px] w-[16px]"
                      />
                    </div>
                    <div className="rounded-bl-[14px] rounded-br-[14px] bg-home_accredian_com-nero px-3.5 py-5 shadow-sm">
                      <div className="flex items-center justify-between gap-5">
                        <Heading
                          size="headingmd"
                          as="h4"
                          className="!font-sourcesanspro uppercase !text-blue_gray-800"
                        >
                          Product Management
                        </Heading>
                        <Img
                          src="images/img_arrow_right_blue_gray_800.svg"
                          alt="Management Arrow"
                          className="h-[16px]"
                        />
                      </div>
                      <div className="mt-5 flex flex-col gap-[18px]">
                        <div className="mr-2 h-px bg-black-900_68 lg:mr-0 md:mr-0" />
                        <div className="flex items-center justify-between gap-5">
                          <Heading
                            size="headingmd"
                            as="h5"
                            className="!font-sourcesanspro uppercase !text-blue_gray-800"
                          >
                            Strategy & Leadership
                          </Heading>
                          <Img
                            src="images/img_arrow_right_blue_gray_800.svg"
                            alt="Leadership Arrow"
                            className="h-[16px]"
                          />
                        </div>
                        <div className="mr-2 h-px bg-black-900_68 lg:mr-0 md:mr-0" />
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="flex flex-1 py-3">
                          <Heading
                            size="headingmd"
                            as="h6"
                            className="!font-sourcesanspro uppercase !text-blue_gray-800"
                          >
                            Business Management
                          </Heading>
                        </div>
                        <Img
                          src="images/img_arrow_right_blue_gray_800.svg"
                          alt="Business Arrow"
                          className="h-[16px]"
                        />
                      </div>
                      <div className="mt-1.5 flex flex-col gap-3.5">
                        <div className="mr-1.5 h-px bg-black-900_68 lg:mr-0 md:mr-0" />
                        <div className="mb-3 flex items-center justify-between gap-5">
                          <Heading
                            size="headingmd"
                            as="h6"
                            className="!font-sourcesanspro uppercase !text-blue_gray-800"
                          >
                            Fintech
                          </Heading>
                          <Img
                            src="images/img_arrow_right_blue_gray_800.svg"
                            alt="Fintech Arrow"
                            className="h-[16px]"
                          />
                        </div>
                      </div>
                      <div className="mt-2 flex flex-col gap-3.5">
                        <div className="mr-1.5 h-px bg-black-900_68 lg:mr-0 md:mr-0" />
                        <div className="flex items-center justify-between gap-5">
                          <Heading
                            size="headingmd"
                            as="h6"
                            className="!font-sourcesanspro uppercase !text-blue_gray-800"
                          >
                            Senior Management
                          </Heading>
                          <Img
                            src="images/img_arrow_right_blue_gray_800.svg"
                            alt="Senior Arrow"
                            className="h-[16px]"
                          />
                        </div>
                        <div className="mr-1.5 h-px bg-black-900_68 lg:mr-0 md:mr-0" />
                      </div>
                      <div className="mt-[22px] flex items-center justify-between gap-5">
                        <Heading
                          size="headingmd"
                          as="h6"
                          className="!font-sourcesanspro uppercase !text-blue_gray-800"
                        >
                          Data Science
                        </Heading>
                        <Img
                          src="images/img_arrow_right_blue_gray_800.svg"
                          alt="Data Arrow"
                          className="h-[16px]"
                        />
                      </div>
                      <div className="mr-1 mt-[22px] flex flex-col gap-[18px] lg:mr-0 md:mr-0">
                        <div className="h-px bg-black-900_68" />
                        <div className="flex items-center justify-center gap-5">
                          <Heading
                            size="headingmd"
                            as="h6"
                            className="!font-sourcesanspro uppercase !text-blue_gray-800"
                          >
                            Digital Transformation
                          </Heading>
                          <Img
                            src="images/img_arrow_right_blue_gray_800.svg"
                            alt="Digital Arrow"
                            className="h-[8px]"
                          />
                        </div>
                        <div className="h-px bg-black-900_68" />
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-5">
                        <Heading
                          size="headingmd"
                          as="h6"
                          className="!font-sourcesanspro uppercase !text-blue_gray-800"
                        >
                          Business Analytics
                        </Heading>
                        <Img
                          src="images/img_arrow_right_blue_gray_800.svg"
                          alt="Analytics Arrow"
                          className="h-[16px]"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 md:self-stretch">
                    <ReactTable
                      bodyProps={{ className: "" }}
                      headerProps={{
                        className:
                          "bg-blue-600_59 rounded-tl-[14px] rounded-tr-[14px]",
                      }}
                      rowDataProps={{ className: "md:flex-col" }}
                      className="sm:whitespace-no-wrap sm:block sm:overflow-x-auto"
                      columns={tableColumns}
                      data={tableData}
                    />
                  </div>
                </div>
                <SelectBox
                  color="gray_400"
                  size="sm"
                  variant="outline"
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_400.svg"
                      alt="Arrow Down"
                      className="h-[8px] w-[14px]"
                    />
                  }
                  name="Dropdown More"
                  placeholder={`Show More`}
                  options={dropDownOptions}
                  className="mt-[22px] w-[14%] self-end !rounded-lg font-sourcesanspro font-semibold sm:px-4"
                />
                <Button
                  onClick={handleOpenModal}
                  size="md"
                  shape="round"
                  className="mt-6 min-w-[236px] !rounded-lg font-sourcesanspro lg:text-[17px] sm:px-4"
                >
                  Refer Now
                </Button>
                <Modal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                  onSubmit={handleSubmit}
                  initialValues={{ referrerEmail }} // Pass initial values if needed
                />
              </div>
            </div>
          </div>

          {/* faq section */}
          <div className="mt-44 flex flex-col items-center self-stretch">
            <div className="container-xs flex flex-col items-center gap-14 px-3 lg:p-5 md:p-5 sm:gap-7">
              <Heading
                size="headingxl"
                as="h2"
                className="!font-inter !text-[27.66px] capitalize !text-gray-900 md:!text-[21px]"
              >
                <span className="text-gray-900">Frequently Asked&nbsp;</span>
                <span className="text-blue-600">Questions</span>
              </Heading>
              <div className="ml-[54px] flex items-start self-stretch lg:ml-0 md:ml-0 md:flex-col">
                <div className="mt-1 flex w-[28%] flex-col items-start gap-[18px] self-center md:w-full">
                  <Button
                    color="home.accredian.com_nero"
                    size="lg"
                    shape="round"
                    className="min-w-[258px] border-2 border-solid border-gray-300 font-inter font-semibold capitalize !text-blue-600 shadow-xs lg:text-[13px] sm:px-4"
                  >
                    Eligibility
                  </Button>
                  <div className="flex w-[70%] justify-center rounded-md border-2 border-solid border-gray-600 p-5 lg:w-full md:w-full">
                    <Heading
                      size="headingxs"
                      as="h3"
                      className="!font-inter !text-[16.73px] capitalize !text-gray-600"
                    >
                      How to Use?
                    </Heading>
                  </div>
                  <Button
                    color="gray_600"
                    size="lg"
                    variant="outline"
                    shape="round"
                    className="min-w-[260px] font-inter font-semibold capitalize lg:text-sm sm:px-4"
                  >
                    Terms & Conditions
                  </Button>
                </div>
                <Accordion
                  preExpanded={[0]}
                  className="flex flex-1 flex-col gap-4 md:w-full md:self-stretch"
                >
                  {[...Array(2)].map((_, i) => (
                    <AccordionItem uuid={i} key={`Expandable FAQ List${i}`}>
                      <div className="flex flex-1 flex-col gap-2">
                        <AccordionItemHeading className="w-full">
                          <AccordionItemButton>
                            <AccordionItemState>
                              {(props) => (
                                <>
                                  <div className="flex flex-wrap justify-between gap-3.5 py-5 md:flex-col">
                                    <Heading
                                      size="headingxs"
                                      as="h4"
                                      className="self-end !font-inter !text-[16.88px] !text-blue-600 md:self-auto"
                                    >
                                      Do I need to have prior Product Management
                                      and Project Management experience to
                                      enroll in the program?
                                    </Heading>
                                    {props?.expanded ? (
                                      <Img
                                        src="images/img_arrow_up.svg"
                                        alt="Expand Icon"
                                        className="h-[24px] w-[24px] md:w-full"
                                      />
                                    ) : (
                                      <Img
                                        src="images/img_arrow_down_black_900.svg"
                                        alt="Collapse Icon"
                                        className="mr-[140px] h-[24px] w-[24px] md:mr-0 md:w-full"
                                      />
                                    )}
                                  </div>
                                </>
                              )}
                            </AccordionItemState>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div className="ml-4 mr-7 lg:mx-0 md:mx-0">
                            <Heading
                              size="texts"
                              as="h5"
                              className="!font-inter !text-[15.13px] !font-normal leading-6 !text-black-900_dd"
                            >
                              <>
                                No, the program is designed to be inclusive of
                                all levels of experience. All topics will be
                                covered from the basics, making it
                                <br />
                                suitable for individuals from any field of work.
                              </>
                            </Heading>
                          </div>
                        </AccordionItemPanel>
                      </div>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>

          {/* contact promo section */}
          <div className="container-xs mt-[134px] lg:p-5 md:p-5">
            <div className="h-[210px] rounded-[12px] border border-solid border-blue-600 bg-blue-600 bg-[url(/public/images/img_div_cta_grad.svg)] bg-cover bg-no-repeat px-12 py-16 lg:h-auto lg:py-8 md:h-auto md:p-5 sm:p-4">
              <div className="flex items-center justify-center md:flex-col">
                <div className="flex flex-1 justify-center gap-8 md:flex-col md:self-stretch">
                  <div className="flex flex-col items-center rounded-[12px] bg-indigo-50_59">
                    <Button
                      color="home.accredian.com_nero"
                      size="xl"
                      className="w-[72px] rounded-[12px]"
                    >
                      <Img src="images/img_svg.svg" />
                    </Button>
                  </div>
                  <div className="flex flex-1 flex-col items-start gap-2.5 md:self-stretch">
                    <Heading
                      size="heading2xl"
                      as="h2"
                      className="!font-inter !text-[28.01px] md:!text-[22px]"
                    >
                      Want to delve deeper into the program?
                    </Heading>
                    <Text
                      size="textmd"
                      as="p"
                      className="mb-2 !font-inter !text-[16.73px] !font-medium !text-gray-100"
                    >
                      Share your details to receive expert insights from our
                      program team!
                    </Text>
                  </div>
                </div>
                <Button
                  color="home.accredian.com_nero"
                  size="sm"
                  shape="round"
                  rightIcon={
                    <Img
                      src="images/img_svg_blue_a200.svg"
                      alt="Svg"
                      className="h-[20px] w-[20px]"
                    />
                  }
                  className="mb-1.5 min-w-[200px] gap-0.5 self-end !rounded-lg font-inter font-semibold lg:text-[15px] md:self-auto sm:px-4"
                >
                  Get in touch
                </Button>
              </div>
            </div>
          </div>
          <div className="relative mt-[120px] h-[794px] self-stretch lg:h-auto md:h-auto">
            {/* footer section */}
            <Footer />
            <div className="absolute bottom-[12%] left-0 right-0 m-auto h-[60px] flex-1 px-1 lg:h-auto md:h-auto">
              <Img
                src="images/img_group_20045.svg"
                alt="Image Seven"
                className="h-[50px] w-[50px]"
              />
              <Img
                src="images/img_group_21799.svg"
                alt="Image Eight"
                className="absolute right-[13.31px] top-[12.98px] m-auto h-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
