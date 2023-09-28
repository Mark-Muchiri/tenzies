import styles from './page.module.css';
import Dice from './dice.js';
import digits from './values.js';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: [ 'latin' ] });

function Home() {
  /**
   * Challenge:
   * 
   * - Create a Die component that takes a `value` prop
   * - Render 10 instances of the Die component (manually)
   *      - Provide a number between 1-6 for the value on each
   *        for now
   * - Style the <main> and <Die> components 
   *   to look like they do in the slide
   *      - Hints: Create a container to hold the 10 instances
   *        of the Die component, and use CSS Grid to lay them
   *        out evenly in 2 rows of 5 columns
   *      - Use flexbox on main to center the dice container
   *        in the center of the page
   */
  // console.log("digits " + digits)
  const numbers = digits.map((digit) => {
    return <Dice key={digit} value={digit} />;
  });

  return (
    <section className={inter.className}>
      <main className={styles.background}>
        <div className={styles.box}>
          <h2 className={styles.title}>Tenzies</h2>
          <p className={styles.subs}>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className={styles.Dicegrid}>
            {numbers}
          </div>
          {/* This 👇 is a button */}
          <button className={styles.Roll}><p className={styles.bttext}>Roll</p></button>
        </div>
      </main>
    </section>
  );
}
export default Home;
