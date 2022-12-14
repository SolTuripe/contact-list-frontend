import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Contact Details</h2>
          <div className="card">
            <div className="card-header">
              Information:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name: </b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>Last name: </b>
                  {user.lastName}
                </li>
                <li className="list-group-item">
                  <b>E-mail: </b>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <b>Phone number: </b>
                  {user.phoneNumber}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-outline-secondary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
