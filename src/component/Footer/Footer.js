import React, { Component } from "react";
import './footer.css';
class Footer extends Component {
    render() {
        console.log(this.props)
        return ( < >
            <
            h1 className = "footer" > { this.props.title }: { this.props.number } < /h1> <
            h1 className = "footer" > { this.props.isON } < /h1> <
            / >

        )
    }
}

export default Footer;