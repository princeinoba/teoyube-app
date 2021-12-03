import React from 'react'
import './style.css'

function CardBtn({type, ...props}) {
  return (
    <div>
      <button className={`card-btn ${type}`} {...props} />
    </div>
  )
}

export default CardBtn
