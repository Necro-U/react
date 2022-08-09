import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
// import User from './Component/User';
import Users from './Component/Users';
// import Proptypes from 'prop-types'
import { useState } from 'react';

function App() {

  // var  users = 
  //   [
  //     {
  //   id:1,
  //   name:"Ubeydullah",
  //   surname: "Önder",
  //   job:"Web Developer",
  //   salary:"4000$"
  //     }  ,
  //     {
  //   id:2,
  //   name:"Mahmut",
  //   surname: "Önder",
  //   job:"İmam",
  //   salary:"4000tl"
  //         }  ,
  //     {
  //     id:3,
  //     name:"Fatma Zehra",
  //     surname: "Önder",
  //     job:"Öğrenci",
  //     salary:"0"
  //        }  
  //   ] 



  // console.log(users)
  // const delete_user = (id) => {
  //   console.log("ASE")
  //   setUsers(users.filter(user => id !== user.id))
  //   console.log(users)
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className='container'>
      {/* <Header /> */}
      <Users />
      </div> 
    </div>
  );
}

export default App;
