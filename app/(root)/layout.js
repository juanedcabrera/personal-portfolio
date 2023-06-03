import React from 'react';
import '../../styles/globals.css'

export const metadata = {
  title: 'Juan Cabrera, Software Engineer',
  description: 'Juan Cabrera is a Software Engineer',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
