import { Wrapper, Inner, List } from './PopupStyles';

let currencyList = require('../../Assets/currencyList.json');

const Popup = ({ trigger, setter, selectCountry, children }) => {
	function handleClick(event) {
		if (event.currentTarget.id) {
			selectCountry(event);
			setter(false);
		} else {
			setter(false);
		}
	}

	const currenylist = currencyList.map((list, index) => (
		<li
			key={index.toString()}
			id={index.toString()}
			onClick={(e) => handleClick(e)}
		>
			<img
				src={list.image}
				alt=""
			/>
			<span>{list.currency}</span>
			<p>{list.fullname}</p>
		</li>
	));

	return trigger ? (
		<Wrapper
			className="popup"
			onClick={(e) => handleClick(e)}
		>
			<Inner className="inner-popup">
				{children}
				<List className="scroll--simple">
					<ul>{currenylist}</ul>
				</List>
			</Inner>
		</Wrapper>
	) : (
		''
	);
};

export default Popup;
