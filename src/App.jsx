import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/main'
import { ProductsProvider } from './context/productContext'
import { CartProvider } from './context/cartContext';
import { AppProvider } from './context/appContext';
import './styles/libs/tailwind.css'

let root = document.getElementById('root')
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<AppProvider>
			<ProductsProvider>
				<CartProvider>
					<BrowserRouter>

						<Main />
					</BrowserRouter>
				</CartProvider>
			</ProductsProvider>
		</AppProvider>
	</React.StrictMode>
)

