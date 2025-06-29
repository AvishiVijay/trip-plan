import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Trip Planner</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-300">Login</Link>
        <Link to="/register" className="hover:text-blue-300">Register</Link>
        <Link to="/trips" className="hover:text-blue-300">My Trips</Link>
        <Link to="/trip/new" className="hover:text-blue-300">Add Trip</Link>
      </div>
    </nav>
  );
}

export default Navbar;
