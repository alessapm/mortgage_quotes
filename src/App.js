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
      didSearch: false,
      loan_display: '',
      load_screen: false
    }
  }

  handleChange(e){
    this.setState({loan_amount: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    Axios.get(`https://morty.mockable.io/quotes?loan_amount=${this.state.loan_amount}`)
    .then(response => {
      let amount_num = parseInt(this.state.loan_amount, 10);
      let amount_formatted = amount_num.toLocaleString();
      this.setState({
        loan_data: response.data,
        didSearch: true,
        loan_display: `$${amount_formatted}`
      });
      document.getElementById("form").reset()
    })
     this.setState({load_screen: true})

    window.setTimeout(() => {
      this.setState({load_screen: false})
    }, 1000)
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

     this.setState({load_screen: true})

    window.setTimeout(() => {
      this.setState({load_screen: false})
    }, 800)
  }

  filterLenders(e){
    // console.log('event.target.value: ', e.target.value)

    if (e.target.value === 'none'){
      this.setState({filterLender: ''})
    } else {
      this.setState({filterLender: e.target.value})
    }

    this.setState({load_screen: true})

    window.setTimeout(() => {
      this.setState({load_screen: false})
    }, 1100)

  }

  filterTerms(e){
    if (e.target.value === 'none'){
      this.setState({filterTerm: ''})
    } else {
     this.setState({filterTerm: e.target.value})
    }

    this.setState({load_screen: true})

    window.setTimeout(() => {
      this.setState({load_screen: false})
    }, 2000)
  }

  filterRateTypes(e){
    if (e.target.value === 'none'){
      this.setState({filterRateType: ''})
    } else {
     this.setState({filterRateType: e.target.value})
   }

   this.setState({load_screen: true})

    window.setTimeout(() => {
      this.setState({load_screen: false})
    }, 2100)
  }

  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div className="header">
            <h1> Mortgage Quote Generator</h1>
            <form id="form" onSubmit={this.handleSubmit.bind(this)}>
              <input className="search-input" type="text" placeholder="Enter loan amount (USD)" onChange={this.handleChange.bind(this)}/>
              <button className="search-btn" type="submit">Submit</button>
            </form>
          </div>
          <div className="loan_display">
            <h2>{this.state.loan_display}</h2>
          </div>
          <div className="filter-area">
            <FilterContainer filterRateTypes={this.filterRateTypes.bind(this)} filterTerms={this.filterTerms.bind(this)} filterLenders={this.filterLenders.bind(this)} sort={this.sortByMonthly.bind(this)}/>
          </div>
          <div className="lenders-area">
            <LendersContainer loading={this.state.load_screen} filterLender={this.state.filterLender} filterTerm={this.state.filterTerm} filterRateType={this.state.filterRateType} loan_data={this.state.loan_data} didSearch={this.state.didSearch}/>
          </div>
        </div>
      </div>
    );
  }
}
