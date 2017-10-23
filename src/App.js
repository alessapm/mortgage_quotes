import React, { Component } from 'react';
import './App.css';
import Axios from 'axios';
import FilterContainer from './FilterContainer';
import LendersContainer from './LendersContainer';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      loan_amount: 0,
      filterLender: '',
      filterTerm: '',
      filterRateType: '',
      loan_data: [],
      didSearch: false
    }
  }

  handleChange(e){
    this.setState({loan_amount: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    Axios.get(`http://morty.mockable.io/quotes?loan_amount=${this.state.loan_amount}`)
    .then(response => {
      this.setState({
        loan_data: response.data,
        didSearch: true
      })
    })
  }

  sortByMonthly(){
      function sort(x, y){
        if (x.monthly_payment < y.monthly_payment){
          return -1;
        }
        if (x.monthly_payment > y.monthly_payment){
          return 1;
        }
        return 0;
      }

    const sortedData = this.state.loan_data.sort(sort);
    this.setState({loan_data: sortedData})
  }

  filterLenders(e){
    // console.log('event.target.value: ', e.target.value)
    this.setState({filterLender: e.target.value})
  }

  filterTerms(e){
     this.setState({filterTerm: e.target.value})
  }

  filterRateTypes(e){
     this.setState({filterRateType: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="header">
            <h1> Mortgage Quote Generator</h1>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="enter loan amount" onChange={this.handleChange.bind(this)}/>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="filter-area">
            <FilterContainer filterRateTypes={this.filterRateTypes.bind(this)} filterTerms={this.filterTerms.bind(this)} filterLenders={this.filterLenders.bind(this)} sort={this.sortByMonthly.bind(this)}/>
          </div>
          <div className="lenders-area">
            <LendersContainer filterLender={this.state.filterLender} filterTerm={this.state.filterTerm} filterRateType={this.state.filterRateType} loan_data={this.state.loan_data} didSearch={this.state.didSearch}/>
          </div>
        </div>
      </div>
    );
  }
}
