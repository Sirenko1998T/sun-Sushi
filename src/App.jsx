import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/main'
import './styles/libs/tailwind.css'

let root = document.getElementById('root')
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<Main />
	</React.StrictMode>
)

