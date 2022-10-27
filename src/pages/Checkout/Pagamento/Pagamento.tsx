import { Container, Descricao, FormaPagamento } from './styles';
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';

export function Pagamento() {
	return (
		<Container>
			<Descricao>
				<CurrencyDollar size={22} />
				<div>
					<h2>Pagamento</h2>
					<h3>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h3>
				</div>
			</Descricao>

			<div className='FormasDePagamento'>
				<FormaPagamento>
					<CreditCard size={18} />
					<span>CARTÃO DE CRÉDITO</span>
				</FormaPagamento>
				<FormaPagamento>
					<Bank size={18} />
					<span>CARTÃO DE DÉBITO</span>
				</FormaPagamento>
				<FormaPagamento>
					<Money size={18} />
					<span>DINHEIRO</span>
				</FormaPagamento>
			</div>
		</Container>
	)
}