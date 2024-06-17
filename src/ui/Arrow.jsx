function Arrow({ children, onClick }) {
  return (
    <span
      className="flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 hover:bg-black/85 [&>svg]:text-white"
      onClick={onClick}
    >
      {children}
    </span>
  );
}

export default Arrow;
