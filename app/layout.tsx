import { Nunito } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import { Providers } from '@/shared/components/shared/providers';

const nunito = Nunito({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
