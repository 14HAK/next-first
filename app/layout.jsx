import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>[header]</header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
