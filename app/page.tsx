"use client";
import Popup from "$/components/popup";
import { useState } from "react";
import Hero from "./Hero-section";
import Trailor from "./Trailors-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Trailor />
    </main>
  );
}
