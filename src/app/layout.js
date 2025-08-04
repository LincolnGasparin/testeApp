
import "./globals.css";
import { Header } from "./components/header.js";
import { Dashboard } from "./dashboard/page.js";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      > 
        {children}
      </body>
    </html>
  );
}
