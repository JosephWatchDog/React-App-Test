const plantList = [
    {
    name: 'Monstera',
    category: 'Classic',
    id: '1ed',
    isBestSale: true
    },
    {
    name: 'Ficus Lyrata',
    category: 'Unique',
    id: '2ai',
    isBestSale: false
    },
    {
    name: 'Silver Pothos',
    category: 'Unique',
    id: '8ut',
    isBestSale: true
    },
    {
    name: 'Yucca',
    category: 'Classic',
    id: '5sq',
    isBestSale: false
    }

]

function ShoppingList() {
    return (
        <ul>
            {plantList.map((plant) => (
                <li key={plant.id}>
                    La plante {plant.name} est {plant.isBestSale ? <span>🔥</span> : <span>👎</span>}
                </li>
            ))}
        </ul>
    )
}

export default ShoppingList

/* Either we treat JSON files this way, by inserting, treating and exporting them in a JSX file */
/* which is very efficient and clear */