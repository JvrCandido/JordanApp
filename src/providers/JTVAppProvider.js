import React from 'react';
import { CartStoreProvider } from '../stores/JTVCartStore';

export const JTVAppProvider = ({ children }) => {
  return <CartStoreProvider>{children}</CartStoreProvider>;
};