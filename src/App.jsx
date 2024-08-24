import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [numEntries, setNumEntries] = useState("");
  const [entries, setEntries] = useState([]);

  const handleEntries = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setNumEntries(value);
    } else {
      setNumEntries("");
    }
  };

  const generateEntries = () => {
    if (numEntries <= 0) {
      alert("Please enter a positive number of entries.");
      return;
    }

    const newEntries = [];
    const startDate = new Date("2024-08-26");

    for (let i = 0; i < numEntries; i++) {
      const entryNumber = i + 1;
      const daysToAdd = Math.floor(i / 10);
      const paymentDate = new Date(startDate);
      paymentDate.setDate(paymentDate.getDate() + daysToAdd);

      newEntries.push({
        id: entryNumber,
        paymentDate: paymentDate.toISOString().split("T")[0],
      });
    }

    setEntries(newEntries);
  };

  return (
    <div className="container">
      <h2>Entry Date Assigner</h2>
      <input
        type="number"
        placeholder="Enter number of entries"
        value={numEntries}
        onChange={handleEntries}
      />
      <button onClick={generateEntries}>Generate Entries</button>
      {entries.length > 0 && (
        <ul>
          {entries.map((entry) => (
            <li key={entry.id}>
              ID: {entry.id}, Payment Date: {entry.paymentDate}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
