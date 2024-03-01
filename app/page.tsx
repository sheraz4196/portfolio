"use client";
import Checkbox from "$/components/Checkbox";
import useKey from "$/Hooks/useKey";
export default function Home() {
  useKey("space", () => {
    console.log("pressed");
  });
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <Checkbox label="True" isChecked={true} />
    </div>
  );
}
