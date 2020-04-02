import React, { useState } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import { CreditCard } from 'react-kawaii'

// To use PayPal's Smart Payment Buttons in prodution, you must have a PayPal Business account set up and verified. After this is done, you'll have access to your API credentials to use with this button.

// Once you have your account set up, you will have 2 different sets of credentials for sandbox mode and production mode. You will also be able to create sandbox business and customer accounts to be tested on.

const PaymentButton = () => {
    const [mood, setMood] = useState('happy')

    const handleMood = () => {
        setMood('excited')
        setTimeout(() => { setMood('happy') }, 2000);
    }

    return (
        <>
            <h1>Make a donation</h1>
            <CreditCard mood={mood} size={150} />
            <br />
            <PayPalButton 
                amount="5.00"
                onSuccess={(details, data) => {
                    alert(`Transaction completed by ${details.payer.name.give_name}`)
                }}
                onClick={e => handleMood()}
                // options={{ clientId: "PROD_ID" }}
    
            />
        </>
    )
}

export default PaymentButton