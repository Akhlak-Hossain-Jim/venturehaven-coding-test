import React, { useEffect, useState } from "react";
import { FaCommentDots } from "react-icons/fa";
import { useParams } from "react-router-dom";

function Home() {
  const path = useParams();

  const [DATA, setDATA] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) =>
        setDATA(
          res.filter((d) => {
            return d.userId.toString() === path.id.toString();
          })
        )
      );
  }, [path.id]);

  const [userDATA, setUserDATA] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (res) =>
          path &&
          setUserDATA(
            ...res.filter((d) => d.id.toString() === path.id.toString())
          )
      );
  }, [path]);

  const [comments, setComments] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((res) => setComments(res));
  }, []);

  return (
    <div className="container">
      <>
        {userDATA && (
          <>
            <h1 className="px-3 pt-3">
              <FaCommentDots />
              {`  `}
              {userDATA.name}'s Posts
            </h1>
            <hr />
          </>
        )}
      </>
      {DATA &&
        React.Children.toArray(
          DATA.map((data) => (
            <div className="bg-light p-3 m-2 border border-dark rounded">
              <h4>{data.title}</h4>
              <p>{data.body}</p>
              {comments && (
                <div className="bg-secondary p-3 ms-4 rounded">
                  {React.Children.toArray(
                    comments
                      .filter((d) => d.postId === data.id)
                      .map((e) => (
                        <div>
                          <p>
                            <strong>{e.name}</strong>
                          </p>
                          <p>{e.body}</p>
                          <hr />
                        </div>
                      ))
                  )}
                </div>
              )}
            </div>
          ))
        )}
    </div>
  );
}

export default Home;
