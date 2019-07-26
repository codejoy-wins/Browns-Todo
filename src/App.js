import React from 'react'
// importing images
import obj from './obj.jpg'
import obj2 from './beckham.png'
import obj3 from './cleveland.jpg'
import todosData from './todoData'
import Todo from './Todo'
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
  }
  render(){
    console.log(this.state.todos)
    const todos = this.state.todos.map(todo=>{
      return (
        <Todo desc={todo.desc} key={todo.id}/>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo App 3</h1>
        </header>
        <main>{todos}
        <img className="widify" src={obj} alt="obj"></img>
        <img className="widify" src={obj2} alt="obj"></img>
        <img className="widify" src={obj3} alt="obj"></img>
  
        </main>
        <footer>
          <a href="https://maxjann.com">Jann Software</a>
        </footer>
      </div>
    );
  }
  
}

export default App;
