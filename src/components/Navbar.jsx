
import { Outlet } from "react-router-dom";

export default function Navbar({ products }) {
  return (
    <div>
      <nav>
        <div className="logo">
          <h1>ReactStore</h1>
        </div>
        <div className="links">
          <a href="/">All products</a>
          <a href="/comments">Comments</a>
          <a href="/categories/">Categories</a>
          <a href="/usersearch">Search for Users</a>
          <a href="/todos">Get all todos</a>
        </div>
       
          
  
      </nav>
      <Outlet />
    </div>
  );
}
