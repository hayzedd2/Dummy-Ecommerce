import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Categories() {
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const FetchCategories = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/categories`);
      if (!response.ok) throw new Error("something went wrong");
      const data = await response.json();
      setCategories(data);
      setError("");
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    FetchCategories();
  }, []);
  return <div className="container">
    {categories.map((cat , index) => <p key={index} ><Link className="categoryholder" to={`${cat}`} >{cat}</Link></p>)}</div>;
}
