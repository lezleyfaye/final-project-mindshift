import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Track your symptoms, take control of depression</h2>
      <p>
        mindshift is an easy to use depression symptom tracker. Symptom graphs
        can help you take control before a depressive episode strikes.
      </p>
      <Link href="login">Login</Link>
      <Link href="register">Register</Link>
      <span>
        mindshift is not meant to diagnose or treat any medical conditions on
        its own. Use is at your own risk.
      </span>
    </main>
  );
}
