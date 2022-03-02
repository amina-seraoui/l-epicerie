const List = ({ items, setItems }) => {
    const addOne = id => {
        const clone = [...items]
        clone[id].qte++
        setItems(clone)
    }

    const removeOne = id => {
        const clone = [...items]
        if (clone[id].qte > 0) clone[id].qte--
        setItems(clone)
    }

    const remove = id => {
        const clone = [...items]
        clone.splice(id ,1)
        setItems(clone)
    }

    const doSomething = e => {
        // to do
    }

    return <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Quantité</th>
                <th>Prix</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        {
            items.map((item, id) => {
                return <tr key={id}>
                    <td>{ item.name }</td>
                    <td className={item.qte > 0 ? '' : 'danger'}>{ item.qte > 0 ? item.qte : 'Rupture de stock' }</td>
                    <td>{ item.price } €</td>
                    <td>
                        <button onClick={e => addOne(id)}><span>+1</span></button>
                        <button onClick={e => removeOne(id)} className="secondary"><span>-1</span></button>
                        <button onClick={e => remove(id)} className="danger"><span>Retirer</span></button>
                        { item.qte > 0 ? null : <button onClick={doSomething}><span>Recommander</span></button> }
                    </td>
                </tr>
            })
        }
        </tbody>
    </table>
}

export default List