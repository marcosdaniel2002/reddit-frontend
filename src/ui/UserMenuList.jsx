import { Link } from "react-router-dom";

function UserMenuList({ children, onClick, to }) {
  return (
    <li
      className="cursor-pointer px-4 py-2 hover:bg-neutral-100"
      onClick={onClick}
    >
      <Link to={to}>
        <div className="flex items-center gap-3 py-2 [&>svg]:size-5">
          {children}
        </div>
      </Link>
    </li>
  );
}

export default UserMenuList;
