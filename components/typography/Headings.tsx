import { ReactNode } from "react";
export type HeadingProps = {
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  children: ReactNode;
};

export default function Heading({
  size = "h3",
  className,
  children,
}: HeadingProps) {
  switch (size) {
    case "h1":
      return (
        <h1
          className={`text-zinc-800 tracking-wider mb-6 text-6xl font-light ${className}`}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`text-zinc-800 tracking-wider  mb-5 text-5xl font-medium ${className}`}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`text-zinc-800 tracking-wider  mb-4 text-4xl font-semibold ${className}`}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`text-zinc-800 tracking-wider  mb-3 text-3xl font-bold ${className}`}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`text-zinc-800 tracking-wider  mb-2 text-2xl font-extrabold ${className}`}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`text-zinc-800 tracking-wider  mb-1 text-xl font-black ${className}`}
        >
          {children}
        </h6>
      );
    default:
      break;
  }
}
