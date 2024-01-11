import React from "react";

interface ConfirmDialogProps {
  message?: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  message,
  open,
  onConfirm,
  onCancel,
}) => {
  return (
    <div style={{ display: open ? "block" : "none" }}>
      <p>{message ?? "Contenu de la boite de dialog"}</p>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ConfirmDialog;
