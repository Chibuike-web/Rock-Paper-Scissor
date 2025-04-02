import "./globals.css";
import Triangle from "./assets/bg-triangle.svg";
import IconPaper from "./assets/icon-paper.svg";
import IconScissor from "./assets/icon-scissors.svg";
import IconLizard from "./assets/icon-lizard.svg";
import IconRock from "./assets/icon-rock.svg";

import styles from "./styles/Paper.module.css";

function App() {
	return (
		<main className="pt-12">
			<section className="mx-auto max-w-[43.75rem] flex w-full items-center justify-between px-5 py-4 border-[3px] border-[var(--headerOutline)] rounded-[1rem] max-h-[9.375rem]">
				<img src="/logo.svg" alt="Logo" className="w-full max-w-[9.72rem]" />
				<div className="bg-white justify-items-center py-4 rounded-[0.5rem]">
					<p className="text-[var(--scoreText)] text-[0.875rem] tracking-wider">SCORE</p>
					<h1 className="text-[3rem] font-bold text-[var(--darkText)] px-10 leading-[1em]">12</h1>
				</div>
			</section>

			<section className="mx-auto relative w-full max-w-[26.75rem] justify-items-center">
				<img
					src={Triangle}
					alt="Triangle background"
					className="w-full max-w-[17.94rem] mt-[10.125rem]"
				/>
				<button
					type="button"
					className={`absolute top-0 left-0 -translate-y-1/2 -translate-x-[10%] w-[12.5rem] h-[12.5rem] bg-red-100 rounded-full justify-items-center content-center ${styles.paper}`}
				>
					<figure className="bg-white w-[9rem] h-[9rem] rounded-full justify-items-center content-center">
						<img src={IconPaper} alt="Icon for Paper" className="w-full max-w-[4rem]" />{" "}
					</figure>
				</button>
				<button
					type="button"
					className={`absolute top-0 right-0 -translate-y-1/2 translate-x-[10%] w-[12.5rem] h-[12.5rem] bg-red-100 rounded-full justify-items-center content-center ${styles.scissors}`}
				>
					<figure className="bg-white w-[9rem] h-[9rem] rounded-full justify-items-center content-center">
						<img src={IconScissor} alt="Icon for Scissor" className="w-full max-w-[4rem]" />{" "}
					</figure>
				</button>
				<button
					type="button"
					className={`absolute bottom-0 translate-y-1/2 translate-x-[55%] w-[12.5rem] h-[12.5rem] rounded-full justify-items-center content-center ${styles.rock}`}
				>
					<figure className="bg-white w-[9rem] h-[9rem] rounded-full justify-items-center content-center">
						<img src={IconRock} alt="Icon for Rock" className="w-full max-w-[4rem]" />{" "}
					</figure>
				</button>
			</section>
		</main>
	);
}

export default App;
