import { ReactNode } from "react";
export type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
  className?: string;
};
export default function Button({
  children,
  onClick,
  type = "button",
  className,
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 bg-blue-900 py-2 border-2 border-transparent rounded-lg text-lg font-bold hover:bg-blue-700 shadow-dim active:shadow-none focus:shadow-none focus:outline-none focus:border-white transition-all ${
        className || ""
      }`}
      aria-label={`${ariaLabel || children}`}
    >
      {children}
    </button>
  );
}
