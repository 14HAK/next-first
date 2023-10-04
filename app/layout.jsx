//

import './globals.css';
import Navbar from '@/components/navbar';

//by default:
// export const metadata = {
//   title: 'websiteName',
// };

// metadata title template:
export const metadata = {
  title: {
    default: 'website-name',
    template: `%s | website-name`,
  },
};

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
