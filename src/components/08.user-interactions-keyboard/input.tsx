import { useState } from "react";

export const Input = () => {
  const [value, setValue] = useState("");

  return (
    <main>
      <label htmlFor="lastname">Lastname</label>
      <input
        id="lastname"
        name="lastname"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Lastname: {value}</p>
      <button onClick={() => setValue("")}>Clear</button>
    </main>
  );
};
