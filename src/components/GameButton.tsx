import styles from "../styles/Button.module.css";
import IconPaper from "../assets/icon-paper.svg";
import IconScissor from "../assets/icon-scissors.svg";
import IconRock from "../assets/icon-rock.svg";

type ButtonProps = {
	buttonId?: string;
};

export default function Button({ buttonId }: ButtonProps) {
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
		<button
			id={id}
			type="button"
			className={`w-[18.75rem] h-[18.5rem] bg-red-100 rounded-full justify-items-center content-center ${buttonStyles}`}
		>
			<figure className="bg-white w-[14rem] h-[14rem] rounded-full grid place-items-center">
				<img src={image} alt={`Icon for ${id}`} className="w-full max-w-[6rem]" />
			</figure>
		</button>
	);
}
