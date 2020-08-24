import React from 'react';

import AuthContextProvider from './App/contexts/AuthContextProvider';
import App from './App/index';
import ThemeContextProvider from './App/contexts/ThemeContextProvider';

export default () => {
  return (
    <ThemeContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </ThemeContextProvider>
  )
}
