import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { CartCard } from '../cartCard'

export const Cart = () => {

  const Cart = useSelector((state) => state.data.cart)
  const [FullPrise, setFullPrise] = useState(0)

  useEffect(() => {
    setFullPrise(Cart.reduce((a, b) => a + b.prise, 0))
  }, [Cart])


  return (
    <div>
      <h2>Cart {Cart.length}</h2>
      {
        Cart.length!==0?
        Cart.map(el => {
          return <CartCard item={el} key={el.id} />
        }):<h5>Choose your item...</h5>
      }
      <h3>FullPrise:{FullPrise}$</h3>
    </div>
  )
}
