export default function FemComponent() {
	async function getAdvice() {
		try {
			const response = await fetch("https://api.adviceslip.com/advice");
			const adviceData = await response.json();
			if (!response.ok) {
				throw new Error("Network did not respond with 200");
			}

			displayAdvice(adviceData);
		} catch (error) {
			console.error("Error fetching data from API", error);
		}
	}

	function displayAdvice(responseData) {
		const adviceNumber = document.querySelector("#js-advice-number");
		const adviceText = document.querySelector("#js-advice-text");

		adviceNumber.textContent = `Advice #${responseData.slip.id}`;
		adviceText.textContent = `"${responseData.slip.advice}"`;
	}

	getAdvice();
	return (
		<>
			<div className="advice-card">
				<h1 className="advice__number" id="js-advice-number"></h1>
				<p className="advice__text" id="js-advice-text"></p>
				<picture className="decorative-divider">
					<source
						media="(max-widht:500px)"
						srcset="../../public/FEM-component/images/pattern-divider-mobile.svg"
					/>
					<img
						src="../../public/FEM-component/images/pattern-divider-desktop.svg"
						alt=""
					/>
				</picture>
				<button
					className="advice__button"
					id="js-advice-button"
					onClick={() => getAdvice()}
				>
					<img
						className="dice-img"
						src="../../public/FEM-component/images/icon-dice.svg"
						alt="Dice button for new adivce"
					/>
				</button>
			</div>
		</>
	);
}
