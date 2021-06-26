import React, { Fragment } from 'react'
import CreditCardForm from './components/CreditCardForm'
import ProductDetail from './components/ProductDetail'

const CheckoutPage = () => {
  return (
    <Fragment>
      <ProductDetail />
      <CreditCardForm />
    </Fragment>
  )
}

export default CheckoutPage
