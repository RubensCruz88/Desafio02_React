import { Container } from './styles';
import { Minus, Plus } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';

interface SeletorQuantidadeProps {
	idSeletor: string;
}

export function SeletorQuantidade({ idSeletor }: SeletorQuantidadeProps) {
	const { carrinho, atualizaCarrinho } = useContext(CarrinhoContext);

	const indiceProduto = carrinho.findIndex(item => item.id === idSeletor);
	let valorInicial = 0

	if(indiceProduto >= 0) {
		valorInicial = carrinho[indiceProduto].quantidade;
	}

	const [quantidade, setQuantidade] = useState(valorInicial);


	function handleSomaQuantidade() {
		const carrinho = {
			id: idSeletor,
			quantidade: 1,
			nome: "string",
			valor: 10
		}

		atualizaCarrinho(carrinho);

		setQuantidade(state => {

			return state + 1
		})
	}

	function handleSubtraiQuantidade() {
		if (quantidade > 0) {
			const carrinho = {
				id: idSeletor,
				quantidade: -1,
				nome: "string",
				valor: 10
				}
	
			atualizaCarrinho(carrinho);

			setQuantidade(state => state - 1)			
		}

	}

	return (
		<Container>
			<button onClick={handleSubtraiQuantidade}><Minus size={14} /></button>
			<span>{quantidade}</span>
			<button onClick={handleSomaQuantidade}><Plus size={14} /></button>
		</Container>
	)
}