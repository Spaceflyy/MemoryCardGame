import { useEffect, useState } from "react";
import getData from "./components/getData.js";
import CardRenderer from "./components/CardRenderer";
import "./App.css";

function App() {
	const [pokeData, setPokeData] = useState([]);
	const [score, setScore] = useState(0);
	useEffect(() => {
		(async () => {
			setPokeData(await getData());
		})();
	}, []);

	return (
		<>
			{pokeData.length > 0 ? (
				<>
					{" "}
					<h1>Score:{score}</h1>{" "}
					<CardRenderer setScore={() => setScore(score + 1)} cards={pokeData} />
				</>
			) : (
				<h1>Loading...</h1>
			)}
		</>
	);
}
export default App;
