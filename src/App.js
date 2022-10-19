import { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeCtx } from './context/ThemeStore';
import { StateProvider } from './context/StateContext';
import { ThemeProvider } from 'styled-components';
import LightDarkSidebar from './components/LightDarkSidebar';
import GlobalStyle from './GlobalStyle';
import { LicenseInfo } from '@mui/x-data-grid-pro';

LicenseInfo.setLicenseKey(process.env.REACT_APP_MUI_LICENSE_KEY);

function App() {
  const { theme } = useContext(ThemeCtx);

  return (
    <ThemeProvider theme={{ theme }}>
      <StateProvider>
        <Router>
          <GlobalStyle theme={theme} />
          <LightDarkSidebar theme={theme} />
        </Router>
      </StateProvider>
    </ThemeProvider>
  );
}

export default App;
