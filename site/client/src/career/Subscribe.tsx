import React from "react";
import { withFormik, FormikProps, FormikErrors, FormikTouched } from "formik";
import { Grid } from "@material-ui/core";
import { ApiClient, SubscribeResource } from "@petriworks/api-client";
import { Name, Unit, match, unit } from "@petriworks/common";
import { NewSubscriptionSchema, NewSubscriptionRequest } from "@petriworks/api-contracts";
import { useTranslation } from "react-i18next";
import { ParagraphContainer, StyledTextField } from "../styles/components";
import SubscribeButton from "./SubscribeButton";

type FormProps = {
  apiClient: ApiClient;
};

const isEmailValid = (
  touched: FormikTouched<NewSubscriptionRequest>,
  errors: FormikErrors<NewSubscriptionRequest>
) => {
  return !touched.email || errors.email === undefined;
};

const isNameValid = (
  touched: FormikTouched<NewSubscriptionRequest>,
  errors: FormikErrors<NewSubscriptionRequest>
) => {
  return !touched.name || errors.name === undefined;
};

const Form = (props: FormikProps<NewSubscriptionRequest>) => {
  const { t } = useTranslation();
  const { touched, errors, isSubmitting, handleChange, handleBlur, submitForm, values } = props;

  return (
    <>
      <ParagraphContainer>
        <Grid container spacing={2}>
          <Grid item xs={7} sm={6}>
            <StyledTextField
              error={!isNameValid(touched, errors)}
              id="name"
              value={values.name || ""}
              label={t("career.subscribe.name")}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                !isNameValid(touched, errors) &&
                t("career.subscribe.invalid_name", {
                  min: Name.MinLenght,
                  max: Name.MaxLength,
                })
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={7} sm={6}>
            <StyledTextField
              error={!isEmailValid(touched, errors)}
              id="email"
              value={values.email || ""}
              label={t("career.subscribe.email")}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={!isEmailValid(touched, errors) && t("career.subscribe.invalid_email")}
              fullWidth
            />
          </Grid>
        </Grid>
      </ParagraphContainer>
      <SubscribeButton isSubmitting={isSubmitting} onClick={submitForm} />
    </>
  );
};

const Subscribe = withFormik<FormProps, NewSubscriptionRequest>({
  validationSchema: NewSubscriptionSchema,
  handleSubmit: async (values, formikBag) => {
    const { apiClient } = formikBag.props;

    const result = await apiClient.send<Unit>(new SubscribeResource({ email: values.email, name: values.name }));
    match(
      result,
      () => {
        console.log("success");
        formikBag.resetForm({});
        formikBag.setSubmitting(false);
        return unit();
      },
      () => {
        console.log("error");
        return unit();
      }
    );
  },
})(Form);

export default Subscribe;
