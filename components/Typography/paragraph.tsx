import { ReactNode } from "react";
export type ParagraphProps = {
  size?: "small" | "normal" | "large";
  className?: string;
  children: ReactNode;
};
export default function Paragraph({
  size = "normal",
  className,
  children,
}: ParagraphProps) {
  return (
    <p
      className={`text-zinc-800 tracking-wide leading-7 ${
        size === "small" ? "text-base font-bold mb-2" : ""
      } ${size === "normal" ? "text-lg font-medium mb-4" : ""} ${
        size === "large" ? "text-2xl mb-6" : ""
      } ${className || ""}`}
    >
      {children}
    </p>
  );
}
