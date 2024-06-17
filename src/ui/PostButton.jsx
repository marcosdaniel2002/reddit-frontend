function PostButton({ children, onClick }) {
  const style = `flex items-center justify-center h-8 gap-2 hover:bg-gray-200 px-3 py-1.5 rounded-full bg-gray-100 text-xs font-semibold [&_svg]:size-5`;

  return <button className={style}>{children}</button>;
}

export default PostButton;
