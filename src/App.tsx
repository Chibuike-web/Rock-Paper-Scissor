import "./globals.css";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import PlaySection from "./components/PlaySection";
import GameSection from "./components/GameSection";

function App() {
	const [play, setPlay] = useState<boolean>(false);
	const [playerId, setPlayerId] = useState<string>("");
	const [computerId, setComputerId] = useState<string>("");
	const [result, setResult] = useState<string>("");
	const [points, setPoints] = useState<number>(0);
	const choice = ["paper", "scissor", "rock"];
	const randomChoice = Math.floor(Math.random() * 3);

	useEffect(() => {
		if (!playerId || !computerId) return;

		const timer = setTimeout(() => {
			let newResult = "";
			if (playerId === computerId) {
				newResult = "DRAW";
			} else if (
				(playerId === "rock" && computerId === "scissor") ||
				(playerId === "scissor" && computerId === "paper") ||
				(playerId === "paper" && computerId === "rock")
			) {
				newResult = "YOU WIN";
			} else {
				newResult = "YOU LOSE";
			}

			setResult(newResult);
			if (newResult === "YOU WIN") {
				setPoints((prev) => +prev + 1);
			} else if (newResult === "YOU LOSE") {
				setPoints((prev) => prev - 1);
			} else {
				setPoints((prev) => prev);
			}
		}, 1000);

		return () => clearTimeout(timer);
	}, [playerId, computerId]);

	const computerPlayer = () => {
		setTimeout(() => {
			setComputerId(choice[randomChoice]);
		}, 1000);
	};

	const handleClick = (id: string) => {
		console.log(id);
		setPlay(true);
		setPlayerId(id);
		computerPlayer();
	};

	const playAgain = () => {
		setPlay(false);
		setPlayerId("");
		setComputerId("");
		setResult("");
	};
	return (
		<main className="pt-12">
			<div className="w-full min-h-full px-6">
				<section className="md:mx-auto relative md:max-w-[43.75rem]  flex w-full items-center justify-between px-3 md:px-5 py-4 border-[3px] border-[var(--headerOutline)] rounded-[10px] md:rounded-[1rem] max-h-[6rem] md:max-h-[9.375rem] ">
					<img src="/logo.svg" alt="Logo" className="w-full md:max-w-[9.72rem] max-w-[6rem]" />
					<div className="bg-white justify-items-center py-[0.5rem] md:py-4 rounded-[4px] md:rounded-[0.5rem] w-full max-w-[80px] h-full md:max-w-[120px]">
						<p className="text-[var(--scoreText)] text-[0.875rem] tracking-wider">SCORE</p>
						<h1 className="text-[2rem] md:text-[3rem] font-bold text-[var(--darkText)] px-10 leading-[1em]">
							{points}
						</h1>
					</div>
				</section>

				{!play && <PlaySection handleClick={handleClick} />}

				{play && (
					<GameSection
						playerId={playerId}
						computerId={computerId}
						result={result}
						playAgain={playAgain}
					/>
				)}
				<Modal />
			</div>
		</main>
	);
}

export default App;
