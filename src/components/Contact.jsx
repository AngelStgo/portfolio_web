
import { Button } from "./ui/button";

function Contact() {
    return (
      <section id="contact" className="py-16 px-6">
        <h2 className="text-2xl font-semibold text-[#3A86FF] mb-4">Contact Me</h2>
        <form className="max-w-xl space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          ></textarea>
          <Button className="bg-[#3A86FF] hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            Send Message
          </Button>
        </form>
      </section>
    );
  }

  export default Contact