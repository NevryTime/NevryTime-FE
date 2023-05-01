import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { RecoilRoot } from 'recoil';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

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
