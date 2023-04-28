import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import Providers from '@/src/utils/Providers';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ThemeProvider>
  );
}

export default App;
