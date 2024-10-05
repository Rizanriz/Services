import React from "react";

const PaymentPage = () => {

    const handlePayment = async()=>{

        const amount = 500
        const currency = "INR"
        const receipt = "qwsaq1"

        const  responce = await fetch("http://localhost:5000/order",{
            method:"POST",
            body:JSON.stringify({
                amount,
                currency,
                receipt
            }),
            headers:{
                "Content-Type" : "application/json"
            }
        })
        const order = await responce.json()
        console.log(order);

        var options = {
            "key": "rzp_test_8hSLVlOgdh0y8m", // Enter the Key ID generated from the Dashboard
            amount,
            currency,
            "name": "Acme Corp", //your business name
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": order.id, 
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": { 
                "name": "Gaurav Kumar", //your customer's name
                "email": "gaurav.kumar@example.com", 
                "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
                alert(response.error.code);
                alert(response.error.description);
                alert(response.error.source);
                alert(response.error.step);
                alert(response.error.reason);
                alert(response.error.metadata.order_id);
                alert(response.error.metadata.payment_id);
        });
        rzp1.open();
        e.preventDefault();
    }
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-blue-600">Confirm your payment</h1>
        <button
          id="rzp-button1"
          onClick={handlePayment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Pay
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
