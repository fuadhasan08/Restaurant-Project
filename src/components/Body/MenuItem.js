import React from 'react'

const MenuItem = (props) => {
  return (
    <div className='card'>
      <img
        className='card-img-top'
        src={props.dish.image}
        alt={props.dish.name}
      />
      <div className='card-body'>
        <h5
          className='card-title'
          onClick={() => props.onDishSelect(props.dish)}
        >
          {props.dish.name}
        </h5>
        <p className='card-text'>{props.dish.description}</p>
      </div>
    </div>
  )
}

export default MenuItem
