import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import Landingpage from './landingpage'
import DashboardUser from './dashboarduser';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>final pitch</title>
        <meta name="meaning of words" content="Dictionary app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Landingpage /> */}
      <DashboardUser />
    </div>
  );
}
