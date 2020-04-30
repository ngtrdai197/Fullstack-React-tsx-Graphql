import React from 'react'
import { IProduct } from '../interfaces/product.interface'

interface Props {
  product: IProduct
}

export const Product: React.FC<Props> = ({ product }) => {
  return (
    <ul>
      <li>{product.id}</li>
      <li>{product.name}</li>
      <li>{product.price}</li>
      <li>{product.url}</li>
    </ul>
  )
}

Product.defaultProps = {
  product: {
    id: '',
    name: '',
    price: 0,
    url: '',
  },
}
