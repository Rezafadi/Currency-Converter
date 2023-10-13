import React, { useState } from "react";

interface CurrencyConverterProps {
	currencies: string[];
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({
	currencies,
}) => {
	const [fromCurrency, setFromCurrency] = useState(currencies[0]);
	const [toCurrency, setToCurrency] = useState(currencies[1]);
	const [amount, setAmount] = useState(1);
	const [convertedAmount, setConvertedAmount] = useState(0);

	const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newAmount = parseFloat(event.target.value);
		setAmount(newAmount);
	};

	const handleFromCurrencyChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setFromCurrency(event.target.value);
	};

	const handleToCurrencyChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setToCurrency(event.target.value);
	};

	const convertCurrency = () => {
		const exchangeRates: { [key: string]: number } = {
			USD: 1,
			EUR: 0.84,
			IDR: 14000,
			GBP: 0.74,
		};

		const convertedValue =
			(amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
		setConvertedAmount(convertedValue);
	};

	return (
		<div>
			<h1>Currency Converter</h1>
			<div className="container">
				<div className="input-wrapper">
					<input type="number" value={amount} onChange={handleAmountChange} />
					<select value={fromCurrency} onChange={handleFromCurrencyChange}>
						{currencies.map((currency) => (
							<option key={currency} value={currency}>
								{currency}
							</option>
						))}
					</select>
					to
					<select value={toCurrency} onChange={handleToCurrencyChange}>
						{currencies.map((currency) => (
							<option key={currency} value={currency}>
								{currency}
							</option>
						))}
					</select>
					<button onClick={convertCurrency}>CONVERT</button>
				</div>
				<div className="result-wrapper">
					{convertedAmount.toFixed(2)} {toCurrency}
				</div>
			</div>
		</div>
	);
};

export default CurrencyConverter;
