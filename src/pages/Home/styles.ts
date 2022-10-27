import styled from 'styled-components';

export const Apresentacao = styled.div`
	display: flex;
	margin-top: 7rem;
	
	gap: 4rem;

`

export const Textos = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;

	h1 {
		font-family: "Baloo 2", monospace;
		font-size: 48px;
		font-weight: 900;
	}

	h2 {
		font-weight: normal;
		font-size: 1.5rem;
	}

`

export const Caracteristicas = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
	margin-top: 3rem;
`

export const Opcao = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`

const ICONE_CORES = {
	laranja: 'yellow-700',
	amarelo: 'yellow-500',
	marrom: 'gray-300',
	roxo: 'purple-500'
} as const

interface IconeProps {
	cor: keyof typeof ICONE_CORES;
}

export const Icone = styled.span<IconeProps>`
	background: ${props => props.theme[ICONE_CORES[props.cor]]};
	color: ${props => props.theme.white};
	padding: 0.5rem;
	border-radius: 50px;
`

export const Produtos = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;

	.tituloProdutos {
		margin: 2rem 0;
		font-family: "Baloo 2", monospace;
		font-size: 2rem;
	}

	.lista {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		row-gap: 1rem;
	}
`
