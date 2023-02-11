import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    name: "",
    number: "",
    email: "",
    address: ""
  });

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setValues((values) => ({
      ...values,
      [name]: value
    }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.Name && values.number && values.email && values.address) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        {submitted && valid && (
          <div className="success-message">
            <h3>
              {" "}
              <table class="table">
                <tr>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
                <tr>
                  <td>{values.Name}</td>
                  <td>{values.number}</td>
                  <td> {values.email}</td>
                  <td>{values.address}</td>
                </tr>
              </table>
                {" "} 
            </h3>
            <div><button class="form-field"><a href="/">Back to Home</a></button> </div>
          </div>
        )}
        <h2 class="titlehead">Fitness Form Registeration</h2>
        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Name"
            name="Name"
            value={values.Name}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.Name && (
          <span id="name-error">Please enter a first name</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="text"
            placeholder="Phone Number"
            name="number"
            value={values.number}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.number && (
          <span id="number-error">Please enter a number</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}

        {!valid && (
          <input
            class="form-field"
            type="address"
            placeholder="Address"
            name="address"
            value={values.address}
            onChange={handleInputChange}
          />
        )}

        {submitted && !values.address && (
          <span id="address-error">Please enter an address</span>
        )}
        {!valid && (
          <button class="form-field" type="submit">
            Add Member
          </button>
        )}
      {/* <button class="button"><a href="/">View Member</a></button> */}
      </form>
    </div>
  );
}
