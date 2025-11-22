import React from 'react'
import ReactDOM from 'react-dom/client'
import ScrollTop from './components/scroll-top';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/main'
import { ProductsProvider } from './context/productContext'
import { CartProvider } from './context/cartContext';
import { AppProvider } from './context/appContext';
import { UserProvider } from './context/userContext';
import './styles/libs/tailwind.css'

let root = document.getElementById('root')
ReactDOM.createRoot(root).render(
	<React.StrictMode>

		<UserProvider>
			<AppProvider>
				<ProductsProvider>
					<CartProvider>
						<BrowserRouter>
							<ScrollTop />
							<Main />
						</BrowserRouter>
					</CartProvider>
				</ProductsProvider>
			</AppProvider>
		</UserProvider>


	</React.StrictMode>
)

