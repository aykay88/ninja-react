var React = require('react');

var ReactDOM = require('react-dom');
require('./css/index.css')

// Module require

var TodoItem = require('./todoItem')

//Create component
var TodoComponent = React.createClass({
    getInitialState: () => {
        return {
            todos: [
                'wash up', 'eat some cheese', 'take a nap', 'pick some flowers'
            ],
            age: 30
        }
    },
    render: function() {

        var todos = this.state.todos;
        todos = todos.map(function(item, index) {
            // spaltet state todos liste auf und erzeugt li einträge

            return (<TodoItem item={item} key={index} onDelete={this.onDelete}/>);

        }.bind(this)); // TodoItemComponent weiß sonst nicht was this ist

        return (
            <div id="todo-list">
                <p>
                    The busiest people have the most leisure....</p>

                <ul>{todos}</ul>
            </div>
        );

    }, // render

    //Custom functions
    onDelete: function(item) {
        var updatedTodos = this.state.todos.filter(function(val, index) {
            return item !== val;
        });
        this.setState({todos: updatedTodos});
    }
});

//put component into html page

ReactDOM.render(
    <TodoComponent/>, document.getElementById('todo-wrapper'));
