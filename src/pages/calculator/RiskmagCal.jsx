import React, { useState } from "react";
import './RiskmangCal.css';
function BrokerageCalculator() {
  const [buyPrice, setBuyPrice] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [brokeragePercentage, setBrokeragePercentage] = useState(0.05); //  set the default brokerage 0.05%


  const STT_PERCENTAGE = 0.025 / 100; // 0.025% STT on sell side
  const TRANSACTION_CHARGE_PERCENTAGE = 0.00325 / 100;   // Transaction charges
  const SEBI_FEE_PERCENTAGE = 0.0001 / 100;   // SEBI Turnover fee
  const GST_PERCENTAGE = 18 / 100;    // 18% GST


  const calculateBrokerage = () => {
    const buyValue = buyPrice * quantity;
    const sellValue = sellPrice * quantity;

    const buyBrokerage = (buyValue * brokeragePercentage) / 100;
    const sellBrokerage = (sellValue * brokeragePercentage) / 100;
    const totalBrokerage = buyBrokerage + sellBrokerage;

    // Calculate STT on the sell side
    const stt = sellValue * STT_PERCENTAGE;

    // Calculate transaction charges on both buy and sell side
    const transactionCharges = (buyValue + sellValue) * TRANSACTION_CHARGE_PERCENTAGE;

    // Calculate SEBI Turnover fee
    const sebiFee = (buyValue + sellValue) * SEBI_FEE_PERCENTAGE;

    // Calculate GST on brokerage and transaction charges
    const gst = GST_PERCENTAGE * (totalBrokerage + transactionCharges);

    // Total charges
    const totalCharges = totalBrokerage + stt + transactionCharges + sebiFee + gst;

    return {
      totalBrokerage: totalBrokerage.toFixed(2),
      stt: stt.toFixed(2),
      transactionCharges: transactionCharges.toFixed(2),
      sebiFee: sebiFee.toFixed(2),
      gst: gst.toFixed(2),
      totalCharges: totalCharges.toFixed(2),
    };
  };

  const results = calculateBrokerage();

  return (
    <div className="container1 mt-5">
      <h2>Intraday Brokerage Calculator</h2>
      <div>
        <label>Buy Price (₹) :</label>
        <input
          type="number"
          value={buyPrice}
          onChange={(e) => setBuyPrice(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Sell Price (₹):</label>
        <input
          type="number"
          value={sellPrice}
          onChange={(e) => setSellPrice(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Brokerage Percentage (%):</label>
        <input
          type="number"
          step="0.01"
          value={brokeragePercentage}
          onChange={(e) => setBrokeragePercentage(Number(e.target.value))}
        />
      </div>

      <h3>Results:</h3>
      <p>Total Brokerage: ₹{results.totalBrokerage}</p>
      <p>STT: ₹{results.stt}</p>
      <p>Transaction Charges: ₹{results.transactionCharges}</p>
      <p>SEBI Turnover Fee: ₹{results.sebiFee}</p>
      <p>GST: ₹{results.gst}</p>
      <h4>Total Charges: ₹{results.totalCharges}</h4>
    </div>
  );
}

export default BrokerageCalculator;