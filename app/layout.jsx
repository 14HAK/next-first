//

import './globals.css';
import Navbar from '@/components/navbar';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar></Navbar>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
