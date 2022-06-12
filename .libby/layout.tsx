import React from 'react';
import { SweatpantsProvider } from '@sweatpants/theme';

export default function Layout({ children }: any) {
  return <SweatpantsProvider>{children}</SweatpantsProvider>
}