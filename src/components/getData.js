export default async function getData() {
	const response = await fetch(
		`https://api.pokemontcg.io/v2/cards?select=id,name,images&page=11`
	);
	const pokemon = await response.json();
	const data = pokemon.data;
	let filtered = data.filter((item) => item.id.includes("base"));
	console.log("API CALL");
	return filtered;
}
