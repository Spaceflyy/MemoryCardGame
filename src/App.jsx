import { useEffect, useState } from "react";
import getData from "./components/getData.js";
import CardRenderer from "./components/CardRenderer";
import icon from "./assets/loadingIcon.svg";
import "./App.css";

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
					<p>Score:{score}</p>
					<p>Best Score:{hiscore}</p>
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
