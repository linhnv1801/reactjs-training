import React from 'react'
import Button from './Button'

function Product({product, onClick}) {
  return (
      <tr>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
        <td>{product.brand}</td>
        <td>
          <Button  color="red" text="Edit"  onClick={onClick}></Button>
          <Button color="green" text="Delete"></Button>
        </td>
      </tr>
  )
}

export default Product;