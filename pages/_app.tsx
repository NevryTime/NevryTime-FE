import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { RecoilRoot } from 'recoil';

import Providers from '@/src/utils/Providers';

function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Providers>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </Providers>
    </RecoilRoot>
  );
}

export default App;
