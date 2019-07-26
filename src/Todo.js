import React from 'react'
import todosData from './todoData';

function Todo(props){
    const regularStyle ={
        display: "inline-block"
    }
    const completedStyle = {
        display: "inline-block",
        color: "brown",
        textDecoration: "line-through"

    }
    return (
        <div>
            <input checked = {props.completed} onChange={()=>props.handleClick(props.id)} type="checkbox"></input>
            <h3 style={props.completed ? completedStyle : regularStyle}>{props.desc}</h3>
        </div>
    )
}

export default Todo