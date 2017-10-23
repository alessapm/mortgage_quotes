import React, { Component } from 'react';
import Filter from './Filter';

export default class FilterContainer extends Component {


  render(){
    return(
      <div className="filter-container">
        <button className="sort-btn" onClick={this.props.sort}> Sort by Monthly Payment</button>
        <h3>Apply Filters</h3>
        <div className="filters">
          <Filter filterLenders={this.props.filterLenders} title="Lender" op1="Apple Bank" op2="Banana Lender"/>
          <Filter title="Term" op1="15 Years" op2="30 Years"/>
          <Filter title="Rate Type" op1="Fixed" op2="Adjustable"/>
        </div>
      </div>
    )
  }
}
