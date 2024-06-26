import { Playfair_Display, Inria_Sans } from 'next/font/google'
import "./globals.css";
import Navigation from "./components/navbar";
import Footer from "./components/footer";
import FixedStreamer from './components/phoneStreamer';

const inria = Inria_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inria',
  weight: "400"
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: "variable",
  variable: '--font-playfair',
})

export const metadata = {
  title: {
      template: "%s | WILLUM.",
      default: "WILLUM. | Bygherrerådgivning & Styringsentreprise"
  },
  description: "Kontakt os hvis du har brug for rådgivning.",
  metadataBase: new URL('https://willum.netlify.app')
};

export default function RootLayout({ children }) {
  return (
    <html lang="da" className={`${playfair.variable} ${inria.variable} scroll-smooth`}>
      <body className='font-inria' >
        <FixedStreamer />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
