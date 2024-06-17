function Button({ children, onClick, type = "primary", disabled = false }) {
  const styles = `${type === "primary" && "bg-primary hover:bg-primary/90"}
  ${type === "secondary" && "bg-secondary hover:bg-secondary/90"} ${disabled && "opacity-50"}`;
  return (
    <button
      className={styles + " rounded-md px-3 py-1 text-white"}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
