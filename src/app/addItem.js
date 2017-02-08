import React from 'react'
import './css/addItem.css'

export default class AddItem extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem"/>
                <input type="submit" value="Hit me"/>
            </form>
        );
    }
    //Custom functions
    handleSubmit(e) { //handles event
        e.preventDefault(); // prefent default, instead do:
        this.props.onAdd(this.refs.newItem.value);
    }

}
