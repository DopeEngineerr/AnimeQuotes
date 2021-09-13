import React from "react";
import Title from "./Title";
import Quotes from "./Quotes";
import "../App.css";

const Main = () => {
	return (
		<div className="main">
			<div className="background-image"></div>
			<div className="content">
				<Title />
				<Quotes />
			</div>
		</div>
	);
};

export default Main;
