import type { Metadata } from 'next';

import { CssBaseline } from '@mui/material';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { Footer, lightTheme } from '@/libs/ui';

export const metadata: Metadata = {
  title: 'Design ITUS',
  description: 'Academic Design Club at ITUS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Stack marginTop={{ xs: '3rem', md: '4rem' }}>
              {children}
              <Footer />
            </Stack>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
