import React from 'react';
import { GlobalStyle } from './styles/globalStyles';
import Home from './Views/Home';
import ThemeProvider from './context/ThemeProvider';

function App() {
  return (
    <>
      <ThemeProvider>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default App;
