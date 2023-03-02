import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'mindshift',
  description: 'mindshift depression symptom tracker',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>mindshift</h1>

        {children}
        <footer>mindshift depression tracker</footer>
      </body>
    </html>
  );
}
