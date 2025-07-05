import { useState } from "react";
import { FullScreenSearchModal } from "./components/FullScreenModal";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <FullScreenSearchModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default App;
