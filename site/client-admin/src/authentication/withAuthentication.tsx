import React, { useEffect, useState } from 'react';
import { CredentialsState, getCredentialsState } from './credentials';
import { Skeleton } from '@mui/material';

const withAuthentication = (Component: React.FC) => {
  return () => {
    const [credentialState, setCredentialState] = useState<CredentialsState>(
      CredentialsState.Undefined
    );

    useEffect(() => {
      setCredentialState(getCredentialsState());
    }, []);

    if (credentialState === CredentialsState.Undefined) {
      return <Skeleton animation="wave" variant="circular" width={40} height={40} />;
    }

    if (credentialState === CredentialsState.Missing) {
    }

    return <Component />;
  };
};

export default withAuthentication;