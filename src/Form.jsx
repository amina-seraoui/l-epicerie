import {useState} from 'react'

const Form = ({ setItems }) => {
	const [name, setName] = useState('');
	const [qte, setQte] = useState(1);
	const [price, setPrice] = useState('');

	const handleSubmit = e => {
		e.preventDefault()
		if (name !== '' && price.match(/\d/) && qte >= 0) {
			setItems(prev => {
				const clone = [...prev]
				clone.push({name, qte: parseInt(qte), price})
				return clone
			})
			setName('')
			setQte(0)
			setPrice('')
		} else {
			console.log('Données invalides : veuillez saisir un nom, une quantité positive et un prix valide')
		}
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
