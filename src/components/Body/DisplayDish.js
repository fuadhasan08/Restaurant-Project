import React from 'react'
import Comments from './LoadComments'
const displayDishes = (props) => {
  return (
    <div>
      <div className='card text-left'>
        <div className='card-body'>
          <h5 className='card-title'>{props.dish.name}</h5>
          <a className='card-link' href='#'>
            {props.dish.category}
          </a>
          <p className='card-text'>{props.dish.label}</p>
          <p className='card-text'>{props.dish.price}</p>
          <p className='card-text'>{props.dish.description}</p>
        </div>
      </div>
      <Comments comment={props.dish.comments}></Comments>
    </div>
  )
}

export default displayDishes
