import { ProfileType, updateUserDataTC } from "../../redux/profile-reducer";
import React from "react";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { useAppDispatch } from "../../redux/redux-store";

export const ProfileDataForm = (props: { profile: ProfileType }) => {
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            userId: props.profile.userId,
            fullName: "",
            aboutMe: "",
            lookingForAJob: false,
            contacts: {
                facebook: "",
                website: "",
                vk: "",
                twitter: "",
                instagram: "",
                youtube: "",
                github: "",
                mainLink: "",
            },
        },
        validate: (values) => {
            // const errors: FormikErrorType = {};
            // if (!values.email) {
            //     errors.email = "Required";
            // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            //     errors.email = "Invalid email address";
            // }
            // if (!values.password) {
            //     errors.password = "Required";
            // } else if (values.password.length < 3) {
            //     errors.password = "Password must be more symbol";
            // }
            //
            // return errors;
        },
        onSubmit: async (values) => {
            formik.resetForm();

            dispatch(updateUserDataTC(values));
        },
    });

    return (
        <div style={{ marginTop: "25px", marginLeft: "50px" }}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <FormControlComponent
                            name={"Name"}
                            formik={formik}
                            nameParam={"fullName"}
                        />
                        <FormControlComponent
                            name={"About me"}
                            formik={formik}
                            nameParam={"aboutMe"}
                        />
                        <FormControlLabel
                            label={"Looking For A Job"}
                            control={
                                <Checkbox
                                    checked={formik.values.lookingForAJob}
                                    {...formik.getFieldProps("lookingForAJob")}
                                />
                            }
                        />
                        <FormControlComponent
                            name={"My Skills"}
                            formik={formik}
                            nameParam={"lookingForAJobDescription"}
                        />
                        {/*<strong>Social Media : </strong>*/}
                        {/*<FormControlComponent*/}
                        {/*    name={"Contacts"}*/}
                        {/*    formik={formik}*/}
                        {/*    nameParam={"contacts"}*/}
                        {/*/>*/}
                        <Button type={"submit"} variant={"outlined"}>
                            Save
                        </Button>
                    </FormGroup>
                </FormControl>
            </form>
        </div>
    );
};

const FormControlComponent = (props: { name: string; formik: any; nameParam: string }) => {
    return (
        <FormControl variant="standard">
            <InputLabel htmlFor="standard-adornment-fullName">{props.name}</InputLabel>
            <Input
                type={"text"}
                {...props.formik.getFieldProps(props.nameParam)}
                endAdornment={<InputAdornment position="end"></InputAdornment>}
            />
        </FormControl>
    );
};
