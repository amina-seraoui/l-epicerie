import {useState} from 'react'

const Form = ({ setItems }) => {
	const [name, setName] = useState('');
	const [qte, setQte] = useState(0);
	const [price, setPrice] = useState('');

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

	return <form onSubmit={handleSubmit}>
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
}

export default Form
