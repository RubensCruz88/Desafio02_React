import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	border-bottom: 1px solid ${props => props.theme['offwhite-700']}; 
	gap: 1rem;
	padding: 1rem 0;

	img {
		width: 4rem;
	}

	.valor {
		font-weight: bold;
	}

`

export const Detalhe = styled.div`
	display: flex;
	flex-direction: column;

	span:first-child {
		color: ${props => props.theme['gray-500']};
		font-size: 1.2rem;
		margin-bottom: 0.5rem;
	}

	div {
		display: flex;
		gap: 0.5rem;

		.remover {
			display: flex;
			align-items: center;
			padding: 0 0.5rem;
			border-radius: 8px;
			font-size: 12px;
			cursor: pointer;

			background-color: ${props => props.theme['offwhite-700']};

			svg {
				color: ${props => props.theme['purple-500']};
			}
		}
	}
`

// export const Container = styled.div``

