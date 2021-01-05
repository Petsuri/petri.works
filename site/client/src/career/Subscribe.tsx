import React from "react";
import { withFormik, FormikProps, FormikErrors, FormikTouched, FormikBag } from "formik";
import { Grid } from "@material-ui/core";
import { ApiClient, SubscribeResource } from "@petriworks/api-client";
import { Name, Unit } from "@petriworks/common";
import { NewSubscriptionSchema, NewSubscriptionRequest } from "@petriworks/api-contracts";
import { useTranslation } from "react-i18next";
import { ParagraphContainer, StyledTextField } from "../styles/components";
import SubscribeButton from "./SubscribeButton";

type FormProps = {
  apiClient: ApiClient,
  subscribeSucceeded: () => void,
  subsribeError: () => void,
};

const isEmailValid = (
  errors: FormikErrors<NewSubscriptionRequest>
) => {
  return errors.email === undefined;
};

const isNameValid = (
  errors: FormikErrors<NewSubscriptionRequest>
) => {
  return errors.name === undefined;
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
              error={!isNameValid(errors)}
              id="name"
              value={values.name || ""}
              label={t("career.subscribe.name")}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={
                !isNameValid(errors) &&
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
              error={!isEmailValid(errors)}
              id="email"
              value={values.email || ""}
              label={t("career.subscribe.email")}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={!isEmailValid(errors) && t("career.subscribe.invalid_email")}
              fullWidth
            />
          </Grid>
        </Grid>
      </ParagraphContainer>
      <SubscribeButton isSubmitting={isSubmitting} onClick={submitForm} />
    </>
  );
};

const subsribeToPetriWorks = async (values: NewSubscriptionRequest, formikBag: FormikBag<FormProps, NewSubscriptionRequest>) => {
  const { apiClient, subscribeSucceeded, subsribeError } = formikBag.props;

  const result = await apiClient.send<Unit>(new SubscribeResource({ email: values.email, name: values.name }));
  if (result.ok) {
    subscribeSucceeded();
    formikBag.resetForm({});
  } else {
    subsribeError();
  }

  formikBag.setSubmitting(false);
}

const Subscribe = withFormik<FormProps, NewSubscriptionRequest>({
  validationSchema: NewSubscriptionSchema,
  handleSubmit: subsribeToPetriWorks,
  validateOnChange: true,
  validateOnBlur: false,
})(Form);

export default Subscribe;
