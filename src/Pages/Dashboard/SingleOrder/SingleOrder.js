import React, { useState } from "react";

const SingleOrder = (props) => {
  const { productName, img, price, status, name, address, _id } = props.order;
  const change = props.change;
  const setChange = props.setChange;
  const manage = props.manage;
  const [shipped, setShipped] = useState(true);
  const changeState = (e) => {
    if (e.target.value === "Shipped") {
      setShipped(true);
    } else {
      setShipped(false);
    }
    console.log(e.target.value);
  };
  //delete order
  const cancelOrder = () => {
    const proceed = window.confirm("Are you sure you want to delete this?");
    if (proceed) {
      fetch(`https://blooming-brushlands-04717.herokuapp.com/orders/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Order Cancelled Successfully!");
            setChange(!change);
          }
        });
    }
  };
  //update status
  const updateStatus = () => {
    let status;
    if (shipped) {
      status = "Shipped";
    } else {
      status = "Approved";
    }
    props.order.status = status;
    fetch(`https://blooming-brushlands-04717.herokuapp.com/orders/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(props.order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          if (status === "Shipped") {
            alert("Order Shipped Successfully!");
          } else {
            alert("Order Approved Successfully!");
          }
          setChange(!change);
        }
      });
  };
  return (
    <div>
      <div className="p-6 rounded-md shadow-md bg-coolGray-50 text-coolGray-900 h-full">
        <div className="mb-2 text-right">
          <button
            className="py-2 px-3 rounded-full bg-pink-300"
            onClick={cancelOrder}
          >
            <i
              className="fas fa-trash-alt text-red-700 "
              title="Cancel Order!"
            ></i>
          </button>
        </div>
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-md"
        />
        <div className="mt-6 mb-2">
          {manage === false && (
            <span className="block text-lg font-bold tracking-widest uppercase text-pink-600">
              ${price}
            </span>
          )}

          <h2 className="text-xl font-semibold tracking-wide">{productName}</h2>
          {manage === true && (
            <div>
              <h1 className="font-semibold mt-2">
                Order Placed by <span className="text-pink-600">{name}</span>
              </h1>
              <h1 className="text-md my-2 break-words">Location:{address}</h1>
            </div>
          )}
          {status === "Pending" && (
            <h2 className="text-red-500 font-semibold">Order Pending...</h2>
          )}
          {status === "Shipped" && (
            <h2 className="text-green-700 font-semibold">Order Shipped</h2>
          )}
          {status === "Approved" && (
            <h2 className="text-green-700 font-semibold">Order Approved</h2>
          )}
        </div>
        <div>
          {manage === true && (
            <div className="flex items-center flex-wrap">
              <select
                className="focus:outline-none px-4 py-2 rounded font-semibold mt-2"
                style={{ boxShadow: "0 4px 14px 2px rgb(255, 192, 203,0.9)" }}
                onBlur={changeState}
              >
                <option value="Shipped">Shipped</option>
                <option value="Approved">Approved</option>
              </select>
              <button
                className="focus:outline-none px-3 py-2 rounded font-semibold bg-pink-600 text-sm lg:ml-3 text-white mt-2"
                onClick={updateStatus}
              >
                Update Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
