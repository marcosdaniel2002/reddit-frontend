import { NavLink } from "react-router-dom";

function PostNavList({ children, onClick, isActive }) {
  return (
    <li className="cursor-pointer" onClick={onClick}>
      <span
        className={`group block px-[14px] font-semibold text-black hover:bg-gray-200 ${isActive && "active"}`}
      >
        <span className="block h-full leading-[46px] group-[.active]:border-b-[3px] group-[.active]:border-blue-600">
          {children}
        </span>
      </span>
    </li>
  );
}

export default PostNavList;

// [&.active]:[&_span]:border-b-[3px] [&.active]:[&_span]:border-blue-600
