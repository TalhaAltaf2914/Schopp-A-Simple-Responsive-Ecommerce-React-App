import React from 'react'
import Product from './Product'

const Products = ({products, setProducts}) => {
  return (
    <section className='mt-20 px-4 flex flex-col gap-y-20 md:px-14 lg:px-28 md:grid md:grid-cols-2 md:gap-x-10 lg:grid-cols-4 lg:gap-x-6 xl:gap-x-24'>
        {products.map(product=>(
          <Product key={product.id} product={product}/>
        ))}
    </section>
  )
}

export default Products