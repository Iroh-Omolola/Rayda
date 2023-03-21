import React from "react";

export const Products  = () => {
  return (
    <div className="w-full mt-7  rounded-[12px] px-5 py-5 shadow-sm shadow-shadow bg-[white] border-[#EAECF0] ">
      <div className="flex justify-between pb-5 border-b border-b-[#EAECF0]  my-auto  w-full">
        <h6 className="text-text_one text-[14px]  my-auto sm:text-[18px] font-semibold">
          Featured Items
        </h6>
        <div className="cursor-pointer flex py-1 sm:py-1.5 px-2 sm:px-3 border border-[#D0D5DD] rounded-[8px]">
          <p className="sm:text-[14px] text-[12px]  text-[#344054] whitespace-nowrap">
            View Auction
          </p>
        </div>
      </div>
    </div>
  );
};
