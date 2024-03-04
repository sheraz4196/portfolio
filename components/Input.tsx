import { ChangeEvent } from "react";
export type InputProps = {
  label?: string;
  type?: "text" | "password" | "email" | "range";
  ariaLabel?: string;
  placeholder?: string;
  className?: string;
  value?: string | number;
  onChange?: (e?: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  type = "text",
  ariaLabel,
  placeholder,
  className,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col gap-3">
      {label && (
        <label htmlFor={label} className="text-zinc-800 text-xl font-medium">
          {label} :
        </label>
      )}
      <input
        aria-label={`${ariaLabel || placeholder || label}`}
        id={label}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`inline-block bg-gray-100   caret-blue-900 placeholder:text-zinc-900 px-4 py-2 border rounded-lg border-zinc-400 text-zinc-800 focus-input ${
          className || ""
        }`}
      />
    </div>
  );
}
