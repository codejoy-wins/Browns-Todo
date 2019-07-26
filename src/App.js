import React from 'react';
// Assuming logo.png is in the same folder as JS file
import obj from './obj.jpg';
import obj2 from './beckham.png';
import obj3 from './cleveland.jpg';


// ...later
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App 3</h1>
      </header>
      <main>Main Content
      <img class="widify" src={obj} alt="obj"></img>
      <img class="widify" src={obj2} alt="obj"></img>
      <img class="widify" src={obj3} alt="obj"></img>

      </main>
      <footer>
        <a href="https://maxjann.com">Jann Software</a>
      </footer>
    </div>
  );
}

export default App;
