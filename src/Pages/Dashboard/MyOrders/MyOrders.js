import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import SingleOrder from "../SingleOrder/SingleOrder";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [change, setChange] = useState(false);
  //get orders by user email
  useEffect(() => {
    fetch(
      `https://blooming-brushlands-04717.herokuapp.com/orders?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
        setLoading(false);
      });
  }, [user?.email, change]);
  if (loading) {
    return (
      <div className="mt-12">
        <div className="flex items-center justify-center space-x-2 animate-bounce">
          <div className="w-8 h-8 bg-pink-300 rounded-full"></div>
          <div className="w-8 h-8 bg-pink-500 rounded-full"></div>
          <div className="w-8 h-8 bg-pink-700 rounded-full"></div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="md:w-11/12 sm:w-4/5 w-11/12 mx-auto py-12">
        <h1 className="text-center font-semibold text-3xl mb-12">Your Order</h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {orders.map((order) => (
            <SingleOrder
              key={order._id}
              manage={false}
              change={change}
              setChange={setChange}
              order={order}
            ></SingleOrder>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
