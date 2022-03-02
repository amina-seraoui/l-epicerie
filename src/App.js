// import logo from './logo.svg';
import './css/style.scss'
import List from './List'
import Form from './Form'
import { useState } from 'react'

const App = () => {
	const [items, setItems] = useState([
		{name: 'Lait', qte: 5, price: '3.2'},
		{name: 'Pain', qte: 20, price: '1.2'},
		{name: 'Œuf', qte: 30, price: '0.8'},
	])

	return <>
		<header>
			<a href="/" className="logo"><img src="logo.svg" alt="Store logo"/><h1>Administration</h1></a>
			<span>Nombre total de produits : {
				items.reduce((prev, item) => {
					return prev + parseInt(item.qte)
				}, 0)
			}</span>
		</header>
		<main>
			<section>
				<h2>Produits en stock</h2>
				<List items={items} setItems={setItems}/>
			</section>
			<section>
				<h2>Ajouter un nouveau produit</h2>
				<Form setItems={setItems} />
			</section>
		</main>
	</>
}

export default App
