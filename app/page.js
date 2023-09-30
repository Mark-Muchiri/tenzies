"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Dice from "./dice.js";

function Home() {
	/**
	 * Challenge:
	 *
	 * Create state to hold our array of numbers. (Initialize
	 * the state by calling our `allNewDice` function so it
	 * loads all new dice as soon as the app loads)
	 *
	 * Map over the state numbers array to generate our array
	 * of Die elements and render those in place of our
	 * manually-written 10 Die elements.
	 */

	// Initialize the component state with the initial dice values
	const [dice, setDice] = useState("" || []);

	// useEffect to handle client-side logic (executes after initial render)
	useEffect(() => {
		// This logic is only executed on the client side
		function allNewDice() {
			const newDice = [];
			for (let i = 0; i < 10; i++) {
				const randomNumber = Math.ceil(Math.random() * 6);
				newDice.push(randomNumber);
			}
			return newDice;
		}

		// Generate new random numbers for dice and update the state
		setDice(allNewDice());
	}, []); // Empty dependency array means this effect runs once after initial render

	// Map the dice values to Dice components
	const numbers = dice.map((digit, index) => {
		return <Dice key={index} value={digit} />;
	});

	return (
		<section>
			<main className={styles.background}>
				<div className={styles.box}>
					<h2 className={styles.title}>Tenzies</h2>
					<p className={styles.subs}>
						Roll until all dice are the same. Click each die to
						freeze it at its current value between rolls.
					</p>
					<div className={styles.Dicegrid}>{numbers}</div>
					<button className={styles.Roll}>
						<p className={styles.RollText}>Roll</p>
					</button>
				</div>
			</main>
		</section>
	);
}
export default Home;
