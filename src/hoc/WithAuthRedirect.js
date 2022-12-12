import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const WithAuthRedirect = (Component) => {
  function RedirectComponent(props) {
    if (!props.isAuth) return <Navigate to="/login" />;
    return <Component {...props} />;
  }
  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
