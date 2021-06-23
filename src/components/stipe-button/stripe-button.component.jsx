import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publisherKey =
    "pk_test_51J5OXtCV7UsZkHeisdhzAsveWA0rjdvk6PZVPRo1eY4KtD1TpSlvz4FFj6USPMFnnUE8fzR9Ikx1DZ20rZody8yC00j3dbyhB8";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Test"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisherKey}
    />
  );
};

export default StripeCheckOutButton;
