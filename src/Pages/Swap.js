import { useState } from 'react';
// Components
import Popup from '../Components/Popup/Popup';
// import { BiChevronDown } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
// Styles
import { Wrapper, ChangeCard, Picker } from './SwapStyles';

let currencyList = require('../Assets/currencyList.json');

const Swap = () => {
	const [state1, setState1] = useState({
		value: '',
		currency: 'USD',
		src: 'https://hatscripts.github.io/circle-flags/flags/us.svg',
	});
	const [state2, setState2] = useState({
		value: '',
		currency: 'INR',
		src: 'https://hatscripts.github.io/circle-flags/flags/in.svg',
	});
	const [popupSelect, setPopupSelect] = useState(false);
	const [buttonId, setButtonId] = useState('');

	function onSwap() {
		let temp = {};
		temp = state1;
		setState1(state2);
		setState2(temp);
	}

	function setId(event) {
		if (buttonId === 'b1') {
			setState1({
				...state1,
				currency: currencyList[event.currentTarget.id].currency,
				src: currencyList[event.currentTarget.id].image,
			});
		} else {
			setState2({
				...state2,
				currency: currencyList[event.currentTarget.id].currency,
				src: currencyList[event.currentTarget.id].image,
			});
		}
	}

	function selectCounrtry(id) {
		if (id === 'b1') {
			setButtonId('b1');
		} else {
			setButtonId('b2');
		}
	}

	function handleChange(event) {
		if (event.target.id === '1') {
			setState1({ ...state1, value: event.target.value });
		} else {
			setState2({ ...state2, value: event.target.value });
		}
	}

	return (
		<Wrapper>
			<ChangeCard>
				<Picker>
					<input
						id="1"
						placeholder="0"
						type="number"
						value={state1.value}
						onChange={handleChange}
					/>
					<button
						id="b1"
						onClick={(event) => {
							setPopupSelect(true);
							selectCounrtry(event.currentTarget.id);
						}}
					>
						{state1.currency !== 'Select' && (
							<img
								className="countryLogo"
								src={state1.src}
								alt="currency"
							/>
						)}
						<span>{state1.currency}</span>
						<FiChevronDown id="b1" />
					</button>
				</Picker>
				<button
					className="swap-button"
					onClick={onSwap}
				>
					↓
				</button>
				<Picker className="bottom">
					<input
						id="2"
						placeholder="0"
						type="number"
						value={state2.value}
						onChange={handleChange}
					/>
					<button
						id="b2"
						onClick={(event) => {
							setPopupSelect(true);
							selectCounrtry(event.currentTarget.id);
						}}
					>
						{state2.currency !== 'Select' ? (
							<img
								className="countryLogo"
								src={state2.src}
								alt="currency"
							/>
						) : (
							<span> </span>
						)}
						<span>{state2.currency}</span>
						<FiChevronDown id="b2" />
					</button>
				</Picker>
			</ChangeCard>
			<Popup
				trigger={popupSelect}
				setter={setPopupSelect}
				selectCountry={setId}
			>
				<h2>Currency List</h2>
			</Popup>
		</Wrapper>
	);
};

export default Swap;
