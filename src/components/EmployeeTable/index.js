import React from "react";

function EmployeeTable(props) {
  return (
    <table className="tableEmployee">
      <thead className="thEmployee">
        <tr>
          <th></th>
          <th onClick={props.sortByName} className="btn-outline-primary">Name (Sort ↑↓)</th>
          <th>Age</th>
          <th>Phone</th>
          <th>E-mail</th>
          <th>Address</th>
        </tr>
      </thead>

      <tbody>
        {props.results.map((result) => (
          <tr className="tbody"key={result.login.uuid}>
            <td>
              {" "}
              <img
                className="img m-2"
                src={result.picture.medium}
                alt=""
              />
            </td>

            <td><strong>{result.name.first + " " + result.name.last}</strong></td>
            <td>{result.dob.age}</td>
            <td>{result.cell}</td>
            <td>
              <a href={result.email}>{result.email}</a>
            </td>
            <td>{result.location.street.number + " " + result.location.street.name + ". " + result.location.city + ", " + result.location.state }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
