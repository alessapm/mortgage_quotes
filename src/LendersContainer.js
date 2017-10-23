import React, { Component } from 'react';
import LoanOption from './LoanOption';

export default class LendersContainer extends Component {

  render(){
    const LoanOptions = this.props.loan_data.map(loan_option => {
      const gray = this.props.loan_data.indexOf(loan_option) % 2 === 0 ? true : false;
      const productWithRateandPayment = loan_option.loan_product + loan_option.interest_rate + loan_option.monthly_payment;

      if (this.props.filterLender){
        if (this.props.filterLender === loan_option.lender.name){
           return <LoanOption key={productWithRateandPayment} loan_option={loan_option} gray={gray} />
        }
      }
      return <LoanOption key={productWithRateandPayment} loan_option={loan_option} gray={gray} />
    })

    if (this.props.loan_data.length > 0){
      return(
        <div className="lenders-container">
          {LoanOptions}
        </div>
      )
    } else if (this.props.didSearch) {
      return(
        <div className="lenders-container">
          <h1 className="error">Sorry, your search did not return any results</h1>
        </div>
      )
    } else {
      return (
        <div className="lenders-container">
        </div>
      )
    }

  }

}
