import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import './App.css'
import { Product } from './components/Product'

const LOAD_PRODUCT_LIST = gql`
  {
    product: fetchProducts {
      id
      name
      price
      url
    }
  }
`

function App() {
  const { data, loading, error } = useQuery(LOAD_PRODUCT_LIST)

  console.log('data', data)
  if (loading) return <h4>Loading ...</h4>
  if (error) return <h4>{error}</h4>
  return <div className="App">{data && <Product product={data.product} />}</div>
}

export default App
