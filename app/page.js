import styles from './page.module.css';
import Dice from './dice.js';
import digits from './values.js';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: [ 'latin' ] });

function Home() {

  /**
   * Challenge:
   * 
   * Write a function (allNewDice) that returns an array 
   * of 10 random numbers between 1-6 inclusive.
   * 
   * Log the array of numbers to the console for now
   */

  function allNewDice() {
    const randomNumbers = [];
    for (let i = 0; i < 10; i++) {
      const randomNumber = Math.floor(Math.random() * 7);
      randomNumbers.push(randomNumber);
    }
    return randomNumbers;
  }
  // Usage: Generate an array of 10 random numbers between 1 and 6
  const dice = allNewDice();
  console.log(allNewDice());

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
            <p className={styles.btText}>
              Roll
            </p>
          </button>
        </div>
      </main>
    </section>
  );
}
export default Home;
