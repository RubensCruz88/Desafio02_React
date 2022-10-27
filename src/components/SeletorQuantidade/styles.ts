import styled from 'styled-components';


export const Container = styled.div`
	display: flex;
	gap: 1rem;

	background-color: ${props => props.theme['offwhite-700']};
	border-radius: 8px;
	padding: 0.3rem 0.5rem;

	button {
		font-size: 1.5rem;
		font-weight: bold;
		text-decoration: none;
		border: 0;
		color: ${props => props.theme['purple-700']};
		background-color: transparent;
		cursor: pointer;
	}

	span {
		display: flex;
		align-items: center;

		font-size: 1.2rem;		
	}

`