import { useState } from "react";

function App() {
  const [selectPayment, setSelectPayment] = useState("");

  const payment = [
    { id: "upi", info: "Instant transfer via UPI" },
    { id: "card", info: "Pay using credit or debit card" },
    { id: "cod", info: "Pay when order arrives" },
  ];

  console.log(selectPayment);

  return (
    <>
      {payment.map((items) => (
        <label key={items.id} htmlFor={items.id}>
          <br />
          <input
            type="radio"
            name="money"
            value={items.id}
            id={items.id}
            checked={selectPayment === items.id}
            onChange={(e) => setSelectPayment(e.target.value)}
          />
          {items.info}
        </label>
      ))}
      <p>Selected Payment: {selectPayment}</p>
      <p>
        Selected Payment:{" "}
        {payment.find((obj) => obj.id === selectPayment)?.info}
      </p>
    </>
  );
}

export default App;
