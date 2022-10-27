import { Cart, Container, Footer } from './styles';
import { ShoppingCart } from 'phosphor-react';
import { SeletorQuantidade } from '../SeletorQuantidade/SeletorQuantidade';
import { useContext } from 'react';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';

interface ProdutoProps {
	dados: {
		preco: number;
		imagemCafe: string;
		tags: Array<string>;
		nome: string;
		descricao: string;
	}
 
}

export function Produto({dados}: ProdutoProps) {
	return (
		<Container>
			<img src={`/src/images/produtos/${dados.imagemCafe}.svg`} alt="" />
			<div className='tagContainer'>
				{dados.tags.map(tag => {
					return (
						<h3>{tag}</h3>
					)
				})}
			</div>

			<h2 className='nome'>{dados.nome}</h2>
			<h4 className='descricao'>{dados.descricao}</h4>

			<Footer>
				<div className='preco'>
					<span className='moeda'>R$</span>
					<span className="valor">{dados.preco.toLocaleString('pt-br',{minimumFractionDigits: 2})}</span>
				</div>
				<div className='quantidadeContainer' >
					<SeletorQuantidade idSeletor={dados.imagemCafe}/>

					<Cart>
						<ShoppingCart weight='fill' size={22} />
					</Cart>
				</div>
			</Footer>
		</Container>
	)
}