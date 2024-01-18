import { useEffect, useState } from "react";
import getData from "./components/getData";
import "./App.css";

function App() {
	const [pokeData, setPokeData] = useState([]);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		(async () => {
			setPokeData(await getData());
		})();
	}, []);

	return (
		<div className="cardContainer">
			{pokeData.map((item) => {
				return <img key={item.id} src={item.images.small} alt="" />;
			})}
		</div>
	);
}

export default App;
