import PostNavList from "./PostNavList";

function PostNav({ type, setSearchParams }) {
  function handleNavClick(type) {
    setSearchParams({ type });
  }

  return (
    <nav className="">
      <ul className="flex">
        <PostNavList
          onClick={() => handleNavClick("TEXT")}
          isActive={type === "TEXT"}
        >
          Text
        </PostNavList>
        <PostNavList
          onClick={() => handleNavClick("IMAGE")}
          isActive={type === "IMAGE"}
        >
          Image & Video
        </PostNavList>
      </ul>
    </nav>
  );
}

export default PostNav;

// href="/post?type=TEXT"
