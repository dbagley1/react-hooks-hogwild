import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import HogList from "./HogList.js";
import Filter from "./Filter.js";

import hogData from "../porkers_data";

function App() {
	const [hogs, setHogs] = useState(hogData);
	const [filteredHogs, setFilteredHogs] = useState([]);
	const [showGreased, setShowGreased] = useState(true);
	const [sortBy, setSortBy] = useState("name");

	useEffect(() => {
		filterHogs();
	}, [showGreased, sortBy]);

	function filterHogs() {
		console.log("filterHogs");
		let greasedHogs = hogs.filter(hog => hog.greased);
		let notGreasedHogs = hogs.filter(hog => !hog.greased);
		let filteredHogs = showGreased ? greasedHogs : notGreasedHogs;

		switch (sortBy) {
			case "name":
				filteredHogs.sort((hog1, hog2) => {
					return hog1.name.localeCompare(hog2.name);
				});
				break;
			case "weight":
				filteredHogs.sort((hog1, hog2) => {
					return hog1.weight - hog2.weight;
				});
				break;
			case "specialty":
				filteredHogs.sort((hog1, hog2) => {
					return hog1.specialty.localeCompare(hog2.specialty);
				});
				break;
			default:
				break;
		}

		setFilteredHogs(filteredHogs);
	}

	return (
		<div className="App">
			<Nav />
			<Filter showGreased={showGreased} setShowGreased={setShowGreased} sortBy={sortBy} setSortBy={setSortBy} />
			<HogList hogs={filteredHogs} />
		</div>
	);
}

export default App;
