const List = ({ items, setItems }) => {
    const addOne = id => {
        const clone = [...items]
        clone[id].qte++
        setItems(clone)
    }

    const removeOne = id => {
        const clone = [...items]
        clone[id].qte--
        setItems(clone)
    }

    const remove = id => {
        const clone = [...items]
        clone.splice(id ,1)
        setItems(clone)
    }

    return <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Quantité</th>
                <th>Prix unitaire</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {
            items.map((item, id) => {
                return <tr key={id}>
                    <td>{ item.name }</td>
                    <td>{ item.qte }</td>
                    <td>{ item.price } €</td>
                    <td>
                        <button onClick={e => addOne(id)}>+1</button>
                        <button onClick={e => removeOne(id)} className="secondary">-1</button>
                        <button onClick={e => remove(id)} className="danger">Retirer</button>
                    </td>
                </tr>
            })
        }
        </tbody>
    </table>
}

export default List