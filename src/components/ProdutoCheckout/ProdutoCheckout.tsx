import { Container, Detalhe } from './styles';
import expressoTradicional from '../../images/produtos/expresso-tradicional.svg';
import { SeletorQuantidade } from '../SeletorQuantidade/SeletorQuantidade';
import { Trash } from 'phosphor-react';

interface ProdutoCheckoutProps {
	idImagem: string;
	nome: string;
	valor: number;
}

export function ProdutoCheckout({idImagem, nome, valor}: ProdutoCheckoutProps) {
	return (
		<Container>
			<img src={`/src/images/produtos/${idImagem}.svg`} />
			
			<Detalhe>
				<span>{nome}</span>
				<div>
					<SeletorQuantidade idSeletor={idImagem}/>	
					<div className='remover'>
						<Trash />
						<span>REMOVER</span>
					</div>
				</div>
			</Detalhe>				

			<div className='valor'>
				R$ {valor}
			</div>
		</Container>
	)
}