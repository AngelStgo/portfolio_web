import React from "react";
import { Button } from "./ui/button"
// import { Mail, Download } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F0F4F8] dark:bg-slate-800 text-[#1E293B] dark:text-white py-20 px-6 text-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-[#3A86FF]">Let's Connect!</h2>
      <p className="mb-6">
        Feel free to reach out for collaborations, career opportunities or just to say hi!
      </p>

      <div className="flex justify-center gap-4 flex-wrap mb-8">
        <a
          href="mailto:yourname@example.com"
          className="flex items-center gap-2 text-[#3A86FF] hover:underline"
        >
          {/* <Mail size={20} /> */}
          euangel.stgo@gmail.com
        </a>
      </div>

      <Button className="bg-[#3A86FF] hover:bg-blue-600 text-white px-6 py-2 rounded-2xl shadow-md">
        <a href={"/src/assets/Angel-Stgo-resume.pdf"} download className="flex items-center gap-2">
          {/* <Download size={18} /> */}
          Download Resume
        </a>
      </Button>
    </section>
  );
}
