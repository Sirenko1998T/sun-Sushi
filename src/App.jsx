import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/main'
import { ProductsProvider } from './context/productContext'
import './styles/libs/tailwind.css'

let root = document.getElementById('root')
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<ProductsProvider>
			<BrowserRouter>

				<Main />
			</BrowserRouter>

		</ProductsProvider>
	</React.StrictMode>
)

