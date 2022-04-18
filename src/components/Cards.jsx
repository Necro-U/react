import React from 'react'
import Items from './Items'

const Cards = ({data}) => {

  return (

    <div className='container'>
      <div className='row'>
            {data.map((item)=>(<Items key={data.id} name={item.name} price={item.price} link={item.link} />))}
      </div>
  </div>
  )
}

export default Cards