"use client";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Dice from "./dice.js";

function Home() {
	// Initialize the component state with a the `allNewDice`
	const [ dice, setDice ] = useState(allNewDice());

	function generateNewDie() {
		return {
			id: nanoid(),
			value: Math.ceil(Math.random() * 6),
			isHeld: false,
		};
	}

	// This logic is only executed on the client side
	function allNewDice() {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push(generateNewDie());
		}
		return newDice;
	}

	function holdDice(id) {
		setDice((prevDice) =>
			prevDice.map((box) =>
				box.id === id ? { ...box, isHeld: !box.isHeld } : box
			)
		);
	}

	/**
	 * Challenge: Update the `rollDice` function to not just roll
	 * all new dice, but instead to look through the existing dice
	 * to NOT role any that are being `held`.
	 *
	 * Hint: this will look relatively similiar to the `holdDice`
	 * function below. When creating new dice, remember to use
	 * `id: nanoid()` so any new dice have an `id` as well.
	 */
	// Roll dice button click function
	function rollDice() {
		// Generate new random numbers for dice and update the state
		// Also holds the the truthy for `isHeld`
		setDice((oldDice) =>
			oldDice.map((die) => {
				return die.isHeld ? die : generateNewDie();
			})
		);
	}

	// Map the dice values to Dice components
	const numbers = dice.map((digit, index) => {
		return (
			<Dice
				key={index}
				value={digit.value}
				isHeld={digit.isHeld}
				toggle={() => holdDice(digit.id)}
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
					<button
						onClick={rollDice}
						className={styles.Roll}
					>
						<p className={styles.RollText}>Roll</p>
					</button>
				</div>
			</main>
		</section>
	);
}
export default Home;
