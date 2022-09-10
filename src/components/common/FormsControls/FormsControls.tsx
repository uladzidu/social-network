import React from "react";
import styles from './FormsControls.module.css'


export const TextArea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error && <span>{meta.error}</span>
    return (
        <div className={`${styles.formControl} ${styles.error}`}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError}
        </div>
    )
}