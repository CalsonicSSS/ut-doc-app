import type { Metadata } from 'next';
import './globals.css';
import { Open_Sans, Roboto, Karla, Urbanist, Lato } from 'next/font/google';
import { assetPathMode } from '@/utils';

// Import the next.js own fonts packages and setup font configuration
// next/font module provides built-in performance and optimization features
// it Downloads font files at build time
// host fonts locally
// create CSS variables for each font, and Connects Next.js font variables to Tailwind
// these are just the font setup using next/font module, but it doesn't automatically make it available throughout next.js app
const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'], // Add all weights
  subsets: ['latin'],
  style: ['normal', 'italic'], // Add italic if needed
  display: 'swap',
  variable: '--font-open-sans',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '100', '700', '900'], // Add all weights
  subsets: ['latin'],
  style: ['normal', 'italic'], // Add italic if needed
  display: 'swap',
  variable: '--font-roboto',
});

const karla = Karla({
  weight: ['300', '400', '500', '600', '700', '800'], // Add all weights
  subsets: ['latin'],
  style: ['normal', 'italic'], // Add italic if needed
  display: 'swap',
  variable: '--font-karla',
});

const urbanist = Urbanist({
  weight: ['300', '400', '500', '600', '700', '900'], // Add all weights
  subsets: ['latin'],
  style: ['normal', 'italic'], // Add italic if needed
  display: 'swap',
  variable: '--font-urbanist',
});

const lato = Lato({
  weight: ['300', '400', '700', '900'], // Add all weights
  subsets: ['latin'],
  style: ['normal', 'italic'], // Add italic if needed
  display: 'swap',
  variable: '--font-lato',
});

export const metadata: Metadata = {
  title: 'UNITE Toolkit',
  description: 'Cleverlylab Unite Toolkit Documentation',
  icons: {
    icon: [{ rel: 'icon', url: `${assetPathMode === 'PROD' ? '/unite-toolkit' : ''}/cleverlylab_favicon.png`, sizes: '32x32', type: 'image/png' }],
  },
};

// A CSS custom variable is used to store a reusable styles value
// These variables are defined with a -- prefix and follows with Hyphen-separated words
// these variables can be accessed using the var() function in the css file.
// from many notes, you should realize that all the css variables declaration are all under selectors as well

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      {/* This line actually applies these CSS variables to your document's body element. Like: <body class="__variable_open_sans"> */}
      {/* behind the scene, next.js creates: 
      .__variable_open_sans {
        --font-open-sans: 'Open Sans', ...;
      }*/}
      {/* this class "__variable_open_sans" and its variables can cascade down from where they're defined */}
      {/* Any child element can access variables defined on a parent (The body tag is the parent of all visible elements) */}
      {/* When these variables are on the body tag, they become available to all elements in your application. This is why Tailwind can then use them in its configuration: */}
      <body className={`${karla.variable} ${openSans.variable} ${roboto.variable} ${lato.variable} ${urbanist.variable} antialiased`}>{children}</body>
    </html>
  );
}
