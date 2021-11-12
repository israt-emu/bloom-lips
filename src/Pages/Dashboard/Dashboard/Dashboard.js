import React from "react";
import useAuth from "../../../hooks/useAuth";
import adminImg from "../../../images/admin.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Pay from "../Pay/Pay";
import MyOrders from "../MyOrders/MyOrders";
import Review from "../Review/Review";
import ManageOrders from "../ManageOrders/ManageOrders";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddProduct from "../AddProduct/AddProduct";
import { useState } from "react/cjs/react.development";
import ManageProduct from "../ManageProduct/ManageProduct";
import AdminRoute from "../../AdminRoute/AdminRoute";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, admin, logOut } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div>
        <div className="lg:flex">
          <div>
            <button
              className="rounded border-2 border-pink-600 px-3 py-1 lg:hidden block ml-3 mt-4"
              onClick={() => setIsOpen(true)}
            >
              <i className="fas fa-bars text-pink-600"></i>
            </button>
          </div>
          <div
            className={`lg:h-screen h-full p-3 space-y-2 w-72 bg-pink-600 text-white transition duration-700 ease-in-out lg:block ${
              isOpen ? "block" : "hidden"
            } absolute top-0 left-0 lg:static`}
          >
            <div className="flex items-center p-2 space-x-4">
              <img
                src={adminImg}
                alt=""
                className="w-12 h-12 rounded-full bg-coolGray-500"
              />
              <div>
                <h2 className="text-md font-semibold">{user?.displayName}</h2>
              </div>
              <div>
                <button
                  className="ml-3 border-2 px-3 py-1 rounded lg:hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <i className="fas fa-times "></i>
                </button>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-semibold text-white border-b mb-3 pb-2">
                Welcome to Dashboard!
              </h1>
            </div>
            <div className="divide-y divide-coolGray-300">
              {admin ? (
                <ul onClick={() => setIsOpen(false)}>
                  <li>
                    <Link
                      to={`${url}/manageorders`}
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <span>Manage All Order</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${url}/makeadmin`}
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <span>Make Admin</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${url}/addproduct`}
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <span>Add Product</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${url}/manageproducts`}
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <span>Manage Products</span>
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul
                  className="pt-2 pb-4 space-y-1 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <li>
                    <Link
                      to={`${url}/myorders`}
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <span>My Orders</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${url}/review`}
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <span>Review</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${url}/pay`}
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <span>Pay</span>
                    </Link>
                  </li>
                </ul>
              )}

              <ul className="pt-4 pb-2 space-y-1 text-sm">
                <li>
                  <Link
                    to="/home"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li className="cursor-pointer p-2 text-base" onClick={logOut}>
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            {/* route for nesting path  */}
            <Switch>
              <Route exact path={path}>
                {admin ? <ManageOrders /> : <MyOrders />}
              </Route>
              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route path={`${path}/myorders`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <AdminRoute path={`${path}/manageorders`}>
                <ManageOrders></ManageOrders>
              </AdminRoute>
              <AdminRoute path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/addproduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute path={`${path}/manageproducts`}>
                <ManageProduct></ManageProduct>
              </AdminRoute>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
