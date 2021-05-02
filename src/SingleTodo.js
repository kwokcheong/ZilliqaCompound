import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

// class SingleTodo extends Component {
//     constructor() {
//         super();
//     }

//     render () {
//         return (
//             <li>{this.props.todo}<button onClick={this.props.delete}>X</button></li>
//         )
//     }
// }

const SingleTodo = props => {
    return (
        <li>{props.todo}<Button onClick={props.delete}>X</Button></li>
    );
}

export default SingleTodo;