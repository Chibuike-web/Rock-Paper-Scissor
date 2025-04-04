import PlayButton from "../components/PlayButton";
import Triangle from "../assets/bg-triangle.svg";

export default function PlaySection({ handleClick }: { handleClick: (value: string) => void }) {
	return (
		<div className="min-h-[400px]">
			<section className="mx-auto relative w-full max-w-[26.75rem]  justify-items-center">
				<img
					src={Triangle}
					alt="Triangle background"
					className="w-full max-w-[17.94rem] mt-[10.125rem]"
				/>

				<PlayButton paper handleClick={handleClick} />
				<PlayButton scissor handleClick={handleClick} />
				<PlayButton rock handleClick={handleClick} />
			</section>
		</div>
	);
}
