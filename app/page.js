"use client";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Dice from "./dice.js";

function Home() {
	// Initialize the component state with a the `allNewDice`
	const [dice, setDice] = useState(allNewDice());
	const [tenzies, setTenzies] = useState(false);
	/**
	 * Challenge: Tie off loose ends!
	 * 1. If tenzies is true, Change the button text to "New Game"
	 * 2. If tenzies is true, use the "react-confetti" package to
	 *    render the <Confetti /> component 🎉
	 *
	 *    Hint: don't worry about the `height` and `width` props
	 *    it mentions in the documentation.
	 */
	useEffect(() => {
		const allDiceHeld = dice.every((die) => die.isHeld);
		const sameValue = dice.every((die) => {
			return die.value === dice[0].value;
		});

		if (allDiceHeld && sameValue) {
			setTenzies(true);
			console.log("Congratulations! You won!");
		}
	}, [dice]);

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
					<button onClick={rollDice} className={styles.Roll}>
						<p className={styles.RollText}>
							{tenzies === true ? "New Game" : "Roll"}
						</p>
					</button>
				</div>
			</main>
		</section>
	);
}
export default Home;
