import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';


class Classcomp extends Component {

  
  
  constructor(props){
    super(props);

    this.state = {
      isvisible : false
    }
  }

  isShown=(vis,e)=>{
    vis = !vis;
    console.log(this)
    console.log(vis)
    }

  render() {
    // destructing
    const {name,surname,salary,job} = this.props
    const {isvisible} = this.state
    return (
      <div>
        <div className="card">
          <div className="card-header d-flex justify-content-between" onClick={this.isShown.bind(this,isvisible)}>
            <h4 className="card-text">{name} {surname}</h4>
            <i className="fa-solid fa-caret-down"></i>
          </div>
          {
            isvisible ? 
          <div className="card-body d-flex justify-content-between">
            <p className="card-text">{job}</p>
            <p className='card-text'> {salary}</p>
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

Classcomp.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  isvisible:PropTypes.bool.isRequired

}

Classcomp.defaultProps = {
  name :"Ubeydullah",
  surname:"Önder",
  job : "Web Developer",
  salary : "4500",
  isvisible : false
}



export default Classcomp