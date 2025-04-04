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
		buttonStyles = ` absolute top-0 right-0 -translate-y-1/2 translate-x-[10%] ${styles.scissors}`;
	} else if (buttonId === "rock") {
		image = IconRock;
		id = "rock";
		buttonStyles = `absolute bottom-0 translate-y-1/2 translate-x-[55%] ${styles.rock}`;
	}

	return (
		<button
			id={id}
			type="button"
			className={`w-[12.5rem] h-[12.5rem] bg-red-100 rounded-full justify-items-center content-center ${buttonStyles}`}
		>
			<figure className="bg-white w-[9rem] h-[9rem] rounded-full grid place-items-center">
				<img src={image} alt={`Icon for ${id}`} className="w-full max-w-[4rem]" />
			</figure>
		</button>
	);
}
