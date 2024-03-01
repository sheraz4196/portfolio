export type InputProps = {
  label?: string;
  type?: "text" | "password" | "email" | "range";
  ariaLabel?: string;
  placeholder?: string;
  className?: string;
  value?: string | number;
  onChange?: () => void;
};

export default function Input({
  label,
  type,
  ariaLabel,
  placeholder,
  className,
  value = "text",
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={label} className="text-zinc-800">
          {label}
        </label>
      )}
      <input
        aria-label={`${ariaLabel ? ariaLabel : placeholder}`}
        id={label}
        value={value}
        onChange={onChange}
        type={type}
        className={`inline-block bg-red-500 caret-white placeholder:text-zinc-900 px-4 py-2 border rounded-lg border-zinc-400 ${className}`}
      />
    </div>
  );
}
