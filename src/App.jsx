import { useEffect, useState } from "react";
import getData from "./components/getData.js";
import CardRenderer from "./components/CardRenderer";
import "./App.css";

function App() {
	const [pokeData, setPokeData] = useState([]);

	useEffect(() => {
		(async () => {
			setPokeData(await getData());
		})();
	}, []);

	return pokeData && <CardRenderer cards={pokeData} />;
}

export default App;
