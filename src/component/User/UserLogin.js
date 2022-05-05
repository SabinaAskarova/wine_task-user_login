import React, { Component } from 'react'

export default class UserLogin extends Component {
    state = {
        email: '',
        password: ''
    }
    inputChange = (event) => {
        if (event.target.type == 'text') {
            this.setState({
                email: event.target.value
            })

        } else if (event.target.type == 'password') {
            this.setState({
                password: event.target.value

            })
        }

    }
    handleSubmit = (e) => {
        if (this.state.password.length < 8) {
            alert('en azi 8simvol olmalidir!')
        } else {
            alert('sucess login')
        }
    }

    render() {
        return ( <
            >
            <
            form >
            <
            input type = "email"
            onChange = { this.inputChange }
            / > <
            input type = "password"
            onChange = { this.inputChange }
            / > <
            button onClick = { this.handleSubmit } > Submit < /button> < /
            form > <
            />
        )
    }
}