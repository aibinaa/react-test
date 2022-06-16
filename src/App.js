import React from 'react';
import listSvg from './assets/icons/list.svg'

function App() {
  return <div className="todo">
    <div className="todo_sidebar">
      <ul className="todo_list">
        <li>
          <i>
            <img src={listSvg} alt='icon list'/>
          </i>
          <span>All Tasks</span>
        </li>
      </ul>
    </div>
    <div className="todo_tasks">

    </div>
  </div>
}

export default App;
