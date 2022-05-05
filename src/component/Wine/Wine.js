import React, { Component } from "react";
import './wine.css'
class Wine extends Component {
    render() {
        return < >
            <
            div className = "serab" >
            <
            h1 > { this.props.title } < /h1> <
            h2 > { this.props.description } < /h2>  <
            h3 > { this.props.rating } < /h3>  {this.props.islike ? < p ><img src="https:/ / img.icons8.com / ios - filled / 50 / 000000 / filled - like.png " /> < /p> : <p><img src="
        https: //img.icons8.com/color/48/000000/filled-like.png"/></p > } < /
            div > < />
    }
}

export default Wine;