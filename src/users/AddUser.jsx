import React from "react";

const AddUser = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 border rounded p-4 mt-2 shadow">
            <h2 className="m-4">Register User</h2>
            <div className="mb-3">
              <label htmlFor="Name" className="col-form-label fw-bold ms-1">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="col-form-label fw-bold ms-1">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                name="username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="col-form-label fw-bold ms-1">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button type="submit" className="btn btn-outline-danger mx-2">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
