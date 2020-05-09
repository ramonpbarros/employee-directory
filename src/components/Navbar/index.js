import React from "react";

function Navbar(props) {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand">Employee Directory</a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            onChange={props.handleInputChange}
            value={props.value}
            id="employees"
            type="text"
            name="search"
            list="employee"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Reset
          </button>
        </form>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
