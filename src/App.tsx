import { Post } from "./features/post/Post";
import { Input } from "./features/input/Input";
import { Search } from "./features/search/Search";
import "./App.css";
import { useState, useEffect } from "react";

function App() {

	//Totally unneccessary for the function of the app, but a fun exercise in CSS shenanigans 
	const [showRickRollGIF, setShowRickRollGIF] = useState(false);

	const handleLogoHover = () => {
		setShowRickRollGIF(true);
	};

	const handleLogoHoverOut = () => {
		setShowRickRollGIF(false);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowRickRollGIF(false);
		}, 8000);
		return () => clearTimeout(timeout);
	}, []);


	return (
		<div className="app">
			<header className="header">
				<nav>
					<div
						id="logo"
						onMouseEnter={handleLogoHover}
						onMouseLeave={handleLogoHoverOut}
					>
						rddt minimal
					</div>
				</nav>
				{showRickRollGIF && <div className="rickRollGIF"></div>}
			</header>
			<main className="main">
				<Input />
				<Search />
				<Post />
			</main>
		</div>
	)
}

export default App;
