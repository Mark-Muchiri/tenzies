"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Dice from "./dice.js";

function Home() {
	/**
	 * Challenge: Create a `Roll Dice` button that will re-roll
	 * all 10 dice
	 *
	 * Clicking the button should generate a new array of numbers
	 * and set the `dice` state to that new array (thus re-rendering
	 * the array to the page)
	 */

	// Initialize the component state with a the `allNewDice`
	const [dice, setDice] = useState(allNewDice());

	// This logic is only executed on the client side
	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			const randomNumber = Math.ceil(Math.random() * 6);
			newDice.push(randomNumber);
		}
		return newDice;
	}

	function rollDice() {
		// Generate new random numbers for dice and update the state
		setDice(allNewDice());
	}

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
					<button className={styles.Roll} onClick={rollDice}>
						<p className={styles.RollText}>Roll</p>
					</button>
				</div>
			</main>
		</section>
	);
}
export default Home;
