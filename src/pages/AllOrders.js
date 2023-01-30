import axios from "axios";
import React, { useEffect, useState } from "react";
import PrimarySearchAppBar from "../components/Header";

export default function AllOrders() {
  const [orders, setOrders] = useState([]);
  const getAllOrders = async () => {
    const res = await axios.get("http://localhost:4000/checkout/cart/");
    setOrders(res?.data?.carts);
    console.log(res, "order response");
  };
  useEffect(() => {
    getAllOrders();
  }, []);
  console.log(orders, "orders");
  return (
    <PrimarySearchAppBar
    // setOpenLogin={setOpenLogin}
    // setOpenRegister={setOpenRegister}
    >
      <div className="min-h-screen">
        {!orders?.length ? (
          <div className="text-[#f94a29] font-extrabold text-[30px] text-center mx-auto ">
            No Order Found
          </div>
        ) : (
          <div>
            <div className="flex pb-4">
              <p className="w-[25%] text-center font-extrabold underline">
                User Mail
              </p>
              <p className="w-[25%] font-extrabold text-center underline">
                List of Products
              </p>
              <p className="w-[25%] font-extrabold text-center underline">
                Address
              </p>
              <p className="w-[25%] font-extrabold text-center underline">
                Price
              </p>
            </div>
            {orders?.map((order) => {
              return (
                <div
                  className="flex items-center justify-between w-full overflow-x-hidden"
                  key={order?._id}
                >
                  <p className="w-[25%] text-center">
                    {order?.userMail || "no User mail found"}
                  </p>
                  <p className="w-[25%] text-center">
                    {order?.products || "no Products found"}
                  </p>
                  <p className="w-[25%] text-center">
                    {order?.address || "no Address found"}
                  </p>
                  <p className="w-[25%] text-center">
                    {order?.totalPrice || "no Price found"}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </PrimarySearchAppBar>
  );
}
