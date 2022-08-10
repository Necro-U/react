import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { useState } from 'react';
import UserConsumer from '../context';

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
  deleteUser = (dispatch,e)=>{
    const {id} = this.props
    dispatch({type:"DELETE_USER",payload:id})
    // console.log("sea")
    // onDelete(id)
  }


  render() {
    // destructing
    const {name,surname,salary,job} = this.props
    const {isvisible} = this.state

    return (
      <UserConsumer>
        {
          value => {
            const {dispatch} = value;
            return (
              <div>
                <div className="card" style={isvisible ? {backgroundColor:"darkcyan" , color:"white"} : null}>
                  <div className="card-header d-flex flex-row justify-content-between" >
                    <h4 className="card-text">{name} {surname}</h4>
                    <i className="fa-solid fa-caret-down" style={{cursor:"pointer"}} onClick={this.isShown}></i>
        
                  </div>
                  {/* card text */}
                  {
                    isvisible ? 
                  <div className="card-body d-flex justify-content-between">
                    <p className="card-text">{job}</p>
                    <p className='card-text'> {salary}</p>
                    <i className="fa-solid fa-trash" style={{cursor:"pointer"}} onClick={()=>this.deleteUser(dispatch)}></i>
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
      </UserConsumer>
    )

  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  id:PropTypes.string.isRequired
}

User.defaultProps = {
  name :"Ubeydullah",
  surname:"Önder",
  job : "Web Developer",
  salary : "4500",
  
}



export default User