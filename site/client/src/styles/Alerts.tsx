import React, { Dispatch, SetStateAction } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export type AlertProps = {
  message: string,
  isOpen: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
}

type AlertSeverity = {
  severity: 'success' | 'info' | 'warning' | 'error',
}

type SnackbarProps = AlertSeverity & AlertProps;

export const SuccessAlert = (props: AlertProps) => {
  return CustomizedSnackbars({
    severity: "success",
    ...props,
  });
}

export const ErrorAlert = (props: AlertProps) => {
  return CustomizedSnackbars({
    severity: "error",
    ...props,
  });
}

function CustomizedSnackbars(props: SnackbarProps) {
  const classes = useStyles();
  const { isOpen, setOpen, message, severity } = props;

  return (
    <div className={classes.root}>
      <Snackbar open={isOpen} autoHideDuration={6000}>
        <MuiAlert elevation={6} variant="filled" onClose={() => setOpen(false)} severity={severity}>
          {message}
        </MuiAlert>
      </Snackbar>
    </div >
  );
}
