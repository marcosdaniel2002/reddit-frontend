import { PiArrowFatUpLight } from "react-icons/pi";
import { PiArrowFatDownLight } from "react-icons/pi";

function ButtonRounded({ onClick, type = "like" }) {
  return (
    <button
      onClick={onClick}
      className="group flex aspect-square size-full items-center justify-center rounded-full hover:bg-gray-200 [&_svg]:text-base"
    >
      {type === "like" ? (
        <PiArrowFatUpLight className="group-hover:text-orange-600" />
      ) : (
        <PiArrowFatDownLight className="group-hover:text-blue-500" />
      )}
    </button>
  );
}

export default ButtonRounded;
