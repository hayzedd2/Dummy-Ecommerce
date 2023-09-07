import { useState, useEffect } from "react";
import Navbar from "./Navbar";
const url = `https://dummyjson.com/comments`;

export default function Comments() {
  const [error, setError] = useState("");
  const [comments, setComments] = useState([]);
  const FetchComments = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("something went wrong");
      const data = await response.json();
      setComments(data.comments);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    FetchComments();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="comments-container">
        {comments.map((com, index) => {
          return (
            <div key={index}>
              <div className="comments">
                <p>{com.id}</p>
                <h4>User : {com.user.username}</h4>
                <h3>{com.body}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
