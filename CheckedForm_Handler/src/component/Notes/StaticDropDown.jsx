import { useState } from "react";

function App() {
  const [paymentMode, setPaymentMode] = useState("");

  console.log(paymentMode);

  return (
    <div>
      <select
        value={paymentMode}
        onChange={(e) => {
          setPaymentMode(e.target.value);
        }}
      >
        <option value="">--Select Payment Mode</option>
        <option value="upi">Upi</option>
        <option value="card">Card</option>
        <option value="netbanking">NetBanking</option>
      </select>
    </div>
  );
}

export default App;
