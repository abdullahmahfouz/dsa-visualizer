import React from 'react';

export default function MessageBanner({ message }) {
  if (!message?.text) return null;

  const type = message.type || 'info';
  return <div className={`message message-${type}`}>{message.text}</div>;
}

