import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { useState } from 'react';


class User extends Component {

  
  
  constructor(props){
    super(props);

    this.state = {
      isvisible : false
    }
  }

  isShown=(e)=>{
    this.setState({
      isvisible:!this.state.isvisible
    })
    }
  deleteUser = (e)=>{
    // const {id,onDelete} = this.props
    // console.log("sea")
    // onDelete(id)
  }


  render() {
    // destructing
    const {id,name,surname,salary,job} = this.props
    const {isvisible} = this.state
    return (
      <div>
        <div className="card">
          <div className="card-header d-flex justify-content-between" >
            <h4 className="card-text">{name} {surname}</h4>
            <i className="fa-solid fa-caret-down" style={{cursor:"pointer"}} onClick={this.isShown}></i>

          </div>
          {/* card text */}
          {
            isvisible ? 
          <div className="card-body d-flex justify-content-between">
            <p className="card-text">{job}</p>
            <p className='card-text'> {salary}</p>
            <i className="fa-solid fa-trash" style={{cursor:"pointer"}} onClick={this.deleteUser}></i>
          </div> : null
}
        </div>

        {/* <h3>Class component</h3>
        <p>{classtitle}</p>
        <input type="button" value="Send" placeholder='gonder' />
        <button className='btn btn-primary'>button</button> */}
      </div>
    )
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,

}

User.defaultProps = {
  name :"Ubeydullah",
  surname:"Önder",
  job : "Web Developer",
  salary : "4500",

}



export default User