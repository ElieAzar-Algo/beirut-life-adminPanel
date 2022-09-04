import { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeCtx } from './context/ThemeStore';
import { ProductProvider } from './context/ProductCtx';
import { ThemeProvider } from 'styled-components';
import LightDarkSidebar from './components/LightDarkSidebar';
import GlobalStyle from './GlobalStyle';

function App() {
  const { theme } = useContext(ThemeCtx);

  return (
    <ThemeProvider theme={{ theme }}>
      <ProductProvider>
        <Router>
          <GlobalStyle theme={theme} />
          <LightDarkSidebar theme={theme} />
        </Router>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
