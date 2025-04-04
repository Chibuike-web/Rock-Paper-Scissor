import GameButton from "../components/GameButton";

export default function GameSection({
	playerId,
	computerId,
}: {
	playerId: string;
	computerId: string;
}) {
	return (
		<section className="justify-items-center py-[88px]">
			<div className="text-white flex items-center gap-[76px]">
				<div className="flex flex-col items-center gap-[64px]">
					<p className="tracking-[0.2em] text-[20px]">YOU PICKED</p>
					<GameButton buttonId={playerId} />
				</div>
				<div className="justify-items-center">
					<h1 className="text-[48px] mb-[8px]">YOU WIN</h1>
					<button
						type="button"
						className="text-[var(--darkText)] bg-white tracking-[0.2em] px-10 py-3 rounded-[6px] cursor-pointer hover:text-[hsl(349,71%,52%)]"
					>
						PLAY AGAIN
					</button>
				</div>
				<div className="flex flex-col items-center gap-[64px]">
					<p className="tracking-[0.2em] text-[20px]">YOU PICKED</p>
					<GameButton buttonId={computerId} />
				</div>
			</div>
		</section>
	);
}
