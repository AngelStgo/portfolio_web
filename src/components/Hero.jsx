import React from "react";
import { Button } from "./ui/button";
// import "tailwindcss";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#3A86FF]">
        Hey! I'm Angel Santiago
      </h1>
      <p className="text-lg md:text-xl text-[#1E293B] max-w-xl">
        Full Stack Developer building thoughtful web apps with clean code & creative design.
      </p>
      <div className="mt-6 flex gap-4">
        <Button className="bg-[#3A86FF] hover:bg-blue-600 text-white px-6 py-2 rounded-2xl shadow-md">
          View Projects
        </Button>
        <Button variant="outline" className="border-[#3A86FF] text-[#3A86FF] hover:bg-[#3A86FF] hover:text-white px-6 py-2 rounded-2xl">
          Download Resume
        </Button>
      </div>
    </section>
  );
}
