import UserMenuList from "./UserMenuList";
import { CiWallet } from "react-icons/ci";

import { GoMoon } from "react-icons/go";
import { PiCursorClickLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { GoShieldLock } from "react-icons/go";
import Logout from "../features/authentication/Logout";

function UserMenu({ setIsModalUser }) {
  return (
    <div className="absolute right-0 top-full z-40 w-64 rounded-lg bg-white shadow-md [&>ul]:my-2">
      <ul>
        <UserMenuList
          to="/settings/account"
          onClick={() => setIsModalUser(false)}
        >
          <CiSettings />
          <span>Settings</span>
        </UserMenuList>
        <UserMenuList>
          <CiWallet />
          <span>Contributor Program</span>
        </UserMenuList>
        <UserMenuList>
          <GoShieldLock />
          <span>Premium</span>
        </UserMenuList>
      </ul>
      <hr />
      <ul>
        <UserMenuList>
          <PiCursorClickLight />
          <span>Advertise on Reddit</span>
        </UserMenuList>
      </ul>
      <hr />
      <ul>
        <UserMenuList>
          <GoMoon />
          <span>Dark Mode</span>
        </UserMenuList>
      </ul>
      <hr />
      <ul>
        <Logout />
      </ul>
    </div>
  );
}

export default UserMenu;
