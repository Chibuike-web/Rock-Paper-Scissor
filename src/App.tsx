import "./globals.css";

function App() {
	return (
		<main className="pt-12">
			<section className="mx-auto max-w-[700px] flex w-full items-center justify-between px-5 py-4 border-[3px] border-[var(--headerOutline)] rounded-[16px] max-h-[150px]">
				<img src="/logo.svg" alt="Logo" className="w-full max-w-[155.48px]" />
				<div className="bg-white justify-items-center py-4 rounded-[8px]">
					<p className="text-[var(--scoreText)] text-[14px] tracking-wider">SCORE</p>
					<h1 className="text-[48px] font-bold text-[var(--darkText)] px-10 leading-[1em]">12</h1>
				</div>
			</section>

			<section></section>
		</main>
	);
}

export default App;
