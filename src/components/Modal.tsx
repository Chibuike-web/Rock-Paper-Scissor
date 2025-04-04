import { useState } from "react";
import CancelIcon from "../assets/icon-close.svg";
import Rules from "../assets/image-rules.svg";

export default function Modal() {
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
}
