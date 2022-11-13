import React from "react";

export default function AddUser() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add a Contact</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your name"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your last name"
              name="lastName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone number
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder="Enter your phone number"
              name="phoneNumber"
            />
          </div>
          <button type="submit" className="btn btn-outline-success">
            Submit
          </button>
          <button type="submit" className="btn btn-outline-danger mx-3">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
