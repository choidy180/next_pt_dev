import type { AppProps } from 'next/app';
import GlobalStyle from '@src/styles/globalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { Navigation } from 'components/Navigation';
import { ThemeChangeBtn } from 'components/ThemeChangeBtn';

function MyApp({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RecoilRoot>
                    <GlobalStyle/>
                    <Navigation/>
                    <Component {...pageProps} />
                    <ThemeChangeBtn/>
                </RecoilRoot>
            </QueryClientProvider>
        </>
    )
}

export default MyApp
