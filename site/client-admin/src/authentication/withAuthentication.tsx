import React, { useEffect, useState } from 'react';
import { AccessTokenState, getAccessTokenState, isLoginRequired } from './accessToken';
import { getRedirectToLoginUri } from './login';
import { Skeleton } from '@mui/material';

const withAuthentication = (Component: React.FC) => {
  return () => {
    const [tokenState, setCredentialState] = useState<AccessTokenState>(
      AccessTokenState.Undefined
    );

    useEffect(() => {
      setCredentialState(getAccessTokenState());
    }, []);

    if (tokenState === AccessTokenState.Undefined) {
      return <Skeleton animation="wave" variant="circular" width={40} height={40} />;
    }

    if (isLoginRequired(tokenState)) {
      const loginUri = getRedirectToLoginUri();
      window.location.href = loginUri;
      return null;
    }

    return <Component />;
  };
};

export default withAuthentication;
