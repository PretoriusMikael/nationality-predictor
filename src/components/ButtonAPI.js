import React, { useState } from "react";

// Functional component for fetching API
export default function ButtonAPI({ userName }) {
  const [nationality, setNationality] = useState(null);

  // fetching data from the API
  async function fetchData() {
    if (userName.trim() === "") {
      return;
    }
    try {
      let response = await fetch(`https://api.nationalize.io?name=${userName}`);
      let data = await response.json();
      if (data.country && data.country.length > 0) {
        setNationality(data.country[0]); // fetch the country with the mostt probability
      } else {
        setNationality(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setNationality(null);
    }
  }

  // output
  return (
    <div>
      <button onClick={fetchData}>Predict Nationality</button>
      {nationality ? (
        <div>
          <h2>Prediction Results:</h2>
          <p>Country: {nationality.country_id}</p> {/*country that matched*/}
          <p>Probability: {nationality.probability.toFixed(2)}</p> {/*probability of nationality being that country*/}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}
