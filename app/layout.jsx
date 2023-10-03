export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <p>first page only layout</p>
        {children}
      </body>
    </html>
  );
}
