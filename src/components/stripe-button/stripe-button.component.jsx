import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51FOhyhCiQSLSNSsfgWfPOiCJFNKyLEyr3baF5H4hBcpm4fUxMDvu10CXH8io69YXTd1paB1u1JRUlGWDgmGlirub00zSV340A9";

   const onToken = token =>{
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout 
          label='Pay Now'
          name="CRWN_CLOTHING LTD."
          billingAddress
          shippingAddress 
          description={`YOUR TOTAL AMOUNT IS $${price}`}
          amount={priceForStripe}
          panelLabel="Pay Now"
          token={onToken}
          stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;