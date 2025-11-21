import './globals.css';

import { DM_Sans, Sora, Wix_Madefor_Display, Inter, Roboto } from 'next/font/google';

import { cn } from '@/utils/classNames';
import { ReactQueryProvider } from '@/lib/reactQuery';



const fontSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: false,
  fallback: [
    'DM_Sans',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Noto Color Emoji',
  ],
});

const fontHeading = Sora({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  adjustFontFallback: false,
  fallback: [
    'Sora',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Noto Color Emoji',
  ],
});

const fontWixDisplay = Wix_Madefor_Display({
  subsets: ['latin'],
  variable: '--font-wix-display',
  display: 'swap',
  adjustFontFallback: false,
  fallback: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Noto Color Emoji',
  ],
});


const fontRoboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700'], 
  display: 'swap',
});

const fontInter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});


export const metadata = {
  title: 'Frontend Developer Portfolio',
  description:
    'Portfolio showcasing frontend development projects and skills',
  // verification: {
  //   google: 'LVQp31oO5gKpCoGlSMnsa6o-5xsVvQ9fn4WCy85OMGI',
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        <link href="/favicon.ico" rel="icon" sizes="any" />
      </head>
      <body
        suppressHydrationWarning
        className={cn(
          'min-h-screen h-full  overflow-auto font-sans antialiased',
          fontSans.variable,
          fontHeading.variable,
          fontWixDisplay.variable,
          //fontClash.variable
          fontInter.variable,
          fontRoboto.variable
        )}
      >


        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>

      </body>
    </html>
  );
}
