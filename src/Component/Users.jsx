import React, { Component } from 'react'
import User from './User'
import UserConsumer from '../context'

export default class Users extends Component {
  render() {

    return ( 
        <UserConsumer>
        {
            value => {
                const  {users} = value
                return (
                  <div>
                    {users.map(user=>{
                        
                        
                        
                        return (
                        <User key={user.id} id={user.id} name={user.name} surname={user.surname} job={user.job} salary={user.salary} />
                        
                        )
                    })}
                  </div>
                )
            }
        }
        </UserConsumer>
    )


}
}
