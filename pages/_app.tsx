import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

import Providers from '@/src/utils/Providers';

function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </Providers>
  );
}

export default App;
