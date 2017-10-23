import React, { Component } from 'react';
import Filter from './Filter';

export default class FilterContainer extends Component {


  render(){
    return(
      <div className="filter-container">
        <button className="sort-btn" onClick={this.props.sort}> Sort by Monthly Payment</button>
        <div className="filters">
          <Filter filterLenders={this.props.filterLenders} title="Lender" op1="Apple Bank" op2="Banana Bank"/>
          <Filter filterTerms={this.props.filterTerms} title="Term" op1="15" op2="30"/>
          <Filter filterRateTypes={this.props.filterRateTypes} title="Rate Type" op1="fixed" op2="adjustable"/>
        </div>
      </div>
    )
  }
}
