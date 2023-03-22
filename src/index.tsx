import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import App from 'App';
import { Provider } from 'react-redux';
import { store, persistor } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
const theme = {
  colors: {
    dark: '#455266',
    white: '#fff',
    primary: '#F5F8FA',
    secondary: '#EEEEEE',
  },
};

const Global = createGlobalStyle`
html, body {
   background: #DEE5EB;
   font-family: 'Montserrat', sans-serif;
   font-weight: 400;
   font-size: 18px;
}

*,
*::after,
*::before {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeProvider theme={theme}>
        <Global />
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>,
  // </React.StrictMode>,
);
