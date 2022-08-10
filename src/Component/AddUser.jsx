import React, { Component } from 'react'
import posed from 'react-pose'

const Animation  = posed.div({
    visible:{
        opacity:1,
        applyAtStart:{
            display:"block"
        }
    },
    hidden : {
        opacity:0,
        applyAtEnd:{
            display:"none"
        }
    }
})



export default class AddUser extends Component {

    state = {
        visible:false,
        name:"",
        surname:"",
        job:"",
        salary:"",
    }

    changeVisibilitiy = (e)=>{
        this.setState({
            visible : !this.state.visible
        })
    }
    changeInput = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    // changeName = (e)=>{
    //     this.setState({
    //         name: e.target.value
    //     })
    // }
    // changeSurname = (e)=>{
    //     this.setState({
    //         surname: e.target.value
    //     })
    // }
    // changeJob = (e)=>{
    //     this.setState({
    //         job: e.target.value
    //     })
    // }
    // changeSalary = (e)=>{
    //     this.setState({
    //         salary: e.target.value
    //     })
    // }

  render() {
    const {visible,name,surname,salary,job} = this.state
    return (
        
      <div className='col mb-4 justify-content-start'>

        <div className="d-grid gap-2 mx-auto my-2">
        <button onClick={this.changeVisibilitiy} className="btn btn-dark">{ visible ? "Hide Form" : "Show Form"}</button>
        </div>
        <Animation pose = {visible ? "visible":"hidden"}>
         <div className="card">
            <div className="card-header">
                <h4>Add User</h4>
            </div>
            <div className="card-body">
                <form >
                    <div className="form-group">
                        <label htmlFor="name">name</label>
                        <input type="text" name='name' id='id' className='form-control' value={name} onChange={this.changeInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="surname">surname</label>
                        <input type="text" name='surname' id='id2' className='form-control' value={surname} onChange={this.changeInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="job">Departmant</label>
                        <input type="text" name='job' id='id3' className='form-control' value={job} onChange={this.changeInput} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="salary">salary</label>
                        <input type="text" name='salary' id='id4' className='form-control' value={salary} onChange={this.changeInput} />
                    </div>
        <hr />
                    <div className="d-grid gap-2 mx-auto">
                    <button className="btn btn-danger btn-block" type='submit'>Add User</button>
                    </div>
                </form>
            </div>
        </div>   
        </Animation>
    </div>
    )
  }
}