import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
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
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
