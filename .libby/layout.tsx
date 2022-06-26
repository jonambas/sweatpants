import React from 'react';
import { SweatpantsProvider } from '@sweatpants/theme';

export default function Layout({ children }: any) {
  return (
    <SweatpantsProvider
      theme={{
        borders: {
          test: '2px solid #cce3ff'
        }
      }}
    >
      {children}
    </SweatpantsProvider>
  );
}
