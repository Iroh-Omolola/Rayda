import React from 'react';
import NotificationIcon from "../assets/images/notification.svg";

export const Header= () => {
  return (
    <div className="w-full">
      <div className="flex w-full mb-4">
        <div className="w-full">
          <h1 className="text-[18px] md:text-[30px] text-text_one font-plex font-semibold">
            Welcome
          </h1>
          <p className="text-[12px] md:text-[16px] text-text_two font-plex">
            Your current sales auction and activity.
          </p>
        </div>
        <div className="relative  my-auto cursor-pointer">
          <div className="p-3">
            <div className="hidden sm:block">
              <img src={NotificationIcon} alt="notification-icon" />
            </div>
            <div className="block sm:hidden">
              <img
                src={NotificationIcon}
                alt="notification-icon"
              />

            </div>
          </div>
          <div className="absolute flex  left-5 sm:left-6  top-5 sm:top-6 w-4 h-4 sm:w-5 sm:h-5  bg-[#F04438] rounded-full">
            <span className="text-[10px] sm:text-[12px] text-center m-auto p-auto text-[white]  border-[white]">
              2
            </span>
          </div>
        </div>
      </div>
      <hr className="text-[#EAECF0]" />
    </div>
  );  
}