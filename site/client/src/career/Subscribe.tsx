import React from "react";
import { ApiClient } from "@petriworks/api-client";
import { useTranslation } from "react-i18next";
import SubscribeForm from "./SubscribeForm";
import { ErrorAlert, SuccessAlert } from "../styles/Alerts";

type SubscribeProps = {
  readonly apiClient: ApiClient;
};

const Container = (props: SubscribeProps) => {
  const { t } = useTranslation();
  const [isSuccessAlertOpen, setSuccessAlertOpen] = React.useState(false);
  const [isErrorAlertOpen, setErrorAlertOpen] = React.useState(false);
  const wasSubscriptionSuccessfull = (isSuccess: boolean): void => {
    setSuccessAlertOpen(isSuccess);
    setErrorAlertOpen(!isSuccess);
  };
  return (
    <>
      <SubscribeForm
        apiClient={props.apiClient}
        wasSubscriptionSuccessfull={wasSubscriptionSuccessfull}
      />
      <SuccessAlert
        message={t("career.subscribe.success")}
        isOpen={isSuccessAlertOpen}
        setOpen={setSuccessAlertOpen}
      />
      <ErrorAlert
        message={t("career.subscribe.error")}
        isOpen={isErrorAlertOpen}
        setOpen={setErrorAlertOpen}
      />
    </>
  );
};

export default Container;
