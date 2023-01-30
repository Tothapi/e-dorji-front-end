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
            {orders?.map((order) => {
              return (
                <div
                  className="flex items-center justify-between w-full overflow-x-hidden"
                  key={order?._id}
                >
                  <p>{order?.userMail || "no User mail found"}</p>
                  <p>{order?.products || "no Products found"}</p>
                  <p>{order?.address || "no Address found"}</p>
                  <p>{order?.totalPrice || "no Price found"}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </PrimarySearchAppBar>
  );
}
