"use client"
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
        <body>
          {children}
        </body>
    </html>
  );
}
