import React, { useState } from "react";

export default function Table(props) {
  const { Data } = props;
  //   console.log(Data, "propsdata");
  const [formData, setFormData] = useState([]);
  //   console.log(formData, "set data");
  React.useEffect(() => {
    if (Data) {
      const temp = setFormData([...formData, Data]);
      console.log("Temp : ", temp);
    }

    // setFormData({ ...formData, Data });
  }, [Data]);
  //   setData(formData);
  //console.log(data, "setdata data");
  //   console.log(props);
  console.log(formData, "formData");
  //   const formData = [...formData];
  //   const newData = [...formData, data];
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First_Name</th>
            <th>Last_Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {formData?.map((res) => (
            <tr key={res.id}>
              <td>{res.name}</td>
              <td>{res.sName}</td>
              <td>{res.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
