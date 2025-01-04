import React, { useEffect } from 'react';

const RazorpayButton = () => {
  useEffect(() => {
    // Dynamically create the <form> element
    const form = document.createElement('form');

    // Dynamically add the Razorpay script inside the form
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_PfPzmOAUmgbboh');
    script.async = true;

    // Append the script to the form
    form.appendChild(script);

    // Append the form to the container div
    const container = document.getElementById('razorpay-button-container');
    container.appendChild(form);

    return () => {
      // Cleanup: remove the form when the component unmounts
      container.innerHTML = '';
    };
  }, []);

  return <div id="razorpay-button-container"></div>;
};

export default RazorpayButton;
