import styled from 'styled-components';

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(13, 17, 28, 0.7);

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Inner = styled.div`
	position: relative;
	padding: 20px;
	height: 80%;
	width: 100%;
	max-width: 400px;
	background-color: var(--picker-background);
	border-radius: 1.5rem;
	border: 1px solid var(--border);
	overflow-y: hidden;

	h2 {
		margin: 0;
		padding: 1.25rem 0;
		font-weight: var(--weight-big);
		border-bottom: 1px solid var(--border);
	}
`;

const List = styled.div`
	width: 100%;
	height: calc(100% - 3rem);
	overflow-y: scroll;

	ul {
		padding: 0;
	}

	li {
		list-style: none;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		padding: 10px;

		:hover {
			cursor: pointer;
		}

		img {
			width: 50px;
			align-self: flex-start;
		}
		span {
			margin: 0 20px;
			font-weight: 500;
			font-size: var(--font-medium);
		}

		p {
			color: var(--button);
			margin-left: auto;
		}
	}
`;

export { Wrapper, Inner, List };
