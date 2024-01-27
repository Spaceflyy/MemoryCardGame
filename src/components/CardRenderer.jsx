import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
let selectedCards = [];
export default function CardRenderer({
	setBestScore,
	resetScore,
	setScore,
	cards,
}) {
	const [randomCards, setRandomCards] = useState([]);

	function checkCards(cardId) {
		if (selectedCards.find((card) => card.id === cardId) !== undefined) {
			resetScore();
			setBestScore();
			selectedCards = [];
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
						<Tilt tiltReverse key={item.id}>
							<img
								className="pokeCard"
								onClick={(e) => {
									checkCards(e.target.getAttribute("data"));
									shuffleCards();
								}}
								data={item.id}
								src={item.images.small}
								alt=""
							/>
						</Tilt>
					);
				})}
		</div>
	);
}
