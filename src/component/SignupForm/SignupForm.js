import React, { Component } from "react";
import "./signup.css";
export default class SignupForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    isChecked: false,
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  };

  handleClick = (event) => {
    this.setState({
      [event.target.name]: "",
    });

    console.log(this.state);
  };

  handleCheckboxChange = (event) => {
   this.setState({
     isChecked:!this.state.isChecked
   })
   console.log(this.state.isChecked)
    }
 
  render() {
    return (
      <div className="signup">
        <h1> SignupForm </h1> <label> Name: </label>{" "}
        <input  type="name" value={this.state.name} name="name" onChange={this.handleChange}/>
        <button name="name" onClick={this.handleClick}>X</button>
        <br />
        <label> EMail: </label>
        <input type="email"  name="email" value={this.state.email} onChange={this.handleChange} />
        <button name="email" onClick={this.handleClick}>X</button>
        <br />
        <label> Password: </label>
        <input  type={this.state.isChecked?"text":"password"} name="password" value={this.state.password} onChange={this.handleChange}/>
        <button name="password" onClick={this.handleClick}>X</button>
        <br />
        <label>Show/Hide Password</label>
        <input name="password" type="checkbox" checked={this.state.isChecked}  onChange={this.handleCheckboxChange}/>
        <br/>
        <button>Save</button>
      </div>
    );
  }
}
