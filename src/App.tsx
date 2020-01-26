import React from 'react';
import theme from './theme';
import ContextState from './store/Context';
import { ThemeProvider } from '@material-ui/core/styles';


export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <ContextState />
    </ThemeProvider>
  );
}
