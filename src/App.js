import { useState } from "react";

function App() {
  const [blabla, setBlabla] = useState("");
  return (
    <div>
      <input
        type="text"
        value={blabla}
        onChange={(event) => setBlabla(event.target.value)}
      />
      {blabla}
    </div>
  );
}
export default App;
