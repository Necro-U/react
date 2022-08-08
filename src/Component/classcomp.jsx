import React, { Component } from 'react'

export default class Classcomp extends Component {
  render() {
    return (
      <div>
        <h3>Class component</h3>
        <input type="button" value="Send" placeholder='gonder' />
        <button className='btn btn-primary'>button</button>
      </div>
    )
  }
}
