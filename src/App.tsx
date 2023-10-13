import React from "react";
import CurrencyConverter from "./CurrencyConverter";
import "./App.css";

function App() {
	const currencies = ["USD", "EUR", "IDR", "GBP"];
	return (
		<>
			<CurrencyConverter currencies={currencies} />
		</>
	);
}

export default App;
