import React, { useState } from "react";
import AutoFocusInput from "./AutoFocusInput";
import ButtonAPI from "./ButtonAPI";

export default function NationalityPredictor() {
  const [userName, setUserName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Nationality Predictor</h1>
      <AutoFocusInput setUserName={setUserName} />
      <ButtonAPI userName={userName} />
    </div>
  );
}
