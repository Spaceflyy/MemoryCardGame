import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [pokeData, setPokeData] = useState([]);

	useEffect(() => {
		let pageNum = 11;

		fetch(`https://api.pokemontcg.io/v2/cards?select=id,name,images&page=11`)
			.then(function (response) {
				return response.json();
			})

			.then(function (response) {
				const data = response.data;
				let filtered = data.filter((item) => item.id.includes("base"));
				setPokeData([...filtered]);
			})

			.catch(function (err) {
				console.log(err);
			});
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
