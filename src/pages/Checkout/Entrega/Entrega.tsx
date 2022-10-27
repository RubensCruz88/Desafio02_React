import { MapPin } from "phosphor-react";
import { Campos, Container } from "./styles";

export function Entrega() {
	return (
		<Container>
			<div className='descricaoEntrega'>
				<MapPin size={22}/>
				<div>
					<h3>Endereço de Entrega</h3>
					<h4>Informe o endereço onde deseja receber seu pedido</h4>
				</div>
			</div>

			<Campos>
				<input placeholder='CEP' className='CEP' />
				<input placeholder='Rua' className='Rua' />
				<input placeholder='Numero' className='Numero'/>
				<input placeholder='Complemento' className='Complemento'/>
				<input placeholder='Bairro' className='Bairro'/>
				<input placeholder='Cidade' className='Cidade'/>
				<input placeholder='UF'className='UF' />
			</Campos>
		
		</Container>
	)
}

