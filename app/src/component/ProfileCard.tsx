import React from "react";
import ProfilePicture from "../assets/images/avatar.svg";
import LikeIcon from "../assets/images/like.svg";

export const ProfileCard = () => {
  return (
    <div className="pt-5 mt-12 flex items-center  border pb-5 h-auto sm:h-80 rounded-[12px] shadow-sm shadow-shadow bg-[white] border-[#EAECF0]">
      <div className="relative w-full h-auto">
        <div className="sm:px-8 px-3">
          <div className="max-w-full bg-cover sm:mt-20 h-44 rounded-lg bg-hero no-repeat"></div>
        </div>
        <div className="w-full relative">
          <div className="relative w-full h-auto  -top-14 justify-center items-center sm:left-16 ">
            <div className="flex">
              <div className="w-full sm:flex hidden  sm:justify-start">
                <div className="border-[white] sm:w-[166px] sm:h-[166px] border-0 rounded-full">
                  <img
                    src={ProfilePicture}
                    alt="profile-pic"
                    width="176"
                    height={"176"}
                  />
                </div>
              </div>
              <div className="w-full flex sm:hidden justify-center sm:justify-start">
                <div className="border-[white] sm:w-[156px] sm:h-[156px] border-0 rounded-full">
                  <img
                    src={ProfilePicture}
                    width="120"
                    height={"120"}
                    alt="profile-pic"
                  />
                </div>
              </div>
            </div>
            <div className="hidden sm:flex w-full  justify-between">
              <div className="flex-col w-auto  ml-44 lg:ml-48 -mt-24 space-y-1">
                <h2 className="text-text_one text-[20px] lg:text-[24px] font-semibold">
                  Starts in: 3 days : 2 hours : 24 minutes{" "}
                </h2>
                <div className="w-full flex space-x-2">
                  <div className="w-[85px] my-auto rounded-[16px] bg-[#FFFAEB] px-3 flex space-x-1">
                    <div className="flex   my-auto w-1.5 h-1.5 lg:w-2 lg:h-2  bg-[#F79009] rounded-full"></div>
                    <p className="text-[#B54708] text-[10px] lg:text-[13px]">
                      Not Live
                    </p>
                  </div>
                  <p className="text-text_two lg:text-[16px] text-[14px]">
                    Layers Auction{" "}
                  </p>
                </div>
              </div>
              <div className="cursor-pointer flex py-2 mr-32 h-10 px-3 space-x-2 border border-[#D0D5DD] rounded-[8px] -mt-24">
                <img src={LikeIcon} alt="like-icon" />
                <p className="text-[14px] text-[#344054] md:block hidden whitespace-nowrap">
                  Accept Invite
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden -mt-14 flex w-full  justify-between">
          <div className="flex-col ml-4 sm:ml-10 w-auto  space-y-1">
            <h2 className="text-text_one text-[20px] lg:text-[24px] font-semibold">
              Starts in: 3 days : 2 hours : 24 minutes{" "}
            </h2>
            <div className="w-full flex space-x-2">
              <div className="w-[85px] my-auto rounded-[16px] bg-[#FFFAEB] px-3 flex space-x-1">
                <div className="flex   my-auto w-1.5 h-1.5 lg:w-2 lg:h-2  bg-[#F79009] rounded-full"></div>
                <p className="text-[#B54708] text-[10px] lg:text-[13px]">
                  Not Live
                </p>
              </div>
              <p className="text-text_two lg:text-[16px] text-[14px]">
                Layers Auction{" "}
              </p>
            </div>
          </div>
          <div className="flex py-2 mr-5 sm:mr-12 h-10 px-3 space-x-2 border border-[#D0D5DD] rounded-[8px] ">
            <img src={LikeIcon} alt="like-icon" />
            <p className="text-[14px] text-[#344054] md:block hidden whitespace-nowrap">
              Accept Invite
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
