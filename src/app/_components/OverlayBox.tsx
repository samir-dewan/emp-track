import React from "react";

type OverlayBoxProps = {
    isVisible: boolean;
    name: string;
    role: string;
    dateStarted: Date;
    dateCompleted: Date;
}

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = { month: "short", year: "2-digit"};
  return date.toLocaleDateString("en-GB", options);
}
export default function OverlayBox( { isVisible, name, role, dateStarted, dateCompleted }: OverlayBoxProps) {

    if (!isVisible) return null;

    return (
    <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 p-4 rounded-lg shadow-lg z-20">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p>{role}</p>
      <p>{formatDate(dateStarted)} - {formatDate(dateCompleted)}</p>
    </div>
    )
}