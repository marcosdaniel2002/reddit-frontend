import { RxHamburgerMenu } from "react-icons/rx";

function Hamburguer({ setIsMenu }) {
  return (
    <button
      className="flex items-center justify-center rounded-full p-2.5 hover:bg-gray-200 lg:hidden"
      onClick={() => setIsMenu((show) => !show)}
    >
      <RxHamburgerMenu fontSize={25} fontWeight={200} />
    </button>
  );
}

export default Hamburguer;
