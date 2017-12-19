import React, { Component } from 'react';

export default class Filter extends Component {

  render(){
    if (this.props.title === "Term"){
      return(
        <div className="filter">
          <p>{this.props.title}:</p>
          <select onChange={this.props.filterTerms}>
            <option value="none">No Filter</option>
            <option value={this.props.op1}>{this.props.op1} Years</option>
            <option value={this.props.op2}>{this.props.op2} Years</option>
          </select>
        </div>
      )
    }
    if (this.props.title === "Rate Type"){
      return(
        <div className="filter">
          <p>{this.props.title}:</p>
          <select onChange={this.props.filterRateTypes}>
            <option value="none">No Filter</option>
            <option value={this.props.op1}>{this.props.op1}</option>
            <option value={this.props.op2}>{this.props.op2}</option>
          </select>
        </div>
      )
    }

    return(
      <div className="filter">
            <p>{this.props.title}:</p>
            <select onChange={this.props.filterLenders}>
              <option value="none">No Filter</option>
              <option value={this.props.op1}>{this.props.op1}</option>
              <option value={this.props.op2}>{this.props.op2}</option>
            </select>
      </div>
    )
  }
}


