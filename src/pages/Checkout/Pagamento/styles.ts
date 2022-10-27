import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: 8px;

	background-color: ${props => props.theme['offwhite-300']};

	.FormasDePagamento {
		display: flex;
		gap: 1rem;
	}
`

export const Descricao = styled.div`
	display: flex;
	gap: 0.5rem;

	div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	h2 {
		font-size: 1.2rem;
		line-height: 1.4rem;
		font-weight: bold;
	}

	h3 {
		font-size: 1rem;
		line-height: 1.2rem;
		font-weight: normal;
	}
`

export const FormaPagamento = styled.button`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	text-decoration: none;
	border: 0;
	padding: 1rem;
	margin: 2rem 0;
	border-radius: 8px;
	cursor: pointer;
	
	background-color: ${props => props.theme['offwhite-700']};
	font-size: 0.8rem;

	svg {
		color: ${props => props.theme['purple-500']}
	}

`