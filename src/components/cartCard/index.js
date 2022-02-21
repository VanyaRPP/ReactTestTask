import React from 'react'
import { useDispatch } from 'react-redux'
import { delFromCart } from '../../store/actions'
import st from './style.module.sass'

export const CartCard = ({ item }) => {

  const dispatch = useDispatch()

  const delItem = () => {
    dispatch(delFromCart(item.id))
  }

  return (
    <>
      <div className={st.listItem}>
        <strong>{item.name}-{item.coverage}</strong>
        <span>{item.prise}$</span>
        <button
          className={st.btn_delete}
          onClick={() => delItem()}
        >
          Del
        </button>
      </div>
    </>
  )
}
