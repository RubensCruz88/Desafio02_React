import { Checklist, Container, Totais } from './styles';
import { Entrega } from './Entrega/Entrega';
import { Pagamento } from './Pagamento/Pagamento';
import { MapPin } from 'phosphor-react';
import { ProdutoCheckout } from '../../components/ProdutoCheckout/ProdutoCheckout';
import { useContext } from 'react';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';

export function Checkout() {
	const { carrinho } = useContext(CarrinhoContext);

	return (
		<Container>
			<div className='leftContainer'>
				<Entrega />

				<Pagamento />
			</div>

			<Checklist>
				{carrinho.map(item => {
					return (
						<ProdutoCheckout idImagem={item.id} nome={item.nome} valor={item.valor}/>
					)
				})}

				<Totais>
					<div>
						<span>Total de itens</span>
						<span>R$ 29,70</span>
					</div>
					<div>
						<span>Entrega</span>
						<span>R$ 3,50</span>
					</div>
					<div className='total'>
						<span>Total</span>
						<span>R$ 33,20</span>
					</div>

					<button>CONFIRMAR PEDIDO</button>
				</Totais>
			</Checklist>
		</Container>
	)
}