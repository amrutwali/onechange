import React, { useRef } from 'react';
// Components
import { GrSearch } from 'react-icons/gr';
// Logo
import Logo from '../../Images/Logo.svg';
// Styles
import { Nav, Navigation, Search, Right } from './NavbarStyles';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const inputRef = useRef(null);
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
						<NavLink
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
							to="/conversion"
						>
							<li>Conversion</li>
						</NavLink>
					</ul>
				</div>
			</Navigation>
			<Search
				onClick={() => {
					inputRef.current.focus();
				}}
			>
				<GrSearch />
				<input
					type="text"
					placeholder="Search for Currency to convert"
					ref={inputRef}
				></input>
				<div className="slash"> /</div>
			</Search>
			<Right></Right>
		</Nav>
	);
};

export default Navbar;
