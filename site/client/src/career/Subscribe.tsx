import React from 'react';
import { withFormik, FormikProps, FormikErrors, FormikTouched } from 'formik';
import { Grid } from "@material-ui/core";
import { ApiClient } from "@petriworks/api-client";
import { EmailAddress } from "@petriworks/common";
import { useTranslation } from "react-i18next";
import { ParagraphContainer, StyledTextField } from '../styles/components';
import SubscribeButton from "./SubscribeButton";

type FormValues = {
    name: string,
    email: string,
}

type FormProps = {
    apiClient: ApiClient
};

const isEmailValid = (touched: FormikTouched<FormValues>, errors: FormikErrors<FormValues>) => {
    return !touched.email || errors.email === undefined;
}


const isNameValid = (touched: FormikTouched<FormValues>, errors: FormikErrors<FormValues>) => {
    return !touched.name || errors.name === undefined;
}

const Form = (props: FormikProps<FormValues>) => {
    const { t } = useTranslation();
    const { touched, errors, isSubmitting, handleChange, handleBlur } = props;
    return (
        <>
            <ParagraphContainer>

                <Grid container spacing={2}>
                    <Grid item xs={7} sm={6}>
                        <StyledTextField
                            error={!isNameValid(touched, errors)}
                            id="name"
                            label={t("career.subscribe.name")}
                            defaultValue=""
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={!isNameValid(touched, errors) && t("career.subscribe.invalid_name")}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={7} sm={6}>
                        <StyledTextField
                            error={!isEmailValid(touched, errors)}
                            id="email"
                            label={t("career.subscribe.email")}
                            defaultValue=""
                            onChange={handleChange}
                            onBlur={handleBlur}
                            helperText={!isEmailValid(touched, errors) && t("career.subscribe.invalid_email")}
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </ParagraphContainer>
            <SubscribeButton isSubmitting={isSubmitting} onClick={props.submitForm} />
        </>
    );
}

const Subscribe = withFormik<FormProps, FormValues>({
    validate: (values: FormValues) => {
        const errors: FormikErrors<FormValues> = {};
        if (!EmailAddress.isValid(values.email)) {
            errors.email = "invalid";
        }
        return errors;
    },
    handleSubmit: (values: FormValues) => {
        console.log(values);
    }
})(Form);

export default Subscribe;