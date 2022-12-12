import React from "react";
import s from "./Post.module.css";

export type postDataPropsType = {
  id: string;
  postMessage: string;
  likes: number;
};

export const Post = (props: postDataPropsType) => {
  return (
    <div className={s.item}>
      <img
        src={
          "https://media.istockphoto.com/vectors/user-sign-icon-person-symbol-human-avatar-vector-id639085642?k=20&m=639085642&s=170667a&w=0&h=Oz2wAbb8r_b8sU8k4yZ3RR4NRbe-s7GF0kxjs1aez9M="
        }
        alt={"picture"}
      />
      {props.postMessage}
      <div>
        <span>like {props.likes}</span>
      </div>
    </div>
  );
};
