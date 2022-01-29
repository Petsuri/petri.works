import React from "react";
import withTheme from '@mui/styles/withTheme';
import { StyledButton } from "../components";
import { styled } from "@mui/material/styles";

import { useTranslation } from "react-i18next";

const Div = styled("div")({});

const FullWidthDiv = styled("div")((props) => ({
  display: "flex",
  justifyContent: "center",
  [props.theme.breakpoints.down('sm')]: {
    justifyContent: "flex-start",
  },
}));

type SubscribeButtonProps = {
  readonly isSubmitting: boolean;
  readonly onClick: Function;
};

const SubscribeButton = (props: SubscribeButtonProps) => {
  const { t } = useTranslation();

  return (
    <FullWidthDiv>
      <StyledButton
        data-testid="subscribe-button-submit"
        color="primary"
        variant="outlined"
        disabled={props.isSubmitting}
        onClick={() => props.onClick()}
      >
        {t("career.subscribe.subscribe")}
      </StyledButton>
    </FullWidthDiv>
  );
};

export default SubscribeButton;
