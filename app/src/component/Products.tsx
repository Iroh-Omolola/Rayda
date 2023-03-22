import { ButtonUnstyled } from "@mui/base";
import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import { useGetProductsQuery } from "../services/slices/productSlice";
import { Card } from "./Card";
import { ProductProps } from "../type";

export const Products  = () => {
 const { data, isLoading } = useGetProductsQuery();
 const [products, setProducts] = useState([]);

 useEffect(() => {
   if (data == null) {
     console.log("data is null");
   } else {
     setProducts(data["data"]);
   }
 }, [data]);

  return (
    <>
      <div className="w-full mt-7  rounded-[12px] px-6 py-5 shadow-sm shadow-shadow bg-[white] border-[#EAECF0] ">
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
        {isLoading && (
          <>
            <div>
              <Skeleton variant="rectangular" width="100%" height={132} />
              <Skeleton />
              <Skeleton width="80%" />
            </div>
            <div>
              <Skeleton variant="rectangular" width="100%" height={132} />
              <Skeleton />
              <Skeleton width="80%" />
            </div>
            <div>
              <Skeleton variant="rectangular" width="100%" height={132} />
              <Skeleton />
              <Skeleton width="80%" />
            </div>
          </>
        )}
        <div className="mt-5 grid gap-y-8 gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data == null ? (
            <h1>No products !!!</h1>
          ) : (
            products.map((product: ProductProps, index) => (
              <Card
                key={index + 1}
                myKey={index + 1}
                image={product.image}
                bid={product.bid}
                name={product.name}
                title={product.title}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
