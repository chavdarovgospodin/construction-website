import React from "react";

export const ConfirmationModal = ({ title, text, onClose }) => (
    <div onClick = {onClose}>
      <h1>{title}</h1>
      <h2>{text}</h2>
    </div>
)
  
