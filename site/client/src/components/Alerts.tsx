import React, { Dispatch, SetStateAction } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from '@mui/material/Alert';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export type AlertProps = {
  readonly message: string;
  readonly isOpen: boolean;
  readonly setOpen: Dispatch<SetStateAction<boolean>>;
};

type AlertSeverity = {
  readonly severity: "success" | "info" | "warning" | "error";
};

type SnackbarProps = AlertSeverity & AlertProps;

export const SuccessAlert = (props: AlertProps) => {
  return CustomizedSnackbars({
    severity: "success",
    ...props,
  });
};

export const ErrorAlert = (props: AlertProps) => {
  return CustomizedSnackbars({
    severity: "error",
    ...props,
  });
};

function CustomizedSnackbars(props: SnackbarProps) {
  const classes = useStyles();
  const { isOpen, setOpen, message, severity } = props;

  const close = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={() => close()}>
        <MuiAlert elevation={6} variant="filled" onClose={() => close()} severity={severity}>
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
}
