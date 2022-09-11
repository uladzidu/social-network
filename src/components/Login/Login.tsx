import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthThunk, requiredField} from "../../utils/validators/validators";
import {InputComponent} from "../common/FormsControls/FormElements";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const loginMaxLength = maxLengthThunk(40)
const passwordMaxLength = maxLengthThunk(40)


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       component={InputComponent}
                       validate={[requiredField, loginMaxLength]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={InputComponent}
                       validate={[requiredField, passwordMaxLength]}
                />
            </div>
            <div>
                <Field type="checkbox"
                       name={'rememberMe'}
                       component={InputComponent}

                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
            <div></div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = (props: any) => {

    const onSubmit = (formData: FormDataType) => {
        props.loginThunk(formData.login, formData.password, formData.rememberMe)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mdtp = (dispatch: any) => {
    return {
        loginThunk: (login: string, password: string, rememberMe: boolean) => {
            dispatch(loginThunkCreator(login, password, rememberMe))
        }
    }
}

export default connect(null, mdtp)(Login)


