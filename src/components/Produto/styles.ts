import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: ${props => props.theme['offwhite-300']};
	margin: 1rem;
	border-top-right-radius: 36px;
	border-bottom-left-radius: 36px;

	img {
		width: 8rem;
		height: 8rem;

		margin-top: -2rem;
		margin-bottom: 1rem;

	}

	.tagContainer {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		gap: 0.5rem;
		justify-content: center;
	}

	h3 {
		background-color: ${props => props.theme['yellow-300']};
		color: ${props => props.theme['yellow-700']};
		border-radius: 16px;
		padding: 0.5rem 0.5rem;
		font-size: 1rem;
	}

	.nome {
		font-size: 1.5rem;
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.descricao {
		font-size: 1rem;
		font-weight: 400;
		color: ${props => props.theme['gray-100']};
		text-align: center;
		margin-bottom: 2rem;
		padding: 0 0.2rem;
	}
`

export const Footer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 0.5rem 2rem;

	.preco {
		.moeda {
			font-size: 1rem;
		}

		.valor {
			font-size: 2rem;
			font-family: "Baloo 2", monospace;
			line-height: 1rem;
		}

	}

	.quantidadeContainer {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 2rem;
	}
`

export const Cart = styled.div`
	padding: 0.5rem;
	border-radius: 8px;

	background-color: ${props => props.theme['purple-700']};
	color: ${props => props.theme.white};
`