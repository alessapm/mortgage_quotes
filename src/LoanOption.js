import React, { Component } from 'react';

export default class LoanOption extends Component {

  render(){
    const loan = this.props.loan_option;
    const rate_percent = loan.interest_rate * 100;
    const rate_percent_editted = rate_percent.toFixed(2)
    const payment = loan.monthly_payment;

    if (this.props.gray){
      return(
        <div className="loan-option gray">
          <p className="bank-name">{loan.lender.name}</p>
          <p className="label"> Interest Rate </p>
          <p className="rate">{rate_percent_editted}% </p>
          <p className="label"> Mortgage Term</p>
          <p className="term"> {loan.loan_term} years</p>
          <p className="label"> Payment</p>
          <p className="payment"> ${payment}/month</p>
          <p className="label"> Rate Type </p>
          <p className="type">{loan.rate_type}</p>
        </div>
      )
    } else {
      return(
        <div className="loan-option">
          <p className="bank-name">{loan.lender.name}</p>
          <p className="label"> Interest Rate </p>
          <p className="rate">{rate_percent_editted}% </p>
          <p className="label"> Mortgage Term</p>
          <p className="term"> {loan.loan_term} years</p>
          <p className="label">Payment</p>
          <p className="payment"> ${payment}/month</p>
          <p className="label"> Rate Type </p>
          <p className="type">{loan.rate_type}</p>
        </div>
      )
    }
  }

}
