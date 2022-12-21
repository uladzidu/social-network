import { useFormik } from "formik";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../redux/redux-store";
import { loginTC } from "../../redux/login-reducer";
import { Navigate } from "react-router-dom";
import { PATH } from "../Navbar/Navbar";
import { authMeTC } from "../../redux/auth-reducer";
import { initializeAppTC } from "../../redux/app-reducer";

export type FormikErrorType = {
    email?: string;
    password?: string;
    rememberMe?: boolean;
};

export const LoginWithFormik = () => {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);
    const email = useAppSelector((state) => state.auth.email);
    const userId = useAppSelector((state) => state.auth.id);
    const [showPassword, setShowPassword] = useState(false);

    console.log("email : ", email);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = "Invalid email address";
            }
            if (!values.password) {
                errors.password = "Required";
            } else if (values.password.length < 8) {
                errors.password = "Password must be more symbol";
            }

            return errors;
        },
        onSubmit: async (values) => {
            await dispatch(loginTC(values.email, values.password, values.rememberMe));
            dispatch(initializeAppTC());
            formik.resetForm();
        },
    });

    if (email) {
        return <Navigate to={PATH.PROFILE + "/" + userId} />;
    }

    return (
        <Grid container justifyContent={"center"}>
            <Paper style={{ padding: "30px" }}>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <Typography variant="h5" component="h3" sx={{ flexGrow: 1 }}>
                            Sign in
                        </Typography>
                        <FormGroup>
                            <TextField
                                label="email"
                                variant="standard"
                                {...formik.getFieldProps("email")}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div style={{ color: "red" }}>{formik.errors.email}</div>
                            )}
                            <FormControl variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">
                                    password
                                </InputLabel>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    {...formik.getFieldProps("password")}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            {formik.touched.password && formik.errors.password && (
                                <div style={{ color: "red" }}>{formik.errors.password}</div>
                            )}
                            <FormControlLabel
                                label={"Remember me"}
                                control={
                                    <Checkbox
                                        checked={formik.values.rememberMe}
                                        {...formik.getFieldProps("rememberMe")}
                                    />
                                }
                            />
                            {/*<FormLabel style={{ padding: "10px" }}>*/}
                            {/*    <NavLink*/}
                            {/*        to={PATH.RECOVERY_PASSWORD}*/}
                            {/*        style={{ textDecoration: "none" }}*/}
                            {/*    >*/}
                            {/*        Forgot Password?*/}
                            {/*    </NavLink>*/}
                            {/*</FormLabel>*/}
                            <Button type={"submit"} variant={"contained"}>
                                Sign In
                            </Button>
                        </FormGroup>
                        {/*<FormLabel*/}
                        {/*    style={{ marginTop: "20px", display: "flex", flexDirection: "column" }}*/}
                        {/*>*/}
                        {/*    <span>Don’t have an account?</span>*/}
                        {/*    <NavLink to={PATH.REGISTRATION}>Sign Up</NavLink>*/}
                        {/*</FormLabel>*/}
                    </FormControl>
                </form>
            </Paper>
        </Grid>
    );
};
