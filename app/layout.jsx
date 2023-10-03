//
import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav className='bg-slate-700 flex gap-2 uppercase p-5'>
          <Link
            href={'/'}
            className='text-slate-100 hover:text-red-500 hover:underline'
          >
            home
          </Link>
          <Link
            href={'/about'}
            prefetch={false} //[false, true]
            // prefetch={false}, means when click about page its fetch every time.
            className='text-slate-100 hover:text-red-500 hover:underline'
          >
            about
          </Link>
          <Link
            href={'/review'}
            className='text-slate-100 hover:text-red-500 hover:underline'
          >
            review
          </Link>
        </nav>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
