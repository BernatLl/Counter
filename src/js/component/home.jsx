import React, { useEffect, useState } from "react";
import "../../styles/index.css";

const Home = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="counter">
			<div className="one">{seconds}</div>
		</div>
	);
};

export default Home;
