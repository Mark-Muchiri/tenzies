"use client";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Dice from "./dice.js";

function Home({ initialValue }) {
	/**
	 * Challenge: Add conditional styling to the Die component
	 * so that if it's held (isHeld === true), its background color
	 * changes to a light green (#59E391)
	 *
	 * Remember: currently the Die component has no way of knowing
	 * if it's "held" or not.
	 */

	// Initialize the component state with a the `allNewDice`
	const [ dice, setDice ] = useState(initialDice() || initialValue);
	// This logic is used to  provide initial load values of the dice
	function initialDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			const randomNumber = Math.ceil(Math.random() * 6);
			newDice.push({
				id: nanoid,
				value: randomNumber,
				isHeld: false,
			});
		}
		return newDice;
	}

	// This logic is only executed on the client side
	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			const randomNumber = Math.ceil(Math.random() * 6);
			newDice.push({
				id: nanoid(),
				value: randomNumber,
				isHeld: false,
			});
		}
		return newDice;
	}

	// Roll dice button click function
	function rollDice() {
		// Generate new random numbers for dice and update the state
		setDice(allNewDice());
	}

	// Map the dice values to Dice components
	const numbers = dice.map((digit, index) => {
		return (
			<Dice
				key={index}
				value={digit.value}
				isHeld={digit.isHeld}
			/>
		);
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
