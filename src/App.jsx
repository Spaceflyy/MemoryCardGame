import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [pokeData, setPokeData] = useState([]);

	useEffect(() => {
		let pageNum = 11;

		fetch(
			`https://api.pokemontcg.io/v2/cards?select=id,name,images&page=${pageNum}`
		)
			.then(function (response) {
				return response.json();
			})

			.then(function (response) {
				const data = response.data;
				console.log(data);

				let filtered = data.filter((item) => item.id.includes("base"));
				console.log(filtered);
				setPokeData([...pokeData, ...filtered]);
			})

			.catch(function (err) {
				console.log(err);
			});
	}, []);

	return (
		<>
			{pokeData.map((item) => {
				return <img key={item.id} src={item.images.small} alt="" />;
			})}
		</>
	);
}

export default App;
