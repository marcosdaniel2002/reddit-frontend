import { NavLink } from "react-router-dom";

function SettingsList({ children, to }) {
  return (
    <li className="">
      <NavLink
        to={to}
        className="block p-3 text-gray-400 [&.active]:border-b-[3px] [&.active]:border-blue-600 [&.active]:text-black"
      >
        {children}
      </NavLink>
    </li>
  );
}

export default SettingsList;
