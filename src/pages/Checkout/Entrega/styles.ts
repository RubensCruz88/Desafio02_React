import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	padding: 1rem;
	margin-bottom: 1rem;
	border-radius: 8px;

	background-color: ${props => props.theme['offwhite-300']};

	h4 {
		line-height: 1.5rem;
	}

	.descricaoEntrega {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 1rem;
		
		svg {
			color: ${props => props.theme['yellow-500']};
		}
	}
`

export const Campos = styled.div`
	display: grid;
	grid-template-columns: 30% 55% 15%;
	grid-template-areas: 
		'CEP . .'
		'Rua Rua Rua'
		'Numero Complemento Complemento'
		'Bairro Cidade UF';

	input {
		padding: 0.5rem;
		border-radius: 8px;
		background: ${props => props.theme['offwhite-700']};
		margin: 0 1rem 1rem 0;
		border: none;
	}

	.CEP {
		grid-area: CEP;
	}

	.Rua {
		grid-area: Rua;
	}

	.Numero {
		grid-area: Numero;
	}

	.Complemento {
		grid-area: Complemento;
	}

	.Bairro {
		grid-area: Bairro;
	}

	.Cidade {
		grid-area: Cidade;
	}

	.UF {
		grid-area: UF;
	}

`
