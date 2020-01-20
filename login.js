import React,{Component} from "react";
import {render} from "react-dom";

export class Login extends Component{
navigateHome(){
  console.log(this.props);
    this.props.navigation.navigate("/home");
  }
render(){

  
  return (
    <div>Login
    <button onClick={()=>{this.props.history.push("/home")}}>Login1</button>
     <button onClick={()=>{this.navigateHome.bind(this)}}>Login2</button>
    </div>
    
  );
}

}