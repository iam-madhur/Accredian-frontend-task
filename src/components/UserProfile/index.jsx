import { Text, Img } from "./..";
import React from "react";

export default function UserProfile({
  userImage = "images/img_user.svg",
  submitText = "Submit referrals easily via our website’s referral section.",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-end w-[20%] gap-[26px]`}
    >
      <Img
        src={userImage}
        alt="User Image"
        className="mr-[38px] h-[66px] w-[56%]"
      />
      <Text
        size="textmd"
        as="p"
        className="self-stretch text-center leading-[22px] !text-black-900"
      >
        {submitText}
      </Text>
    </div>
  );
}
