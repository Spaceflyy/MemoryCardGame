const hideMenu = () => {
	let menu = document.querySelector(".menuContainer");
	menu.style.display = "none";
};

export default function howToPlay() {
	return (
		<div className="menuContainer">
			<div className="menu">
				<h2>How to play</h2>
				<p>
					Click on cards to earn points. but don&apos;t click on the same card twice!
				</p>
				<input onClick={hideMenu} type="button" value={"close"} />
			</div>
		</div>
	);
}
