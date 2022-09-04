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
  --green-color: ${({ theme }) => (theme === 'light' ? '#3bb077' : '#3bb077')};
  --blue-color: ${({ theme }) => (theme === 'light' ? '#287bff' : '#287bff')};
  --pink-color: ${({ theme }) => (theme === 'light' ? '#FF0050' : '#FF0050')};
  --red-color: ${({ theme }) => (theme === 'light' ? '#a8325f' : '#a8325f')};
  --white-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#ccc')};

  /* transitions */
  --tran-02: all 0.2s ease;
  --tran-03: all 0.3s ease;
  --tran-04: all 0.4s ease;
  --tran-05: all 0.5s ease;

  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.75), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  --shadow-5: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
}

body {
  height: 100vh;
  background-color: var(--body-color);
  transition: var(tran-04);
}
`;

export default GlobalStyle;
