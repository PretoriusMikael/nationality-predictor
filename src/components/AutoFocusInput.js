import React, { useState, useRef, useEffect } from "react";

// Functional component for an auto-focused input field
export default function AutoFocusInput({ setUserName }) {
  const [name, setName] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    setName(event.target.value);
    setUserName(event.target.value); // Update parent state
  };

  return (
    <div>
      <label>Enter last or full name: </label>
      <input ref={inputRef} value={name} onChange={handleChange} />
    </div>
  );
}
