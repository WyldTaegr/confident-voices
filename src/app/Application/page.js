import React from 'react';
import { API } from 'aws-amplify';
import * as queries from '@/graphql/queries';
import styles from '../../styles/baseApp.css';

export default function ApplicationPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href="/" className={styles.navItem}>Home</a>
          <a href="/community" className={styles.navItem}>Community</a>
          {/* Add additional navigation items here */}
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.content}>
          <h2>Exercise List</h2>
          {/* List items will go here */}
        </div>
      </main>
      <footer className={styles.footer}>
        {/* Footer content */}
      </footer>
    </div>
  );
}
