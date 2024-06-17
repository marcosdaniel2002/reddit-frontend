import { useState } from "react";
import { Link } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import Hamburguer from "./Hamburguer";
import Icon from "./Icon";
import SearchBar from "./SearchBar";
import User from "./User";
import UserMenu from "./UserMenu";
import Menu from "./Menu";
import ModalDark from "./ModalDark";

function Header() {
  const [isMenuUser, setIsMenuUser] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="col-span-full px-4">
      <nav className="relative flex h-12 items-center justify-between border-b-[1.5px] py-8">
        <div className="flex items-center gap-2">
          <Hamburguer setIsMenu={setIsMenu} />
          <Icon />
          {isMenu && (
            <>
              <ModalDark />
              <Menu />
            </>
          )}
        </div>
        {/* <SearchBar /> */}
        <div>
          <ul className="flex items-center gap-3">
            <li>
              <Link
                to="/post?type=TEXT"
                className="flex items-center justify-center gap-1 rounded-full px-[10px] py-2 hover:bg-gray-200"
              >
                <GoPlus size={25} />
                <span className="text-base">Create</span>
              </Link>
            </li>
            <li>
              <User setIsModalUser={setIsMenuUser} />
              {isMenuUser && <UserMenu setIsModalUser={setIsMenuUser} />}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
