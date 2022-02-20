import React, { useEffect, useState } from 'react';
import './App.css';
import data from './Data/products.js'
// Components
import Products from './Components/Products/Products';
import Nav from './Components/Nav';

function App() {
  const [products, setProducts] = useState(data)
  const [cart, setCart] = useState([])
  const [filteredProducts, setFilteredProducts] = useState(data)

  useEffect(() => {
    getLocalStr()
  }, [])

  useEffect(() => {
    saveLocalStr()
  }, [cart])

  function addToCart(id, productTitle, count) {
    setCart([...cart, { productId: id, productTitle: productTitle, count: count }])
  }

  function removeFromCart(id) {
    setCart(cart.filter((c) => {
      return c.productId !== id;
    }))
  }

  function saveLocalStr() {
    localStorage.setItem('cart', JSON.stringify(cart))
  }

  function getLocalStr() {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify(cart))
    } else {
      let cartProducts = JSON.parse(localStorage.getItem('cart', JSON.stringify(cart)))
      setCart(cartProducts)
    }
  }

  function searchProduct(searchedText) {
    if (searchedText.length >= 3 || searchedText.length === 0) {
      setFilteredProducts(products.filter((product) => {
        return product.title.toLowerCase().includes(searchedText.toLowerCase())
      }))
    }
  }

  function sortProduct(val) {
    if(val === 'min') {
      setFilteredProducts([...products].sort((a, b) => {
        return a.price - b.price
      }))
    }
    
    if(val === 'max') {
      setFilteredProducts([...products].sort((a, b) => {
        return b.price - a.price
      }))
    }

    if(val === 'abc') {
      setFilteredProducts([...products].sort((a, b) => {
        return a.title.localeCompare(b.title)
      }))
    }

    if(val === 'cba') {
      setFilteredProducts([...products].sort((a, b) => {
        return b.title.localeCompare(a.title)
      }))
    }
  }

  return (
    <>
      <Nav cart={cart} searchProduct={searchProduct} removeFromCart={removeFromCart} />
      <Products products={filteredProducts} addToCart={addToCart} cart={cart} sortProduct={sortProduct} />
    </>
  )
}

export default App;
