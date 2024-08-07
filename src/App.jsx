import { useEffect, useState } from "react";
import getData from "./components/getData.js";
import CardRenderer from "./components/CardRenderer";
import icon from "./assets/loadingIcon.svg";
import HowToPlay from "./components/howToPlay.jsx";

4;
function App() {
	const [pokeData, setPokeData] = useState([]);
	const [score, setScore] = useState(0);
	const [hiscore, setHiscore] = useState(0);
	useEffect(() => {
		(async () => {
			setPokeData(await getData());
		})();
	}, []);

	const checkHiscore = () => {
		if (score > hiscore) {
			setHiscore(score);
		}
	};

	return (
		<>
			{pokeData.length > 0 ? (
				<>
					<div className="header">
						<img src={icon} alt="Icon" />
						<h1>Pokédex Recall </h1>
						<img src={icon} alt="Icon" />
					</div>
					<HowToPlay />
					<div className="scoreContainer">
						<p>Score:{score}</p>
						<p>Best Score:{hiscore}/15</p>
					</div>
					<CardRenderer
						setBestScore={checkHiscore}
						resetScore={() => setScore(0)}
						setScore={() => setScore(score + 1)}
						cards={pokeData}
					/>
				</>
			) : (
				<div className="loadingContainer">
					<img className="loading" src={icon} alt="Loading Icon" />
					<h1>Loading...</h1>
				</div>
			)}
		</>
	);
}
export default App;
