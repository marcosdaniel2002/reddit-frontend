function FormRowSettingsAccount({ children, labelId, labelText, error }) {
  return (
    <div className="[&>input] flex flex-col">
      <label htmlFor={labelId} className="pb-1 font-semibold text-gray-600">
        {labelText}
      </label>
      {children}
      <span className="block h-[20px] text-sm text-red-700">{error}</span>
    </div>
  );
}

export default FormRowSettingsAccount;
