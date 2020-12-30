import React from 'react';
import { withFormik, FormikProps, FormikErrors, FormikTouched } from 'formik';
import { Grid, TextField } from "@material-ui/core";
import { ApiClient } from "@petriworks/api-client";
import { useTranslation } from "react-i18next";

type FormValues = {
    name: string,
    email: string,
}

type FormProps = {
    apiClient: ApiClient
};

const isEmailValid = (touched: FormikTouched<FormValues>, errors: FormikErrors<FormValues>) => {
    return Boolean(!touched.email || errors.email === null);
}


const isNameValid = (touched: FormikTouched<FormValues>, errors: FormikErrors<FormValues>) => {
    return Boolean(!touched.name || errors.name === null);
}

const Form = (props: FormikProps<FormValues>) => {
    const { t } = useTranslation();
    const { touched, errors, isSubmitting } = props;
    return (
        <Grid item sm={12}>
            <TextField
                error={!isEmailValid(touched, errors)}
                id="email"
                label={t("career.subscribe.email")}
                defaultValue=""
                helperText={!isEmailValid(touched, errors) && t("career.subscribe.invalid_email")}
            />
            <TextField
                error={!isNameValid(touched, errors)}
                id="name"
                label={t("career.subscribe.name")}
                defaultValue=""
                helperText={!isNameValid(touched, errors) && t("career.subscribe.invalid_name")}
            />
        </Grid>
    );
}

const Subscribe = withFormik<FormProps, FormValues>({
    validate: (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        return errors;
    },
    handleSubmit: (values: FormValues) => {

    }
})(Form);

export default Subscribe;