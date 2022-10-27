import { Caracteristicas, Opcao, Textos, Icone, Apresentacao, Produtos } from './styles';
import coffeIntro from '../../images/coffee-intro.png';
import { ShoppingCart, Package,Timer, Coffee, IconProps } from 'phosphor-react';
import { Produto } from '../../components/Produto/Produto';
import { createContext, ForwardRefExoticComponent, RefAttributes, useContext, useState } from 'react';

import produtosJson from '../../data/produtos.json';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';

interface TextosApresentacaoInterface {
	corDeFundo: 'laranja' | 'amarelo' | 'marrom' | 'roxo';
	logo: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
	descricao: string	
}

const textosApresentacao: TextosApresentacaoInterface[] = [
	{
		corDeFundo: "laranja",
		logo: ShoppingCart,
		descricao: "Compra simples e segura"
	},
	{
		corDeFundo: "marrom",
		logo: Package,
		descricao: "Embalagem mantém o café intacto"
	},
	{
		corDeFundo: "amarelo",
		logo: Timer,
		descricao: "Entrega rápida e rastreada"
	},
	{
		corDeFundo: "roxo",
		logo: Coffee,
		descricao: "O café chega fresquinho até você"
	}
]

export function Home() {
	return (
		<>
			<Apresentacao>
				<Textos>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora e em qualquer lugar.</h2>
					<Caracteristicas>
						{textosApresentacao.map(apresentacao => {
							return(
								<Opcao>
									<Icone cor={apresentacao.corDeFundo}>
										<apresentacao.logo weight='fill'/>
									</Icone>
									<span>{apresentacao.descricao}</span>
								</Opcao>
							)
						})}

					</Caracteristicas>
				</Textos>
				<img src={coffeIntro} />
			</Apresentacao>

			<Produtos>
				<h2 className='tituloProdutos'>Nossos Cafés</h2>

				<div className='lista'>
					{produtosJson.dados.map(produto => {
						return (
							<Produto key={produto.nome} dados={produto} />
						)
					})}

				</div>
			</Produtos>
		</>
	)
}