import styled from 'styled-components';

export const HeaderContainer = styled.header`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin: 1rem 0 2rem 0;

	div {
		display: flex;
		align-items: center;

		gap: 1rem;
	}

`

export const Location = styled.span`
	display: flex;
	padding: 0.5rem;
	border-radius: 8px;
	gap: 0.5rem;

	background: ${props => props.theme['purple-300']};
	color: ${props => props.theme['purple-700']};
	
`

export const Cart = styled.nav`
	padding: 0.5rem;
	border-radius: 8px;
	width: 2.6rem;
	height: 2.5rem;
	
	background: ${props => props.theme['yellow-300']};
	color: ${props => props.theme['yellow-500']};
	cursor: pointer;

`

export const Badge = styled.span`
	position: relative;
    top: -2.5rem;
    right: -1.4rem;
    padding: 0 0.3rem;
    border-radius: 100%;
    background: #ff8e0d;
    color: white;
`