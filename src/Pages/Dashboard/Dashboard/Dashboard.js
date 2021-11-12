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

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
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
            className={`h-full p-3 space-y-2 w-72 bg-pink-600 text-white transition duration-700 ease-in-out lg:block ${
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
            <div className="divide-y divide-coolGray-300">
              <ul
                className="pt-2 pb-4 space-y-1 text-sm"
                onClick={() => setIsOpen(false)}
              >
                <li className="bg-coolGray-100 text-coolGray-900">
                  <a
                    href="/"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fillCurrent text-white"
                    >
                      <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                    </svg>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <Link
                    to={`${url}/pay`}
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <span>Pay</span>
                  </Link>
                </li>
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
              </ul>
              {/* for admin  */}
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
                    to={`${url}/review`}
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <span>Review</span>
                  </Link>
                </li>
              </ul>
              <ul className="pt-4 pb-2 space-y-1 text-sm">
                <li>
                  <Link
                    to="/home"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <a
                    href="/"
                    className="flex items-center p-2 space-x-3 rounded-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-5 h-5 fillCurrent text-white"
                    >
                      <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                      <rect width="32" height="64" x="256" y="232"></rect>
                    </svg>
                    <span>Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full">
            {/* route for nesting path  */}
            <Switch>
              <Route exact path={path}>
                <h3>Please select a topic.</h3>
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
              <Route path={`${path}/manageorders`}>
                <ManageOrders></ManageOrders>
              </Route>
              <Route path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route path={`${path}/addproduct`}>
                <AddProduct></AddProduct>
              </Route>
              <Route path={`${path}`}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
