import UserMenuList from "../../ui/UserMenuList";
import { IoIosLogOut } from "react-icons/io";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <UserMenuList onClick={logout}>
      <IoIosLogOut />
      <span>Log out</span>
    </UserMenuList>
  );
}

export default Logout;
