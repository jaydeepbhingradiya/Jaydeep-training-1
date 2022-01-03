import React from "react";
import { useSelector } from "react-redux";
function Table() {
  const data = useSelector((state) => state.form.data);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Number</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((value) => (
          <tr key={value.id}>
            <td>{value.name}</td>
            <td>{value.email}</td>
            <td>{value.number}</td>
            <td>{value.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
