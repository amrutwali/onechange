import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 70px 0 0 0;
	position: relative;
`;

const ChangeCard = styled.div`
	padding: 0.5rem;
	background-color: var(--picker-background);
	border: 1px solid var(--border);
	border-radius: 1rem;

	.bottom {
		margin-top: 0.25rem;
	}

	.swap-button {
		all: unset;
		background-color: var(--border);
		color: var(--font-gray);
		border-radius: 0.5rem;
		outline: 0.25rem solid var(--picker-background);
		aspect-ratio: 1 / 1;
		width: 2rem;
		position: absolute;
		left: calc(50% - 1rem);
		margin-top: -1rem;
		display: flex;
		align-items: center;
		justify-content: center;

		:hover {
			cursor: pointer;
		}
	}
`;

const Picker = styled.div`
	background-color: var(--picker);
	border-radius: 1rem;
	max-width: 460px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	/* border: 1px solid var(--border); */

	button {
		width: auto;
		background-color: var(--button);
		padding: 0.25rem;
		margin: 0 2rem;
		height: 1.5rem;
		border-radius: 0.95rem;

		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.3rem;

		:hover {
			cursor: pointer;
		}

		.countryLogo {
			width: 1.5rem;
			height: 1.5rem;
			border-radius: 50%;
		}

		svg {
			height: 1.25rem;
			width: 1.25rem;
			path {
				stroke-width: 5px;
			}
		}

		span {
			font-weight: var(--weight-big);
			font-size: 1.25rem;
			line-height: 1.25rem;
		}
	}

	input {
		all: unset;
		background-color: transparent;
		padding: 1rem;
		margin: 0;
		width: auto;
		overflow: scroll;
		font-weight: 400;
		font-size: 2.25rem;
	}
	input[type='number'] {
		appearance: text-field;
		-moz-appearance: textfield;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	input::-webkit-input-placeholder {
		color: var(--font-gray);
		text-overflow: ellipsis;
	}
`;

export { Wrapper, ChangeCard, Picker };
