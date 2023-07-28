import React, { useState } from 'react';
// Components
import { GrSearch } from 'react-icons/gr';
import currencyList from '../../Assets/currencyList.json';
// Logo
import Logo from '../../Images/Logo.svg';
// Styles
import { Nav, Navigation, Search, Right } from './NavbarStyles';
import { NavLink } from 'react-router-dom';

const SearchList = ({ searchTerm }) => {
	const list = currencyList.filter((item) => {
		if (
			item.fullname
				.toLocaleLowerCase()
				.includes(searchTerm.toString().toLocaleLowerCase()) ||
			item.currency
				.toLocaleLowerCase()
				.includes(searchTerm.toString().toLocaleLowerCase())
		) {
			return item;
		}
		return false;
	});
	console.log(list);

	const results = (
		<div className="searchList">
			<ul>
				{list.map((item, index) => {
					return (
						<li
							key={index.toString()}
							id={index.toString()}
						>
							<img
								src={item.image}
								alt=""
							/>
							<span>{item.currency}</span>
							<p>{item.fullname}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);

	const blank = (
		<div className="searchList">
			<p>No matching currecny</p>
		</div>
	);

	return list.length !== 0 ? results : blank;
};
const Navbar = () => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<Nav>
			<Navigation>
				<img
					src={Logo}
					alt="Logo"
				/>
				<div className="list">
					<ul>
						<NavLink
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							to="/"
						>
							<li>Swap</li>
						</NavLink>
						{/* <NavLink
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							to="/conversion"
						>
							<li>Conversion</li>
						</NavLink> */}
					</ul>
				</div>
			</Navigation>
			<Search
				onClick={() => {
					document.getElementById('searchfield').focus();
				}}
			>
				<GrSearch />
				<input
					id="searchfield"
					type="text"
					placeholder="Search for Currency to convert"
					value={searchTerm}
					onChange={(e) => {
						setSearchTerm(e.target.value);
					}}
				></input>
				<div className="slash"> /</div>
				{searchTerm && <SearchList searchTerm={searchTerm}></SearchList>}
			</Search>
			<Right></Right>
		</Nav>
	);
};

export default Navbar;
