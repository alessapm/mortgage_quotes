import React, { Component } from 'react';


export default class Filter extends Component {

  render(){
    return(
      <div className="filter">
            <p>{this.props.title}</p>
            <select onChange={this.props.filterLenders}>
              <option value="none">None</option>
              <option value={this.props.op1}>{this.props.op1}</option>
              <option value={this.props.op2}>{this.props.op2}</option>
            </select>
      </div>
    )
  }
}


