import { useState } from 'react';

function MyCart() {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div>
            <button class="btn btn-primary btn-sm" onClick={() => setIsOpen(false)}>Close</button>
            <br/>
            <br/>
            <h4>Mon panier</h4>
            <br/>
            <div>
                Prix d'une plante Monstera: {monsteraPrice}€
                <br/>
                <br/>
                <button class="btn btn-primary btn-sm" onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
                <br/>
                <br/>
                <button class="btn btn-primary btn-sm" onClick={() => updateCart(cart - 1)}>
                    Enlever
                </button>
                <br/>
                <br/>
            </div>
            <h4>Total: {monsteraPrice * cart}€</h4>
            <br/>
        </div>
) : (
        <div>
            <button class="btn btn-primary btn-sm" onClick={() => setIsOpen(true)}>Open Cart</button>
            <br/>
        </div>
    )
}
export default MyCart


/* A good example of Hooks [] and states in React */