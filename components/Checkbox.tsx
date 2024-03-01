"use client";
import { useState } from "react";
import { Check } from "lucide-react";
export type CheckboxProps = {
  label: string;
  isChecked: boolean;
  handleCheckboxChange?: () => void;
};

export default function Checkbox({
  label,
  isChecked,
  handleCheckboxChange,
}: CheckboxProps) {
  const [state, setState] = useState<boolean>(isChecked);
  function handleChange() {
    setState(!state);
    if (!handleCheckboxChange) return;
    handleCheckboxChange();
  }
  return (
    <div
      className="flex gap-2  items-center cursor-pointer"
      onClick={handleChange}
    >
      <div
        className={`w-6 h-6  rounded-md border border-gray-400 flex-shrink-0 flex justify-center items-center ${
          state ? "bg-blue-500 border-blue-500" : ""
        }`}
      >
        {state && <Check />}
      </div>
      <label className="text-zinc-800 text-lg select-none cursor-pointer">
        {label}
      </label>
    </div>
  );
}
