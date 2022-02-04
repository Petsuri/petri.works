import React from 'react';
import { OuterLink } from '../components';
import { getLogoutUri } from './logout';
import { clear } from './accessToken';

export default function LogoutLink() {
  return <OuterLink href={getLogoutUri()} onclick={clear} text="Logout" />;
}
