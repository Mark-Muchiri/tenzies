"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Dice from "./dice.js";

function Home({ initialValue }) {
	/**
	 * Challenge: Update the array of numbers in state to be
	 * an array of objects instead. Each object should look like:
	 * { value: <random number>, isHeld: false }
	 *
	 * Making this change will break parts of our code, so make
	 * sure to update things so we're back to a working state
	 */

	// Initialize the component state with a the `allNewDice`
	const [dice, setDice] = useState(initialDice() || initialValue);

	// This logic is used to  provide initial load values of the dice
	function initialDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			const randomNumber = Math.ceil(Math.random() * 6);
			newDice.push({ value: randomNumber, isHeld: false });
		}
		return newDice;
	}

	// This logic is only executed on the client side
	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			const randomNumber = Math.ceil(Math.random() * 6);
			newDice.push({ value: randomNumber, isHeld: false });
		}
		console.log(newDice);
		return newDice;
	}

	function rollDice() {
		// Generate new random numbers for dice and update the state
		setDice(allNewDice());
	}

	// Map the dice values to Dice components
	const numbers = dice.map((digit, index) => {
		return <Dice key={index} value={digit.value} />;
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
