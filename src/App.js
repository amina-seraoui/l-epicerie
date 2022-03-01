// import logo from './logo.svg';
import './css/style.scss'
import List from './List'
import { useState } from 'react'

const App = () => {
	const [name, setName] = useState('');
	const [qte, setQte] = useState(0);
	const [price, setPrice] = useState('');
	const [items, setItems] = useState([
		{name: 'Lait', qte: 5, price: '3.2'},
		{name: 'Pain', qte: 20, price: '1.2'},
		{name: 'Œuf', qte: 30, price: '0.8'},
	])
	const handleSubmit = e => {
		e.preventDefault()

		setItems(prev => {
			const clone = [...prev]
			clone.push({name, qte, price})
			return clone
		})
		setName('')
		setQte(0)
		setPrice('')
	}
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
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Nom du produit" value={name} onChange={
						(e) => setName(e.target.value)
					}/>
					<input type="number" placeholder="Quantité" value={qte} onChange={
						(e) => setQte(e.target.value)
					}/>
					<input type="text" placeholder="Prix (en €)" value={price} onChange={
						(e) => setPrice(e.target.value)
					}/>
					<input type="submit" value="Ajouter"/>
				</form>
			</section>
		</main>
	</>
}

export default App
