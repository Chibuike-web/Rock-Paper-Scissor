import "./globals.css";
import { useState } from "react";
import Modal from "./components/Modal";
import PlaySection from "./components/PlaySection";
import GameSection from "./components/GameSection";

function App() {
	const [play, setPlay] = useState<boolean>(false);
	const [playerId, setPlayerId] = useState<string>("");
	const [computerId, setComputerId] = useState<string>("");

	const handleClick = (id: string) => {
		console.log(id);
		setPlay(true);
		setPlayerId(id);
		setComputerId("rock");
	};
	return (
		<main className="pt-12">
			<div className="w-full min-h-full">
				<section className="mx-auto relative max-w-[43.75rem] flex w-full items-center justify-between px-5 py-4 border-[3px] border-[var(--headerOutline)] rounded-[1rem] max-h-[9.375rem]">
					<img src="/logo.svg" alt="Logo" className="w-full max-w-[9.72rem]" />
					<div className="bg-white justify-items-center py-4 rounded-[0.5rem]">
						<p className="text-[var(--scoreText)] text-[0.875rem] tracking-wider">SCORE</p>
						<h1 className="text-[3rem] font-bold text-[var(--darkText)] px-10 leading-[1em]">12</h1>
					</div>
				</section>

				{!play && <PlaySection handleClick={handleClick} />}

				{play && <GameSection playerId={playerId} computerId={computerId} />}
				<Modal />
			</div>
		</main>
	);
}

export default App;
