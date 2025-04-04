import "./globals.css";
import Triangle from "./assets/bg-triangle.svg";
import CancelIcon from "./assets/icon-close.svg";
import Rules from "./assets/image-rules.svg";
import { useState } from "react";
import Button from "./components/Button";

function App() {
	const [play, setPlay] = useState<boolean>(false);

	const handleClick = (id: string) => {
		console.log(id);
		setPlay(true);
	};
	return (
		<main className="pt-12 justify-items-center content-center min-h-screen">
			<div className="w-full min-h-full">
				<section className="mx-auto relative max-w-[43.75rem] flex w-full items-center justify-between px-5 py-4 border-[3px] border-[var(--headerOutline)] rounded-[1rem] max-h-[9.375rem]">
					<img src="/logo.svg" alt="Logo" className="w-full max-w-[9.72rem]" />
					<div className="bg-white justify-items-center py-4 rounded-[0.5rem]">
						<p className="text-[var(--scoreText)] text-[0.875rem] tracking-wider">SCORE</p>
						<h1 className="text-[3rem] font-bold text-[var(--darkText)] px-10 leading-[1em]">12</h1>
					</div>
				</section>

				{!play && (
					<div className="min-h-[400px]">
						<section className="mx-auto relative w-full max-w-[26.75rem]  justify-items-center">
							<img
								src={Triangle}
								alt="Triangle background"
								className="w-full max-w-[17.94rem] mt-[10.125rem]"
							/>

							<Button paper handleClick={handleClick} />
							<Button scissor handleClick={handleClick} />
							<Button rock handleClick={handleClick} />
						</section>
					</div>
				)}

				{play && <Button />}
				<RulesModal />
			</div>
		</main>
	);
}

const RulesModal = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<p
				className="text-white absolute right-[2rem] bottom-[2rem] border-[1px] px-6 py-[8px] rounded-[8px] tracking-[0.2em] cursor-pointer"
				onClick={() => setShowModal(true)}
			>
				RULES
			</p>
			{showModal && (
				<div
					className="bg-black/50 fixed inset-0 justify-items-center content-center"
					onClick={(e) => {
						e.stopPropagation();
						setShowModal(false);
					}}
				>
					<article
						className="bg-white px-8 py-8 w-full max-w-[400px] rounded-xl justify-items-center"
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
						<header className="flex justify-between mb-10 w-full items-center">
							<h1 className="text-[32px] font-bold">RULES</h1>
							<button
								className="cursor-pointer"
								type="button"
								onClick={() => {
									setShowModal(false);
								}}
							>
								<img src={CancelIcon} alt="Cancel Icon" />
							</button>
						</header>
						<img src={Rules} alt="image of the rules" />
					</article>
				</div>
			)}
		</>
	);
};

export default App;
