import { ButtonUnstyled } from "@mui/base";
import { ProductProps } from "../type";

export const Card = ({ myKey, image, bid, name, title }: ProductProps) => {
  return (
    <div className="border-[0.5px] border-[#D0D5DD] bg-[white] p-2.5 rounded-[12px]">
      <div className="flex justify-center py-auto bg-[#F2F4F7] rounded-[12px] max-w-[900px] h-[132px]">
        <img
          src={image}
          width="100"
          height={"100"}
          className="my-auto"
          alt="profile-pic"
        />
      </div>
      <div className="space-y-3 mt-3 border-b border-b-[#EAECF0] mb-3">
        <div className="flex space-x-2">
          <div className="flex w-[28px] h-[28px] xl:w-[30px] xl:h-[30px] flex-nowrap  bg-[#F2F4F7] rounded-full">
            <span className="text-[10px]  xl:text-[13px] font-medium  text-center m-auto p-auto text-[#475467]">
              KO
            </span>
          </div>
          <div className="whitespace-nowrap my-auto flex space-x-0.5 text-[12px]">
            <h3 className="text-text_one whitespace-nowrap font-semibold">
              {name}
            </h3>{" "}
            <span className="text-[#98A2B3] whitespace-nowrap">
              (Highest Bidder)
            </span>
          </div>
        </div>
        <h3 className="text-text_one text-[14px] font-semibold">{title}</h3>
        <div className="flex space-x-0.5 text-text_two pb-3  text-[14px]">
          <h1 className="">Current Bid:</h1>{" "}
          <span className="font-bold">{bid}</span>
        </div>
      </div>
      <div className="flex">
        <ButtonUnstyled className="flex justify-center bg-[#004CCC] w-full border-[0.2px] py-1 sm:py-1.5 px-2 sm:px-3 shadow-xs shadow-shadow_btn  border-[#D0D5DD] rounded-[8px] outline-none cursor-pointer">
          {" "}
          <p className="sm:text-[14px]  font-semibold text-[12px]  text-[white] whitespace-nowrap">
            Add to wishlist
          </p>
        </ButtonUnstyled>
      </div>
    </div>
  );
};
