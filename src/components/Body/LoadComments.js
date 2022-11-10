import React from 'react'
import dateFormat from 'dateformat'

const Comments = (props) => {
  return props.comment.map((comment) => {
    return (
      <div className='singleComment'>
        <h2>{comment.author}</h2>
        <p>{comment.comment}</p>
        <p>{comment.rating}</p>
        <p>{dateFormat(comment.date, 'mmmm d, yyyy h:MM TT')}</p>
      </div>
    )
  })
}

export default Comments
