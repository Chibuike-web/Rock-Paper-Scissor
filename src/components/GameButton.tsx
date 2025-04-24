import styles from "../styles/Button.module.css";
import IconPaper from "../assets/icon-paper.svg";
import IconScissor from "../assets/icon-scissors.svg";
import IconRock from "../assets/icon-rock.svg";
import { motion } from "motion/react";

type ButtonProps = {
	buttonId?: string;
	result?: string;
};

export default function Button({ buttonId, result }: ButtonProps) {
	let image, id, buttonStyles;

	if (buttonId === "paper") {
		image = IconPaper;
		id = "paper";
		buttonStyles = `${styles.paper}`;
	} else if (buttonId === "scissor") {
		image = IconScissor;
		id = "scissors";
		buttonStyles = `${styles.scissors}`;
	} else if (buttonId === "rock") {
		image = IconRock;
		id = "rock";
		buttonStyles = `${styles.rock}`;
	}

	return (
		<div className="relative">
			<div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<motion.button
				layout
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				id={id}
				type="button"
				className={`w-[18.75rem] h-[18.75rem] bg-red-100 rounded-full justify-items-center content-center ${buttonStyles}`}
			>
				<figure className="bg-white w-[14rem] h-[14rem] rounded-full grid place-items-center">
					<img src={image} alt={`Icon for ${id}`} className="w-full max-w-[6rem]" />
				</figure>
			</motion.button>
		</div>
	);
}
