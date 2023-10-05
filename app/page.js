"use client";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Dice from "./dice.js";
import Confetti from "react-confetti";

function Home() {
	// Initialize the component state with a the `allNewDice`
	const [dice, setDice] = useState(allNewDice());
	const [tenzies, setTenzies] = useState(false);
	// Roll button styles.
	// (Needs to access `tenzies 1st for it to execute` )
	const RollButton = {
		buttonRoll: {
			position: "relative",
			display: "flex",
			justifyContent: "center",
			alignContent: "center",
			margin: "0 auto",
			width: "150px",
			height: "50px",
			borderRadius: "7px",
			background: "#5035FF",
			marginTop: "1rem",
			boxShadow: "0px 8px 15px 0px rgba(0, 0, 0, 0.372)",
		},
	};

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
		// Condition checks if tenzies is false.
		// If it's false the came continues, till it's true
		// If it's true it rendered the `else`
		if (tenzies === false) {
			// Generate new random numbers for dice and update the state
			// Also holds the the truthy for `isHeld`
			setDice((oldDice) =>
				oldDice.map((die) => {
					return die.isHeld ? die : generateNewDie();
				})
			);
		} else {
			setTenzies(false);
			setDice(allNewDice());
		}
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
		<main className={styles.background}>
			{tenzies === true ? <Confetti /> : <div></div>}
			<div className={styles.box}>
				<h2 className={styles.title}>Tenzies</h2>
				<p className={styles.subs}>
					Roll until all dice are the same. Click each die to freeze
					it at its current value between rolls.
				</p>
				<div className={styles.Dicegrid}>{numbers}</div>
				<button onClick={rollDice} style={RollButton.buttonRoll}>
					<p className={styles.RollText}>
						{tenzies === true ? "New Game" : "Roll"}
					</p>
				</button>
			</div>
		</main>
	);
}
export default Home;
