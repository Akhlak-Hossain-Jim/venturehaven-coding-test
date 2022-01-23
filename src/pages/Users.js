import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/all";

function Home() {
  const [DATA, setDATA] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setDATA(res));
  }, []);

  return (
    <div className="container p-5">
      <h1 className="pb-2">
        <FaUser /> Users
      </h1>
      <div className="" style={{ width: "100%", overflowX: "auto" }}>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
              <th scope="col">Company</th>
              <th scope="col">Posts</th>
            </tr>
          </thead>
          {DATA && (
            <tbody>
              {React.Children.toArray(
                DATA.map((data) => (
                  <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.website}</td>
                    <td>{data.company.name}</td>
                    <td>
                      <a href={`/users/${data.id}/posts`}>View</a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default Home;
