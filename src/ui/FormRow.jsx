// function FormRow({
//   id,
//   labelText = "Enter your name",
//   inputType = "text",
//   register,
//   defaultValue,
// }) {
//   return (
//     <div
//       className="relative rounded-md border-[1px] border-gray-400 px-4 py-[6px] [&:has(input:focus)]:border-primary
//     [&:has(input:valid)]:border-primary"
//     >
//       {register ? (
//         <input
//           required
//           id={id}
//           type={inputType}
//           className="peer z-10 w-full bg-transparent outline-none"
//           {...register}
//         />
//       ) : (
//         <input id={id} type={inputType} className="peer w-full outline-none" />
//       )}
//       <label
//         htmlFor={id}
//         className="absolute left-3 cursor-text bg-white px-[3px]
//         text-slate-500 transition-all
//         peer-valid:translate-x-[-13px] peer-valid:translate-y-[-19px] peer-valid:scale-75 peer-valid:text-primary peer-focus:translate-x-[-13px]
//         peer-focus:translate-y-[-19px] peer-focus:scale-75 peer-focus:text-primary"
//       >
//         {labelText}
//       </label>
//     </div>
//   );
// }

function FormRow({ children, labelId, labelText = "Enter your name", error }) {
  return (
    <div className="relative">
      {children}
      <label
        htmlFor={labelId}
        className="absolute left-3 top-2 cursor-text bg-white px-[3px]
        text-slate-500 transition-all
        peer-valid:translate-x-[-13px] peer-valid:translate-y-[-19px] peer-valid:scale-75 peer-valid:text-primary peer-focus:translate-x-[-13px]
        peer-focus:translate-y-[-19px] peer-focus:scale-75 peer-focus:text-primary"
      >
        {labelText}
      </label>
      <span className="block h-[20px] text-sm text-red-700">{error}</span>
      {/* {error && } */}
    </div>
  );
}

export default FormRow;
