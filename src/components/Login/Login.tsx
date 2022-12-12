import React from "react";
// import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { maxLengthThunk, requiredField } from "../../utils/validators/validators";
import { InputComponent } from "../common/FormsControls/FormElements";
import { connect } from "react-redux";
import { loginThunkCreator } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-store";
import { Navigate } from "react-router-dom";
import styles from "../common/FormsControls/FormElements.module.css";
import { Field } from "formik";

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

type mdtpType = {
  loginThunk: (email: string, password: string, rememberMe: boolean) => void;
};
type mstpType = {
  isAuth: boolean;
};

const loginMaxLength = maxLengthThunk(40);
const passwordMaxLength = maxLengthThunk(40);

// const LoginForm: React.FC<FormDataType> = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field
//                     placeholder={"Email"}
//                     name={"email"}
//                     component={InputComponent}
//                     validate={[requiredField, loginMaxLength]}
//                 />
//             </div>
//             <div>
//                 <Field
//                     placeholder={"Password"}
//                     name={"password"}
//                     component={InputComponent}
//                     validate={[requiredField, passwordMaxLength]}
//                     type="password"
//                 />
//             </div>
//             <div>
//                 <Field type="checkbox" name={"rememberMe"} component={InputComponent} /> remember me
//             </div>
//             {props.error && <div className={styles.summeryError}>{props.error}</div>}
//             <div>
//                 <button>Login</button>
//             </div>
//             <div></div>
//         </form>
//     );
//};

// const LoginReduxForm = reduxForm<FormDataType>({ form: "login" })(LoginForm);

type LoginPropsType = {
  loginThunk: (email: string, password: string, rememberMe: boolean) => void;
  isAuth: boolean;
};

const Login = (props: LoginPropsType) => {
  const onSubmit = (formData: FormDataType) => {
    props.loginThunk(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      {/*<LoginReduxForm onSubmit={onSubmit} />*/}
    </div>
  );
};

const mdtp = (dispatch: any): mdtpType => {
  return {
    loginThunk: (email: string, password: string, rememberMe: boolean) => {
      dispatch(loginThunkCreator(email, password, rememberMe));
    },
  };
};

const mstp = (state: AppStateType): mstpType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

// export default connect(null, mdtp)(Login)
export default connect(mstp, mdtp)(Login);
