import React from "react";

export default function ExpandDate(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });

  return (
    <div>
      <p>{month}</p>
    </div>
  );
}
