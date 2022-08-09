import React,{Component} from "react";

const UserContext= React.createContext()


export class UserProvider extends Component {
    state = {
        users :[
        {
      id:1,
      name:"Ubeydullah",
      surname: "Önder",
      job:"Web Developer",
      salary:"4000$"
        }  ,
        {
      id:2,
      name:"Mahmut",
      surname: "Önder",
      job:"İmam",
      salary:"4000tl"
            }  ,
        {
        id:3,
        name:"Fatma Zehra",
        surname: "Önder",
        job:"Öğrenci",
        salary:"0"
           }  
      ]}
  render() {
    return (
        <UserContext.Provider value={this.state}>
            {this.props.children}
        </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer

export default UserConsumer