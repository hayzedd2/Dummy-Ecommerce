import { useState, useEffect } from "react";


export default function UserSearch() {
  const [error, setError] = useState("");
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const FetchUser = async (inputValue) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${inputValue}`
      );
      if (!response.ok) throw new Error("something went wrong");
      const data = await response.json();
      setUser(data.users);
      console.log(user);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };

  const clickButton = () => {
    FetchUser(search);
    console.log(user);
  };
  return (
    <div className="search-comp">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter Search"
          onChange={handleSearch}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          onClick={clickButton}
        >
          Search
        </button>
      </div>

      {error !== "" ? (
        <p>loading</p>
      ) : (
        <div className="comments-container">
            {user.map((user, index) => (
          <div key={index} className="comments user-card" style={{width : "18rem"}}>
            <img src={user.image} class="card-img-top" alt="..." style={{marginBottom : "20px"}}/>
            <h2>FirstName : {user.firstName}</h2>
            <h2>LastName : {user.lastName}</h2>
            <h2>Email : {user.email}</h2>
          </div>
        ))}
        </div>
      )}
    </div>
  );
}
