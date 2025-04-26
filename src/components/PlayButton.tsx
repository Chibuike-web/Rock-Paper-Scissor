import styles from "../styles/Button.module.css";
import IconPaper from "../assets/icon-paper.svg";
import IconScissor from "../assets/icon-scissors.svg";
import IconRock from "../assets/icon-rock.svg";

type ButtonProps = {
	buttonId?: string;
	handleClick?: (value: string) => void;
	paper?: boolean;
	rock?: boolean;
	scissor?: boolean;
};

export default function Button({ handleClick, paper, rock, scissor }: ButtonProps) {
	let image, id, positionClass;

	if (paper) {
		image = IconPaper;
		id = "paper";
		positionClass = `absolute top-0 left-0 -translate-y-1/2 -translate-x-[10%] ${styles.paper}`;
	} else if (scissor) {
		image = IconScissor;
		id = "scissor";
		positionClass = ` absolute top-0 right-0 -translate-y-1/2 translate-x-[10%] ${styles.scissors}`;
	} else if (rock) {
		image = IconRock;
		id = "rock";
		positionClass = `absolute bottom-0 translate-y-1/2 translate-x-[70%] ${styles.rock}`;
	}

	return (
		<button
			id={id}
			type="button"
			className={`w-[8rem] h-[8rem] md:w-[12.5rem] md:h-[12.5rem] bg-red-100 rounded-full justify-items-center content-center cursor-pointer ${positionClass}`}
			onClick={(e) => handleClick && handleClick(e.currentTarget.id)}
		>
			<figure className="bg-white w-[6rem] h-[6rem] md:w-[9rem] md:h-[9rem] rounded-full grid place-items-center">
				<img src={image} alt={`Icon for ${id}`} className="w-full max-w-[3rem] md:max-w-[4rem] " />
			</figure>
		</button>
	);
}
