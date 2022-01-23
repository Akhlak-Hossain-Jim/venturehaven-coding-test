import React, { useEffect, useState } from "react";
import { FaCommentDots } from "react-icons/fa";

function Home() {
  const [DATA, setDATA] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setDATA(res));
  }, []);

  return (
    <div className="container">
      <h1 className="mt-3">
        <FaCommentDots />
        {`  `}
        All Posts
      </h1>
      <hr />
      {DATA &&
        React.Children.toArray(
          DATA.map((data) => (
            <div className="bg-light rounded m-4 p-3 border border-secondary">
              <h3>{data.title}</h3>
              <p>{data.body}</p>
            </div>
          ))
        )}
    </div>
  );
}

export default Home;
