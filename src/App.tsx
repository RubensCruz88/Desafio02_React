import { ThemeProvider } from 'styled-components'
import { Header } from './components/Header/Header';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { CarrinhoContextProvider } from './contexts/CarrinhoContext';

function App() {

  return (
	<ThemeProvider theme={defaultTheme}> 
		<BrowserRouter>
			<CarrinhoContextProvider>
				<Router />
			</CarrinhoContextProvider>
		</BrowserRouter>

		<GlobalStyle />
	</ThemeProvider>
  )
}

export default App
