export default function CardRenderer({ cards }) {
	return (
		<div className="cardContainer">
			{cards.map((item) => {
				return <img key={item.id} src={item.images.small} alt="" />;
			})}
		</div>
	);
}
