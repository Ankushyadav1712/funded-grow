import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Orders = () => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const userDocRef = doc(db, "usersData", uid);

        getDoc(userDocRef).then((userDoc) => {
          if (userDoc.exists()) {
            const finalStock =
              userDoc._document.data.value.mapValue.fields.userStocks.arrayValue
                .values;
            setOrderData(finalStock);
          }
        });
      }
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="table-container">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300">Stocks</th>
            <th className="px-4 py-2 border border-gray-300">Qty</th>
            <th className="px-4 py-2 border border-gray-300">Order Type</th>
            <th className="px-4 py-2 border border-gray-300">Price</th>
          </tr>
        </thead>
        <tbody>
          {orderData.map((stock, index) => {
            const field = stock.mapValue.fields;

            return (
              <tr key={index}>
                <td className="px-4 py-2 border border-gray-300">
                  {field.stockName.stringValue}
                </td>

                <td className="px-4 py-2 border border-gray-300">
                  {+field.quantity.integerValue}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {field.orderType.stringValue}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  ₹
                  {parseFloat(field.price.doubleValue) *
                    parseFloat(field.quantity.integerValue).toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

// const buyData = document.querySelector('#addbuydata');

// buyData.addEventListener('Click',function(e){
//     e.preventDefault();
//     const element = e.target.element;
// const formData = {
//     name:element.name,
//     qty: element.qty,
//     orderType:element.orderType,
//     price:element.price
// }
//     stockData.push(formData)
// })
