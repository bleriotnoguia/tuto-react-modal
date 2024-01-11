import { useState } from "react";
import "./App.css";
import ConfirmDialog from "./components/ConfirmDialog";

function App() {
  const [count, setCount] = useState(0);
  const [confirm, setConfirm] = useState(false);

  const startConfirm = () => {
    setConfirm(true);
  };

  const increment = async () => {
    setCount((count) => count + 1);
    setConfirm(false);
  };

  const cancelConfirm = () => {
    setConfirm(false);
  };

  return (
    <>
      <p>Compteur : {count}</p>
      <button onClick={() => startConfirm()}>count is {count}</button>
      <ConfirmDialog
        onConfirm={increment}
        onCancel={cancelConfirm}
        open={confirm}
      />
    </>
  );
}

export default App;
