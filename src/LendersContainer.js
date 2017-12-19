import React, { Component } from 'react';
import LoanOption from './LoanOption';

export default class LendersContainer extends Component {

  render(){
    if (this.props.loading){
        return (
          <div className="load_icon_container">
            <div className="load_icon"></div>
          </div>
        )
      }
    const LoanOptions = this.props.loan_data.map(loan_option => {
      // const gray = this.props.loan_data.indexOf(loan_option) % 2 === 0 ? true : false;
      const productWithRateandPayment = loan_option.loan_product + loan_option.interest_rate + loan_option.monthly_payment;

      if (this.props.filterLender && this.props.filterTerm && this.props.filterRateType){
        if (this.props.filterLender === loan_option.lender.name && this.props.filterTerm === loan_option.loan_term && this.props.filterRateType === loan_option.rate_type){
           return <LoanOption key={productWithRateandPayment} loan_option={loan_option} />
        } else {
          return (
            null
          )
        }
      }
      if (this.props.filterRateType && this.props.filterTerm){
        if (this.props.filterRateType === loan_option.rate_type && this.props.filterTerm === loan_option.loan_term){
           return <LoanOption key={productWithRateandPayment} loan_option={loan_option} />
        } else {
          return null
        }
      }
      if (this.props.filterLender && this.props.filterRateType){
        if (this.props.filterLender === loan_option.lender.name && this.props.filterRateType === loan_option.rate_type){
           return <LoanOption key={productWithRateandPayment} loan_option={loan_option} />
        } else {
          return null
        }
      }
      if (this.props.filterLender && this.props.filterTerm){
        if (this.props.filterLender === loan_option.lender.name && this.props.filterTerm === loan_option.loan_term){
           return <LoanOption key={productWithRateandPayment} loan_option={loan_option} />
        } else {
          return null
        }
      }
      if (this.props.filterLender){
        if (this.props.filterLender === loan_option.lender.name){
           return <LoanOption key={productWithRateandPayment} loan_option={loan_option} />
        } else {
          return null
        }
      }
      if (this.props.filterTerm){
        if (this.props.filterTerm === loan_option.loan_term){
           return <LoanOption key={productWithRateandPayment} loan_option={loan_option} />
        } else {
          return null
        }
      }
      if (this.props.filterRateType){
        if (this.props.filterRateType === loan_option.rate_type){
           return <LoanOption key={productWithRateandPayment} loan_option={loan_option} />
        } else {
          return null
        }
      }

      return <LoanOption key={productWithRateandPayment} loan_option={loan_option} />

    })

    let optionsExist = false
    LoanOptions.forEach(option => {
      if (option !== null){
        optionsExist = true;
      }
    })

    if (!optionsExist && this.props.didSearch) {
      return(
        <div className="lenders-container">
          <h2 className="error">Sorry, your search didn't return any results. Please adjust your search and try again.</h2>
        </div>
      )
    }
    if (this.props.loan_data.length > 0){
      return(
        <div className="lenders-container">
          {LoanOptions}
        </div>
      )
    } else if (this.props.didSearch) {
      return(
        <div className="lenders-container">
          <h2 className="error">Sorry, your search did not return any results</h2>
        </div>
      )
    } else {
      return (
        <div className="lenders-container">
          <div className="lenders-spot-holder">
            <p>ENTER SEARCH OPTIONS</p>
            <div className="houses"></div>
          </div>
        </div>
      )
    }

  }

}
