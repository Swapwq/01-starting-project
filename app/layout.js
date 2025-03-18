import LowerInfo from '@/components/low-info';
import './globals.css'
import { Navbar } from '@/components/nav-bar';
import Purchases from '@/components/purchases';

export const metadata = {
  title: 'свапвку шоп',
  description: 'Имбо шоп!!!!!!!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navbar />
        </header>
        <Purchases />
        {children}
        <LowerInfo />
        </body>
    </html>
  );
}
