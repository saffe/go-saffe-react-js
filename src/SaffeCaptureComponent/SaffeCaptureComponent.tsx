import React from "react";

export interface CardProps {
  apiKey: string;
  type: string;
  endToEndId: string;
  user: string;
  onClose: () => void;
  onFinish: () => void;
}

export function Card({
  apiKey,
  type,
  endToEndId,
  user,
  onClose,
  onFinish,
}: React.PropsWithChildren<CardProps>) {
  return <div>{apiKey}</div>;
}
