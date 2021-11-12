import React from "react";

const ManageSingle = (props) => {
  const { img, name, color, _id } = props.product;
  const change = props.change;
  const setChange = props.setChange;
  //delete product
  const deleteProduct = () => {
    const proceed = window.confirm("Are you sure you want to delete this?");
    if (proceed) {
      fetch(`https://blooming-brushlands-04717.herokuapp.com/products/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            alert("Product Deleted Successfully!");
            setChange(!change);
          }
        });
    }
  };
  return (
    <div>
      <div className="p-6 rounded-md shadow-md bg-coolGray-50 text-coolGray-900 h-full">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-md"
        />
        <div className="mt-6 mb-2">
          <h1 className="font-semibold">
            Color:
            <i
              className="fas fa-bahai text-lg ml-2"
              style={{ color: `${color}` }}
            ></i>
          </h1>
          <h2 className="lg:text-xl text-md font-semibold tracking-wide">
            {name}
          </h2>
        </div>
        <div className="text-right">
          <button
            className="py-2 px-3 rounded-full bg-pink-300"
            onClick={deleteProduct}
          >
            <i className="fas fa-trash-alt text-red-700 " title="Delete!"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageSingle;
