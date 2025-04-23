import GameButton from "../components/GameButton";
import { motion } from "motion/react";

type GameSectionProps = {
	playerId: string;
	computerId: string;
	result: string;
	playAgain: () => void;
};

export default function GameSection({ playerId, computerId, result, playAgain }: GameSectionProps) {
	return (
		<section className="justify-items-center py-[104px]">
			<div className="text-white flex items-center gap-[76px]">
				<div className="flex flex-col items-center gap-[64px] relative">
					<p className="tracking-[0.2em] text-[20px]">YOU PICKED</p>
					<GameButton buttonId={playerId} />
				</div>
				{result && (
					<motion.div
						className="justify-items-center"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-[48px] mb-[8px]">{result}</h1>
						<button
							type="button"
							className="text-[var(--darkText)] bg-white tracking-[0.2em] px-10 py-3 rounded-[6px] cursor-pointer hover:text-[hsl(349,71%,52%)]"
							onClick={() => playAgain()}
						>
							PLAY AGAIN
						</button>
					</motion.div>
				)}

				<div className="flex flex-col items-center gap-[64px] relative">
					<p className="tracking-[0.2em] text-[20px]">THE HOUSE PICKED</p>
					{computerId ? (
						<GameButton buttonId={computerId} />
					) : (
						<div className="w-[18.75rem] h-[18.75rem] justify-items-center content-center">
							<div className="w-[16rem] h-[16rem] bg-black/10 rounded-full"></div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
