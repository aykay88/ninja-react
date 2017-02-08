import React from 'react'
import {Link} from 'react-router'


export default class About extends React.Component {
  render() {
    return(
      <div>
      <Link to={'/'}>Index</Link>
      <h2> All about me</h2>
      </div>
    );
  }
}
