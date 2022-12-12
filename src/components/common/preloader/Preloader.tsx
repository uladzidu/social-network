import React from "react";
import preloader from "../../../assets/images/Infinity-4.3s-200px (1).svg";

export type PreloaderPropsType = {};

export const Preloader = (props: PreloaderPropsType) => {
  return <img alt={"img"} src={preloader} />;
};
