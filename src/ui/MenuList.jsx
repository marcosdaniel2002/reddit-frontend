import { Link } from "react-router-dom";

function MenuList({ children, to }) {
  return (
    <li className="flex max-h-10 cursor-pointer items-center px-4 py-1 hover:bg-neutral-100">
      <Link className="w-full" to={to}>
        <div className="flex w-full items-center gap-3 py-2 [&>svg]:size-5">
          {children}
        </div>
      </Link>
    </li>
  );
}

export default MenuList;
