import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex: 1;
	gap: 2rem;
	width: 100%;

	.leftContainer {
		display: flex;
		flex: 1;
		flex-direction: column;
	}

`

export const Checklist = styled.div`
	display: flex;
	flex-direction: column;
	border-top-right-radius: 50px;
	border-bottom-left-radius: 50px;

	padding: 2rem;

	background-color: ${props => props.theme['offwhite-300']};
`

export const Totais = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2rem;

	gap: 1rem;

	div {
		display: flex;
		justify-content: space-between;
		line-height: 1.5rem;
	}

	span:last-child {
		font-size: 1.2rem;
	}

	.total {
		font-weight: bold;
		font-size: 1.4rem;
		line-height: 1.8rem;
	}

	button {
		border: 0;
		background-color: ${props => props.theme['yellow-700']};
		color: ${props => props.theme.white};

		padding: 1rem;
		border-radius: 8px;
		font-weight: bold;
		cursor: pointer;
	}
`

