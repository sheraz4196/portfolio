"use client";
import { useEffect, useState } from "react";
export default function useTimeFormat(rawSeconds: number): string {
  const [formattedTime, setFormattedTime] = useState<string>("");
  useEffect(() => {
    const hours = Math.floor(rawSeconds / 3600);
    const minutes = Math.floor((rawSeconds % 3600) / 60);
    const seconds = Math.floor(rawSeconds % 60);
    const formattedHours =
      hours > 0 ? `${hours.toString().padStart(2, "0")}:` : "";
    const formattedMinutes = `${minutes.toString().padStart(2, "0")}:`;
    const formattedSeconds = seconds.toString().padStart(2, "0");
    setFormattedTime(`${formattedHours}${formattedMinutes}${formattedSeconds}`);
  }, [rawSeconds]);
  return formattedTime;
}
