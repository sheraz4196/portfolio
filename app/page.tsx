"use client";
import Button from "$/components/button";
import Input from "$/components/Input";
import { useState } from "react";
export default function Home() {
  const [value, setValue] = useState("Hello");
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <Input
        placeholder="Hello"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="password"
      />
      <Button>Button</Button>
    </div>
  );
}
