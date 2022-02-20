import React from 'react'
import Product from './Product'

const Products = ({ products, addToCart, cart, sortProduct }) => {
    return (
        <div>
            <select onChange={(e) => sortProduct(e.target.value)}>
                <option>Seçiniz</option>
                <option value="min">En Düşük Fiyat</option>
                <option value="max">En Yüksek Fiyat</option>
                <option value="abc">En Yeniler (A-Z)</option>
                <option value="cba">En Yeniler (Z-A)</option>
            </select>
            {products.map((product) => (
                <Product key={product.productId} product={product} addToCart={addToCart} productCount={cart.filter((c) => c.productId === product.productId)[0]?.count} />
            ))}
        </div>
    )
}

export default Products