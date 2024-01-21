import { useEffect, useState } from "react";

export default function CardRenderer({ onClick, cards }) {
	const [randomCards, setRandomCards] = useState([]);

	function generateNumbers() {
		let rands = [];
		while (rands.length < 10) {
			let r = Math.floor(Math.random() * 10);
			if (rands.indexOf(r) === -1) {
				rands.push(r);
			}
		}
		let newArray = [];
		rands.forEach((num) => {
			newArray.push(cards[num]);
		});

		setRandomCards(newArray);
	}

	useEffect(() => {
		generateNumbers();
	}, []);

	return (
		<div className="cardContainer">
			{randomCards[0] !== undefined &&
				randomCards.map((item) => {
					return (
						<img
							onClick={generateNumbers}
							key={item.id}
							src={item.images.small}
							alt=""
						/>
					);
				})}
		</div>
	);
}
