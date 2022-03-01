import React, { useState } from "react";
import logo from "../Assets/logo.svg";
import magnifyingGlass from "../Assets/magnifyingGlass.svg";

const Nav = ({ cart, searchProduct, removeFromCart }) => {
    const [showCart, setShowCart] = useState(false);

    return (
        <nav className='navbar__outer__container'>
            <div className='container navbar'>
                <a href='/'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='navbar__search'>
                    <img src={magnifyingGlass} alt='magnifying glass' />
                    <input
                        type='text'
                        placeholder='25 milyon’dan fazla ürün içerisinde ara'
                        onChange={(e) => searchProduct(e.target.value)}
                    />
                </div>
                <button
                    className='navbar__addToCart'
                    onClick={() => setShowCart(!showCart)}
                >
                    Sepetim{" "}
                    <span className='navbar__addToCart--products'>
                        {cart.length}
                    </span>
                </button>
                {cart.map((c) => (
                    <div key={c.productId}>
                        <p>{c.productTitle}</p>
                        <button onClick={() => removeFromCart(c.productId)}>
                            X
                        </button>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Nav;
