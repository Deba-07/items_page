// components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg font-semibold transition ${
        pathname === to
          ? "bg-blue-600 text-white"
          : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-4 py-3 flex justify-center gap-4">
      {navLink("/view-items", "View Items")}
      {navLink("/add-item", "Add Item")}
    </nav>
  );
};

export default Navbar;
