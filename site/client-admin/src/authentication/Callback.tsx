import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getPetriWorksUri } from '../environmentVariables';
import { exchangeCode } from './accessToken';
import { save } from './credentials';
import { Unit, Result } from '@petriworks/common';

const Callback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) {
      window.location.href = getPetriWorksUri();
      return;
    }

    exchangeCode(code, save).then((result: Result<Unit, string>) => {
      if (result.ok) {
        return navigate('/test');
      }

      console.log(result.error);
      window.location.href = getPetriWorksUri();
    });
  }, [code]);

  return null;
};

export default Callback;
