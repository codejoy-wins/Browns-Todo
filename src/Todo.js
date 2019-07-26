import React from 'react'

function Todo(props){
    return (
        <div>
            <input type="checkbox"></input>
            <h3 style={{display: "inline-block"}}>{props.desc}</h3>
        </div>
    )
}

export default Todo