var React = require('react');

var ReactDOM = require('react-dom');


/*
+++++++++++++++++++props beispiel++++++++++++

//Create component
var TodoComponent = React.createClass({
    render: function() {
        return (
          <div>
          <h1>jsx behind the scenes</h1>
          <p> 2. tag</p>
          <p> {this.props.mssg}</p>
<p> <strong>Cheese name:</strong>{this.props.cheese.name}</p>
<p> <strong>Cheese smell:</strong>{this.props.cheese.smellFactor}</p>
<p> <strong>Cheese price:</strong>{this.props.cheese.price}</p>
          </div>
        );

    }
});

var myCheese = {name:'Camonbert', smellFactor:' Extreme pong', price:'2.50' }
//put component into html page

ReactDOM.render(<TodoComponent mssg="i like cheese" cheese={myCheese}/>,document.getElementById('todo-wrapper'));
*/


//Create component
var TodoComponent = React.createClass({
getInitialState: ()=> {
  return {
    todos: ['wash up','eat some cheese','take a nap'],
    age:30
  }
},
    render: function() {
      /*
      +++++Change+++++++
      var ager = setTimeout( function(){
        this.setState({
          age:35
        })
      }.bind(this),5000);
      */
        return (
          <div id="todo-list">
            <p> The busiest people have the most leisure....</p>
            <p> {this.state.age}</p>
            <ul>
              <li>{this.state.todos[0]}</li>
              <li>{this.state.todos[1]}</li>
              <li>{this.state.todos[2]}</li>
            </ul>
          </div>
        );

    } // render
});

//put component into html page

ReactDOM.render(<TodoComponent />,document.getElementById('todo-wrapper'));
