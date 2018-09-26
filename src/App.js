import React from 'react';
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  constructor() {
    super();

    this.state = { 
      todos: [
        {
          task: 'Give the dog a bath',
          id: 1,
          completed: false,
        }, {
          task: 'Paint the walls',
          id: 2,
          completed: false,
        }
    ]
  }
}

// Need a function to add a new todo object to the todo array
addToDo = (newTask, id) => {
  // Create a new todo object based on a given task and id
  const todo = {
    task: `${newTask}`,
    id: id,
    completed: false,
  }

  // Get the todo array and add the new todo to the end using push()
  const todos = this.state.todos;
  todos.push(todo)

  // Set the current state with the new todo array
  this.setState({todos})
}

// Need a handler that takes the input from the form and creates new todo
addToDoHandler = (element) => {

  // This prevents the page from being refreshed, otherwise you lose everything when you submit
  element.preventDefault();

  // Get the input from the node immediately preceding the current one. See: https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling
  const input = element.target.previousSibling.value;
  
  // Set the current date as the id for the todo
  const id = Date.now();

  // Return the newly created object and set the state with it using addToDo function
  return this.addToDo(input, id)
}

// Need a function that toggles the task as a completed or unfinished
toggleComplete = (element) => {

    // Get the current todo (the one being clicked)
    const current = element.target;
    console.log(current.id)
    
    // Get the todo array so that the completed state of the current todo can be toggled between true and false.
    // Iterate through using .map
    const todos = this.state.todos.map(todo => {
      console.log(todo.id)
      // Check if current todo matches the todo id
      if (current.id === todo.id) {
        // Add a class that strikes through the word
        current.classList.toggle('completed');

        // Sets completed to whatever the opposite value is
        todo.completed = !todo.completed;
      }

      // Just return the todo if it doesn't match the current target
      return todo;
    });

     // Set the current state with the new todo array
    this.setState({todos})
}

// Need a function that removes completed todos
removeComplete = (element) => {

    // This prevents the page from being refreshed, otherwise you lose everything when you submit
    element.preventDefault();

}

  render() {
    return (
      <div>
        <h1>ToDo List: MVP</h1>
        <TodoList key={this.state.todos.id} list={this.state.todos} submit={this.addToDoHandler} toggleComplete={this.toggleComplete} removeComplete={this.removeComplete} />
      </div>
    );
  }
}

export default App;

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
