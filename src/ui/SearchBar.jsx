import { IoIosSearch } from "react-icons/io";

function SearchBar() {
  return (
    <div className="flex items-center rounded-full bg-gray-200 p-3">
      <IoIosSearch fontSize={25} />
      <input
        type="text"
        placeholder="Search Reddit"
        className="w-32 bg-inherit outline-none sm:w-full"
      />
    </div>
  );
}

export default SearchBar;
