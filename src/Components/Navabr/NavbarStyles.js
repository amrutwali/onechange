import styled from 'styled-components';

const Nav = styled.div`
	color: var(--font-gray);
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-content: space-between;
	justify-items: center;
	padding: 12px 20px;
`;

const Navigation = styled.div`
	justify-self: start;
	display: flex;
	flex-direction: row;
	align-items: center;

	.list {
		ul {
			padding: 0;
			margin: 0;
			list-style: none;
		}
		li {
			display: inline;
			padding: 8px 14px;
			border-radius: 10px;
			transition: background-color 200ms ease-in-out 100ms;
		}

		li:hover {
			background-color: var(--hover);
		}
	}

	.active {
		color: var(--font-white);
	}

	.inactive {
		color: var(--font-gray);
	}

	img {
		margin: 0 20px 0 0;
		height: 40px;
		width: 40px;
		filter: invert(1);
	}
`;

const Search = styled.div`
	max-width: 500px;
	display: flex;
	flex-direction: row;
	width: 100%;
	align-items: center;
	padding: 12px 15px;
	background-color: var(--search);
	border: 1px solid var(--border);
	border-radius: 12px;
	font-weight: 400;
	gap: 10px;
	transition: border 200ms ease-in-out;
	position: relative;

	.searchList {
		position: absolute;
		top: 3rem;
		left: 0rem;
		z-index: 5;
		width: inherit;
		padding-inline: 2rem;
		background-color: var(--picker-background);
		border-radius: 1.5rem;
		border: 1px solid var(--border);
		overflow-y: scroll;
		/* overflow-y: hidden; */
		max-height: 50vh;
	}

	.searchList {
		width: 100%;
	}
	.searchList ul {
		padding: 0;
	}
	.searchList li {
		list-style: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		height: 4rem;
	}
	.searchList li :hover {
		cursor: pointer;
	}
	.searchList li img {
		width: 40px;
		align-self: center;
	}
	.searchList li span {
		margin: 0 20px;
		font-weight: 500;
		font-size: var(--font-medium);
	}
	.searchList li p {
		color: var(--button);
		margin-left: auto;
		text-align: right;
	}

	:hover {
		border-radius: 12px;
		border: 1px solid darkorchid;
	}

	svg {
		height: 1em;
		width: 1em;
		path {
			stroke: var(--font-gray);
			stroke-width: 3px;
		}
	}

	input {
		all: unset;
		background-color: var(--search);
		padding: 0;
		margin: 0;
		width: 100%;
	}

	input::-webkit-input-placeholder {
		color: var(--font-gray);
		text-overflow: ellipsis;
	}

	.slash {
		background-color: #3e4459;
		color: #656c84;
		font-weight: 800;
		width: 20px;
		height: 18px;
		font-size: 12px;
		border-radius: 3px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

const Right = styled.div`
	justify-self: end;
`;

export { Nav, Navigation, Search, Right };
