import React from 'react'
import Product from './Product'

function Products({products, rowClick}) {
  return (
    <div>
        <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
                {products.map((element) => (
                    <Product key={element.id} product={element} onClick={rowClick}></Product>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Products