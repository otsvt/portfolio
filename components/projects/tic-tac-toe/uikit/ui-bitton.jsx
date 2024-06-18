import clsx from "clsx";

export const UiButton = ({ className, type, size, children, onClick }) => {
  const classes = clsx(
    className,
    "flex items-center justify-center tracking-wider transition-all uppercase font-semibold rounded shadow-uiBtn",
    {
      primary: "bg-[rgb(187,_134,_252)] hover:bg-[rgba(187,_134,_252,_0.7)] ",
      outline: "border-2 text-[rgb(187,_134,_252)] hover:text-[rgba(187,_134,_252,_0.7)] border-white/10",
      disabled: "bg-black/10 rounded",
    }[type],
    {
      md: "py-2 px-3 text-md",
    }[size]
  );

  return (
    <button disabled={type === "disabled"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
