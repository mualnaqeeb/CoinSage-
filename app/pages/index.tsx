// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/home.module.css';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cryptocurrency Portfolio Tracker</title>
        <meta name="description" content="Track and analyze your crypto investments with our Cryptocurrency Portfolio Tracker." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Your Cryptocurrency Portfolio Tracker
        </h1>

        <p className={styles.description}>
          In a world where cryptocurrency markets never sleep, staying updated with your investments can be overwhelming. Our Cryptocurrency Portfolio Tracker is designed to simplify this process, offering you a comprehensive overview of your investments at a glance.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>User Authentication &rarr;</h2>
            <p>Secure login to ensure your data is protected.</p>
          </div>

          <div className={styles.card}>
            <h2>Real-Time Data Integration &rarr;</h2>
            <p>Access the latest market data and trends.</p>
          </div>

          <div className={styles.card}>
            <h2>Portfolio Management &rarr;</h2>
            <p>Easily add, remove, and monitor your crypto investments.</p>
          </div>

          <div className={styles.card}>
            <h2>Performance Analysis &rarr;</h2>
            <p>Interactive charts and graphs to visualize your portfolio's growth and performance over time.</p>
          </div>
        </div>

        <section className={styles.section}>
          <h2>Anticipated Challenges & Our Approach</h2>
          <p>Efficient API call management to stay within rate limits, implementing data verification processes to ensure accuracy, and prioritizing user data security through encrypted authentication and secure API interactions.</p>
        </section>

        <section className={styles.section}>
          <h2>Enhancing User Experience</h2>
          <p>Our Cryptocurrency Portfolio Tracker stands to revolutionize the way individuals manage their crypto investments by providing a centralized platform for tracking and analysis, offering insights to make informed investment decisions, and enhancing user experience through intuitive design and real-time data.</p>
        </section>
      </main>
    </>
  );
};

export default HomePage;
