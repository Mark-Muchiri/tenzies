// 'use client'
import styles from './page.module.css';

function Home() {
  /**
  * Challenge: Start a brand new React app!
  * - ✅ Create a separate App component
  * - ✅ Import and render the App component here
  * - ✅ In the App component, render a <main> element
  * - Style everything to look like the slide
  */
  return (
    <main className={styles.background}>
      <div className={styles.box}>
        <h2 className={styles.title}>Tenzies</h2>
      </div>
    </main>
  );
}
export default Home;