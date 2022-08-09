import React from 'react'
import PropTypes from 'prop-types'


const Header = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h3 className='d-inline'>{props.name}</h3>
          <i class="fa-solid fa-trash"></i>
        </div>
      
      <div className="card-body">
      <h3 className='card-text'>{props.title}</h3>
      <p className='card-text'> {props.constant} </p> 
     </div>
     </div>
      </div>

  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  title  : PropTypes.string.isRequired,
  constant : PropTypes.string.isRequired
}

Header.defaultProps = {
  name:"Ubeydullah",
  title : "Function Components",
  constant : "constant"

}

export default Header