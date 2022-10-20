import React from "react";
import styles from "./FormElements.module.css";

const CommonForm = ({ input, meta, ...props }: any) => {
    const hasError = meta.touched && meta.error && <span>{meta.error}</span>;
    return (
        <div className={`${styles.formControl} ${styles.error}`}>
            <div>{props.children}</div>
            {hasError}
        </div>
    );
};

export const TextAreaComponent = (props: any) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <CommonForm {...props}>
            {" "}
            <textarea {...input} {...props} />
        </CommonForm>
    );
};

export const InputComponent = (props: any) => {
    const { input, meta, child, ...restProps } = props;
    return (
        <CommonForm {...props}>
            {" "}
            <input {...input} {...props} />
        </CommonForm>
    );
};
