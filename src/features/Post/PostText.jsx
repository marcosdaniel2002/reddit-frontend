import { FaBold } from "react-icons/fa";
import { LiaItalicSolid } from "react-icons/lia";
import { BsTypeStrikethrough } from "react-icons/bs";
import { ImSuperscript2 } from "react-icons/im";
import { LuHeading1 } from "react-icons/lu";

function PostText({ isHidden, register }) {
  return (
    <div
      className={`min-h-[min(20vw,150px)] overflow-hidden rounded-2xl border-[1.5px] border-gray-300 outline-none ${isHidden && "hidden"}`}
    >
      <div className="flex justify-between px-2 py-1">
        <div className="flex gap-1">
          <span className="flex size-8 cursor-pointer items-center justify-center rounded-full hover:bg-gray-300">
            <FaBold />
          </span>
          <span className="flex size-8 cursor-pointer items-center justify-center rounded-full hover:bg-gray-300">
            <LiaItalicSolid />
          </span>
          <span className="flex size-8 cursor-pointer items-center justify-center rounded-full hover:bg-gray-300">
            <BsTypeStrikethrough />
          </span>
          <span className="flex size-8 cursor-pointer items-center justify-center rounded-full hover:bg-gray-300">
            <ImSuperscript2 />
          </span>
          <span className="flex size-8 cursor-pointer items-center justify-center rounded-full hover:bg-gray-300">
            <LuHeading1 />
          </span>
        </div>
        <span className="flex h-8 cursor-pointer items-center justify-center rounded-full px-2 text-xs font-semibold hover:bg-gray-300">
          Markdown Editor
        </span>
      </div>
      <textarea
        placeholder="Body"
        name=""
        id="body"
        {...register("body")}
        className="h-[103px] w-full px-4 py-[12px] outline-none"
      ></textarea>
    </div>
  );
}

export default PostText;
