import React from "react";
import { withTheme } from "@material-ui/core";
import { StyledButton } from "../styles/components";
import { styled } from "@material-ui/core/styles";

import { useTranslation } from "react-i18next";

const Div = styled("div")({});

const FullWidthDiv = styled(withTheme(Div))((props) => ({
  display: "flex",
  justifyContent: "center",
  [props.theme.breakpoints.down("xs")]: {
    justifyContent: "left",
  },
}));

type SubscribeButtonProps = {
  isSubmitting: boolean;
  onClick: Function;
};

const SubscribeButton = (props: SubscribeButtonProps) => {
  const { t } = useTranslation();

  return (
    <FullWidthDiv>
      <StyledButton
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
