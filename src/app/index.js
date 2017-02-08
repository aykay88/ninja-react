import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import {Router, Route, browserHistory, Link} from 'react-router'

// Module require

import TodoItem from './todoItem'
import AddItem from './addItem'
import About from './about'

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={TodoComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        );
    }
}

//Create component
class TodoComponent extends React.Component {
    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.state = {
            todos: [
                'wash up', 'eat some cheese', 'take a nap', 'pick some flowers'
            ],
            age: 30
        }
    }

    render() {

        var todos = this.state.todos;
        todos = todos.map((item, index) => {
            // spaltet state todos liste auf und erzeugt li einträge

            return (<TodoItem item={item} key={index} onDelete={this.onDelete}/>);

        }); // TodoItemComponent weiß sonst nicht was this ist

        return (
            <div id="todo-list">
                <Link to={'/about'}>About</Link>
                <p>
                    The busiest people have the most leisure....</p>

                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>
            </div>
        );

    } // render

    //Custom functions
    onDelete(item) {
        var updatedTodos = this.state.todos.filter(function(val, index) {
            return item !== val;
        });
        this.setState({todos: updatedTodos});
    }
    onAdd(item) {
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({todos: updatedTodos})
    }

    //lifecycle functions
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
        //any grabbing of external data
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
}

//put component into html page

ReactDOM.render(
    <App/>, document.getElementById('todo-wrapper'));
