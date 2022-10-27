import { Badge, Cart, HeaderContainer, Location } from './styles';
import logo from '../../images/Logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { CarrinhoContext } from '../../contexts/CarrinhoContext';
import { NavLink } from 'react-router-dom';

export function Header() {
	const { quantidadeTotal } = useContext(CarrinhoContext);
	const exibeBadge = !quantidadeTotal

	return (
		<HeaderContainer>
			<NavLink to="/" end >
					<img src={logo} alt="" />
			</NavLink>
			<div>
				<Location>
					<MapPin weight='fill'size={22} />
					<span>Rio de Janeiro, RJ</span>
				</Location>
				
				<NavLink to="/checkout" >
					<Cart>
						<ShoppingCart weight='fill' size={22}/>
						<Badge hidden={exibeBadge}>{quantidadeTotal}</Badge>
					</Cart>
				</NavLink>
			</div>
		</HeaderContainer>
	)

}