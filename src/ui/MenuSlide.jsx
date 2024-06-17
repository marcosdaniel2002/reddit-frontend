import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import MenuList from "./MenuList";

function MenuSlide({ children, list }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div
        className="flex h-[40px] cursor-pointer items-center justify-between px-4 py-1 hover:bg-neutral-100"
        onClick={() => setIsOpen((show) => !show)}
      >
        <span className="text-xs tracking-widest text-stone-500">
          {children}
        </span>
        <span
          className={
            isOpen
              ? "rotate transition-transform delay-75"
              : "transition-transform delay-75"
          }
        >
          <IoIosArrowUp />
        </span>
      </div>
      {isOpen && list}
    </>
  );
}

export default MenuSlide;
