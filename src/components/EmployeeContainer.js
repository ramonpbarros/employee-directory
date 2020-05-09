import API from "../utils/API";
import React, { Component } from "react";
import Navbar from "./Navbar";
import EmployeeTable from "./EmployeeTable";
import "./style.css";

class EmployeeContainer extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: [],
    order: ""
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results
        })
      )
      .catch((err) => console.log(err));
  }

  sortByName = () => {
    const filtered = this.state.filteredEmployees;
    if (this.state.order === "asc") {
      const sorted = filtered.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );

      this.setState({
        filteredEmployees: sorted,
        order: "desc"
      });
    } else {
      const sorted = filtered.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );

      this.setState({
        filteredEmployees: sorted,
        order: "asc"
      });
    }
  };

  handleInputChange = (event) => {
    const employees = this.state.employees;
    const UserInput = event.target.value;
    const filteredEmployees = employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    );
    this.setState({
      filteredEmployees
    });
  };

  employeeSearch = () => {
    API.getUsers()
      .then((res) =>
        this.setState({
          filteredEmployees: res.data.results,
          employees: res.data.results
        })
      )
      .catch((err) => console.log(err));
  };

  handleSearch = (event) => {
    event.preventDefault();
    if (!this.state.search) {
      alert("Enter a name");
    }
    const { employees, search } = this.state;

    const filteredEmployees = employees.filter((employee) =>
      employee.name.first.toLowerCase().includes(search.toLowerCase())
    );

    this.setState({
      filteredEmployees
    });
  };

  render() {
    return (
      <div>
        <Navbar
          employee={this.state.employees}
          handleSearch={this.handleSearch}
          handleInputChange={this.handleInputChange}
        />
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Search Employees!</h1>
            <p className="lead">
              Search by name or sort them clicking on the name column
            </p>
          </div>
        </div>
        <EmployeeTable
          results={this.state.filteredEmployees}
          sortByName={this.sortByName}
        />
      </div>
    );
  }
}

export default EmployeeContainer;
