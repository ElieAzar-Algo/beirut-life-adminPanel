import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', Open-Sans, Helvetica, Sans-Serif;
  }

  :root {
  --body-color: ${({ theme }) => (theme === 'light' ? '#E4E9F7' : '#18191a')};
  --sidebar-color: ${({ theme }) => (theme === 'light' ? '#FFF' : '#242526')};
  --primary-color: ${({ theme }) =>
    theme === 'light' ? '#695CFE' : '#3a3b3c'};
  --primary-color-light: ${({ theme }) =>
    theme === 'light' ? '#F6F5FF' : '#3a3b3c'};
  --toggle-color: ${({ theme }) => (theme === 'light' ? '#DDD' : '#fff')};
  --text-color: ${({ theme }) => (theme === 'light' ? '#707070' : '#ccc')};
  --blue: #287bff;
  --white: #fff;
  --grey: #f5f5f5;
  --black1: #222;
  --black2: #999;

  /* transitions */
  --tran-02: all 0.2s ease;
  --tran-03: all 0.3s ease;
  --tran-04: all 0.4s ease;
  --tran-05: all 0.5s ease;
}

body {
  height: 100vh;
  background-color: var(--body-color);
  transition: var(tran-04);
}
`;

export default GlobalStyle;
