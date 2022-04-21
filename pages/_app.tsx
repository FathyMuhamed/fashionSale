import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store';
import Navbar from '../components/Navbar';
import { GlobalStyles } from './../styles';
import { Container } from './../styles/globelStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SHOP</title>
      </Head>
      <GlobalStyles />
      <Provider store={store}>
        <Container>
          <Navbar />
          <Component {...pageProps} />
        </Container>
      </Provider>
    </>
  );
}

export default MyApp;
