import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { exchangeCode } from './accessTokenExchange';
import { save } from './accessToken';
import { getLogoutUri } from './logout';
import { Unit, Result } from '@petriworks/common';

const LoginCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) {
      window.location.href = getLogoutUri();
      return;
    }

    exchangeCode(code, save).then((result: Result<Unit, string>) => {
      if (result.ok) {
        return navigate('/');
      }

      window.location.href = getLogoutUri();
    });
  }, [code, navigate]);

  return null;
};

export default LoginCallback;
