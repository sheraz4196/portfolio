"use client";
import { useEffect } from "react";
export default function useKey(key: string, callback: () => void) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const pressedKey = event.key.toLowerCase();
      if (pressedKey === key.toLowerCase()) {
        callback();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [key, callback]);
}
