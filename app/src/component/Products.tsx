import { ButtonUnstyled } from "@mui/base";
import React from "react";
import { Card } from "./Card";

export const Products  = () => {
  return (
    <div className="w-full mt-7  rounded-[12px] px-5 py-5 shadow-sm shadow-shadow bg-[white] border-[#EAECF0] ">
      <div className="flex justify-between pb-5 border-b border-b-[#EAECF0]  my-auto  w-full">
        <h6 className="text-text_one text-[14px]  my-auto sm:text-[18px] font-semibold">
          Featured Items
        </h6>
        <div className="flex">
          <ButtonUnstyled className="flex border-[0.2px] py-1 sm:py-1.5 px-2 sm:px-3  border-[#D0D5DD] rounded-[8px] outline-none cursor-pointer">
            {" "}
            <p className="sm:text-[14px] font-semibold text-[12px]  text-[#344054] whitespace-nowrap">
              View Auction
            </p>
          </ButtonUnstyled>
        </div>
      </div>
      <div className="mt-5 grid gap-y-8 gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
