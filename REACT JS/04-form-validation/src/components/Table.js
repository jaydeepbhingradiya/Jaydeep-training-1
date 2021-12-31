import React, { useEffect, useState } from "react";
import "./table.css";

export default function Table(props) {
  const { newData } = props;
  //   console.log(newData);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (newData) {
      setData([...data, newData]);
    }
  }, [newData]);

  return (
    <div className="table">
      <h3>User Data</h3>
      <table striped bordered hover size="sm">
        <thead>
          <tr>
            <th> Name </th>
            <th> Email </th>
            <th> Number </th>
            <th> Address</th>
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
    </div>
  );
}
