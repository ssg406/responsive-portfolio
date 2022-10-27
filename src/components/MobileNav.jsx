import { navLinks } from "../data";
import { Link } from "react-router-dom";

const MobileNav = ({ showMenu, setShowMenu }) => {
  return (
    <nav
      className={`p-1 border-b-2 border-gray-300 ${
        showMenu ? "block" : "hidden"
      }`}
    >
      <ul className="text-center">
        {navLinks.map(({ name, path, id }) => {
          return (
            <li
              className="active:bg-slate-400 p-1 active:rounded-md transition-all"
              key={id}
            >
              <Link
                className="font-bold uppercase"
                to={path}
                onClick={() => setShowMenu(false)}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;
