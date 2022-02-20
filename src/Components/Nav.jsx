import React from 'react'

const Nav = ({ cart, searchProduct, removeFromCart }) => {
    return (
        <>
            <input type="text" onChange={(e) => searchProduct(e.target.value)} />
            <div>Sepet {cart.length}</div>
            {cart.map((c) => (
                <div key={c.productId}>
                    <p >{c.productTitle}</p>
                    <button onClick={() => removeFromCart(c.productId)}>X</button>
                </div>
            ))}
        </>
    )
}

export default Nav