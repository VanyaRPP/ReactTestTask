import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/actions'
import st from './style.module.sass'

export const ModuleCard = ({ el }) => {

  const dispatch = useDispatch()

  const [valuecoverage, setValuecoverage] = useState(el.coverage.min)
  const [prise, setSetprise] = useState(0)

  const Buy = () => {
    prise !== 0 ?
      dispatch(addToCart({ id: Date.now(), name: el.name, coverage: valuecoverage, prise: prise })) :
      alert('Price!==0')
  }

  useEffect(() => {
    setSetprise(valuecoverage * el.risk)
  }, [el.risk, valuecoverage])

  return (
    <div className={st.ModCard}>
      <p>
        Risk {el.risk}
      </p>
      <p>
        Coverage {el.coverage.min}-{el.coverage.max}
      </p>
      <p>{valuecoverage}</p>
      <input
        id={el.name}
        type='range'
        min={el.coverage.min}
        max={el.coverage.max}
        onChange={e => setValuecoverage(e.target.value)}
      />
      <h3>{el.name}</h3>
      <h5>
        Prise {prise}
      </h5>
      <button onClick={() => Buy()}>
        Buy
      </button>
    </div>
  )
}