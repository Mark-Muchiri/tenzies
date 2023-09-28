import styles from './page.module.css';
import Dice from './dice.js';
import digits from './values.js';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: [ 'latin' ] });

function Home() {

  const numbers = digits.map((digit) => {
    return <Dice key={digit} value={digit} />;
  });

  return (
    <section className={inter.className}>
      <main className={styles.background}>
        <div className={styles.box}>
          <h2 className={styles.title}>Tenzies</h2>
          <p className={styles.subs}>
            Roll until all dice are the same.
            Click each die to freeze it at
            its current value between rolls.
          </p>
          <div className={styles.Dicegrid}>
            {numbers}
          </div>
          {/* This 👇 is a button */}
          <button className={styles.Roll}>
            <p className={styles.bttext}>
              Roll
            </p>
          </button>
        </div>
      </main>
    </section>
  );
}
export default Home;
