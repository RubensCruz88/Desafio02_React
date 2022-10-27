import { createContext, ReactNode, useState } from "react";

interface Carrinho {
	id: string;
	quantidade: number;
	nome: string;
	valor: number;
}

interface CarrinhoContextType {
	carrinho: Array<Carrinho>;
	quantidadeTotal: number;
	atualizaCarrinho: (novoItem: Carrinho) => void;
	atualizaQuantidadeTotal: (valor: number) => void;
}

interface CarrinhoContextProviderProps {
	children: ReactNode
}

export const CarrinhoContext = createContext({} as CarrinhoContextType)

export function CarrinhoContextProvider({ children }: CarrinhoContextProviderProps) {

	const [carrinho, setCarrinho] = useState<Carrinho[]>([])
	const [quantidadeTotal, setQuantidadeTotal] = useState(0)

	function atualizaQuantidadeTotal(valor: number) {
		setQuantidadeTotal(quantidade => quantidade + valor)
	}

	function atualizaCarrinho(novoItem: Carrinho) {
		const imagemIndex = carrinho.findIndex(item => item.id === novoItem.id);
		let novoCarrinho;		

		if(imagemIndex < 0){
			novoCarrinho = [...carrinho,novoItem];
		} else {
			novoCarrinho = [...carrinho];

			if(novoItem.quantidade > 0) {
				novoCarrinho[imagemIndex].quantidade = novoCarrinho[imagemIndex].quantidade + novoItem.quantidade;
			} else {
				if (novoCarrinho[imagemIndex].quantidade === 1) {
					novoCarrinho = novoCarrinho.filter(item => item.id !== novoItem.id);
				} else {
					novoCarrinho[imagemIndex].quantidade = novoCarrinho[imagemIndex].quantidade + novoItem.quantidade;
				}
			}
		}

		setCarrinho(novoCarrinho);
		
		setQuantidadeTotal(novoCarrinho.length);
	}

	return (
		<CarrinhoContext.Provider value={{carrinho,quantidadeTotal, atualizaCarrinho, atualizaQuantidadeTotal}}>
			{children}
		</CarrinhoContext.Provider>
	)
}