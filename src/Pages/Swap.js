import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
// Components
import Popup from '../Components/Popup/Popup';
// import { BiChevronDown } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';
// Styles
import { Wrapper, ChangeCard, Picker } from './SwapStyles';

let currencyList = require('../Assets/currencyList.json');

const Swap = () => {
	const [state1, setState1] = useState({
		currency: 'USD',
		src: 'https://hatscripts.github.io/circle-flags/flags/us.svg',
	});
	const [state2, setState2] = useState({
		currency: 'INR',
		src: 'https://hatscripts.github.io/circle-flags/flags/in.svg',
	});

	const [value1, setValue1] = useState('');
	const [value2, setValue2] = useState('');

	const [popupSelect, setPopupSelect] = useState(false);
	const [buttonId, setButtonId] = useState('');
	const [rate, setRate] = useState();

	const input1Ref = useRef(null);
	const input2Ref = useRef(null);

	useEffect(() => {
		async function fetchCurrencyData() {
			if (sessionStorage.getItem(`${state1.currency}/${state2.currency}`))
				return;
			const response = await axios.get('http://localhost:4000/convert', {
				params: {
					from: state1.currency,
					to: state2.currency,
				},
			});
			sessionStorage.setItem(
				`${response.data.from}/${response.data.to}`,
				response.data.value
			);
			const response2 = await axios.get('http://localhost:4000/convert', {
				params: {
					from: state2.currency,
					to: state1.currency,
				},
			});
			sessionStorage.setItem(
				`${response2.data.from}/${response2.data.to}`,
				response2.data.value
			);
			setRate(sessionStorage.getItem(`${state1.currency}/${state2.currency}`));
			setValue1('');
			setValue2('');
			input1Ref.current.value = '';
			input2Ref.current.value = '';
		}
		fetchCurrencyData();
	}, [state1, state2]);

	function onSwap() {
		let temp = {};
		temp = state1;
		setState1(state2);
		setState2(temp);

		let tempValue = '';
		tempValue = value1;
		setValue1(value2);
		input1Ref.current.value = input2Ref.current.value;
		setValue2(tempValue);
		input2Ref.current.value = tempValue;
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

	function handleChangeOne(e) {
		// you can fetch data here instead
		setValue1(e.target.value);
		input1Ref.current.value = e.target.value;

		if (input1Ref.current.value === '') {
			setValue2('');
			input2Ref.current.value = '';
		}

		setRate(
			Number(sessionStorage.getItem(`${state1.currency}/${state2.currency}`))
		);
		console.log(rate);
		setValue2(input1Ref.current.value * rate);
		input2Ref.current.value =
			Math.round((input1Ref.current.value * rate + Number.EPSILON) * 1000) /
			1000;
	}
	function handleChangeTwo(e) {
		// you can fetch data here instead
		setValue2(e.target.value);
		input2Ref.current.value = e.target.value;
		setRate(
			Number(sessionStorage.getItem(`${state2.currency}/${state1.currency}`))
		);
		console.log(rate);
		setValue1(input2Ref.current.value * rate);
		input1Ref.current.value =
			Math.round((input2Ref.current.value * rate + Number.EPSILON) * 1000) /
			1000;
	}

	return (
		<Wrapper>
			<ChangeCard>
				<Picker>
					<input
						id="1"
						placeholder="0"
						type="number"
						ref={input1Ref}
						maxlength="10"
						// value={value1}
						onChange={handleChangeOne}
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
						ref={input2Ref}
						maxlength="10"
						// value={value2}
						onChange={handleChangeTwo}
						// disabled={loading}
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
