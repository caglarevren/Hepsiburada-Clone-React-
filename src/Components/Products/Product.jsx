import React from 'react'

const Product = ({product, addToCart, productCount}) => {
  return (
    <div>
        <p>{product.title}</p>
        <p>{product.price}</p>
        {productCount > 0 ? (
            <button disabled>Bu ürünü sepete ekleyemezsiniz</button>
        ) : (
            <button onClick={() => addToCart(product.productId, product.title, 1)}>Sepete Ekle</button>
        )}
        
    </div>
  )
}

export default Product