import React from "react";
import Loading from "../Loading/Loading";
import UserImg from '../../assets/Image/users.png'
import Error from "../Error/Error";
import { Link } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = React.useState({
    loading: true,
    error: false,
    users: [],
  });

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        setUsers({
          ...users,
          users: data,
          loading: false,
        })
      )
      .catch((err) =>
        setUsers({
          ...users,
          error: err,
          loading: false,
        })
      );
  }, []);
  return (
    <div className="container">
      <h1 className="text-center mb-5">Users</h1>
      {users.loading && <Loading />}
      {users.error && <Error />}

      {users.users.length > 0 && (
        <ul className="d-flex justify-content-around align-items-start flex-wrap list-unstyled">
          {users.users.map((user) => (
            <li className="w-25 border me-1 mb-5 rounded-5 item">
              <Link to={`/users/${user.id}`} className="text-decoration-none text-dark">
                <img
                  className="d-block m-auto"
                  src={UserImg}
                  alt="user"
                  width={250}
                />
                <hr className="text-dark" />
                <div className="ps-4 pb-5">
                  <h3 className="text-dark h5">
                    <strong className="text-warning">Name :</strong> {user.name}
                  </h3>
                  <h4 className="text-dark h6">
                    <strong className="text-warning">Username :</strong>{" "}
                    {user.username}
                  </h4>
                  <p className="text-dark">
                    <strong className="text-warning">Phone number :</strong>{" "}
                    {user.phone}
                  </p>
                  <div className="text-center d-flex pe-4 mt-5">
                    <a
                      className="btn btn-info container-fluid "
                      href={user.email}
                    >
                      Email
                    </a>
                    <a
                      className="btn btn-primary container-fluid"
                      href={user.website}
                    >
                      Website
                    </a>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
