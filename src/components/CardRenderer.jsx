import { useEffect, useState } from "react";
let selectedCards = [];
export default function CardRenderer({ setScore, cards }) {
	const [randomCards, setRandomCards] = useState([]);

	function checkCards(cardId) {
		if (selectedCards.find((card) => card.id === cardId) !== undefined) {
			console.log("CARD ALREADY CHOSEN");
		} else {
			selectedCards.push(
				randomCards[randomCards.findIndex((item) => item.id === cardId)]
			);
			setScore();
		}
	}

	function shuffleCards() {
		let rands = [];
		while (rands.length < 10) {
			let r = Math.floor(Math.random() * 15);
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
		shuffleCards();
	}, [cards]);

	return (
		<div className="cardContainer">
			{randomCards[0] !== undefined &&
				randomCards.map((item) => {
					return (
						<img
							onClick={(e) => {
								checkCards(e.target.getAttribute("data"));
								shuffleCards();
							}}
							key={item.id}
							data={item.id}
							src={item.images.small}
							alt=""
						/>
					);
				})}
		</div>
	);
}
