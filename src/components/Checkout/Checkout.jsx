import Swal from "sweetalert2";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { sendOrder } from "../../firebase/firebase";

export default function Checkout() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const { cart, emptyCart, getTotal } = useContext(CartContext);
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const selectedProducts = cart.map((prod) => {
    return {
      id: prod.id,
      name: prod.name,
      quantity: prod.quantity,
      price: prod.price,
    };
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailFormat.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (email !== confirmEmail) {
      alert("Emails do not match.");
      return;
    }

    const date = new Date();
    const order = {
      buyer: {
        name,
        phone: phoneNumber,
        mail: email,
      },
      order: cart,
      date,
      total: getTotal(),
    };

    try {
      const orderId = await sendOrder(order);
      Swal.fire({
        title: "Order Confirmed!",
        text: `Thanks for your purchase, ${name} on ${date.getDay()}/${date.getMonth()}/${date.getFullYear()}. Your order unique number is: ${orderId}. We will reach out to arrange payment and shipping.`,
        icon: "success",
        confirmButtonText: "Exit",
        color: "blue",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
          emptyCart();
        }
      });
    } catch (error) {
      console.error("Error sending order:", error);
      Swal.fire({
        title: "Error",
        text: "There was an error processing your order. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
        color: "red",
      });
    }
  };

  return (
    <>
      <div>
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div>
            <h1>Your Purchase Details</h1>
            {cart.map((product) => (
              <h6 style={{border: '0.5px dotted lightgrey', margin: '0 30%'}} key={product.id}>
                {product.name} <br /> Quantity: {product.quantity} <br /> Subotal: $
                {product.quantity*product.price}
              </h6>
              ))}
              <h4 style={{textAlign: 'center', border: '1px solid darkgreen', margin: '15px 30%', borderRadius: 15}}>Total Items: {cart.reduce((total, product) => total + product.quantity, 0)} <br />Total Price: ${cart.reduce((total, product) => total + product.quantity * product.price, 0)}</h4>
          </div>
        </div>
      </div>

      <h2> Complete Your Personal Details to Finish Purchase</h2>
      <form
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
          border: '1px solid darkgreen',
          borderRadius: 15,
          margin: '0 30%',
          padding: '15px 5px'
        }}
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Telephone number:</label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmEmail">Confirm Email:</label>
          <input
            type="email"
            id="confirmEmail"
            placeholder="Confirm your email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
          />
        </div>
        <button style={{ marginTop: 20, backgroundColor: 'rgba(94, 94, 235, 0.205)', borderRadius: 15, fontSize: 'larger', cursor: 'pointer' }} type="submit">
          Finish Purchase
        </button>
      </form>
    </>
  );
}
