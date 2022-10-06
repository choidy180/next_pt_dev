import type { AppProps } from 'next/app';
import GlobalStyle from '@src/styles/globalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { Navigation } from 'components/Navigation';

function MyApp({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RecoilRoot>
                    <GlobalStyle/>
                    <Navigation/>
                    <Component {...pageProps} />
                </RecoilRoot>
            </QueryClientProvider>
        </>
    )
}

export default MyApp
