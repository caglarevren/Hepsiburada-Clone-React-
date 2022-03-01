import React from "react";
import Product from "./Product";

const Products = ({ products, addToCart, cart }) => {
    return (
        <div className='products'>
            {products.map((product) => (
                <Product
                    key={product.productId}
                    product={product}
                    addToCart={addToCart}
                    productCount={
                        cart.filter((c) => c.productId === product.productId)[0]
                            ?.count
                    }
                />
            ))}
        </div>
    );
};

export default Products;
