"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
  const name = (form.elements.namedItem("name") as HTMLInputElement).value;
  const email = (form.elements.namedItem("email") as HTMLInputElement).value;
  const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

  if (!email || !message) {
    toast.error("Email & Message is required!");
    return;
  }

  setIsLoading(true);
  try {
    const res = await fetch("/api/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });
    if (!res.ok) throw new Error();
    toast.success("Message sent successfully!");
    form.reset();
  } catch {
    toast.error("Something went wrong!");
  } finally {
    setIsLoading(false);
  }
};

   

  return (
    <section id="contact-section" className="w-full py-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left: Contact Form */}
        <div className="w-full">
          <h2 className="text-primary font-semibold text-lg 2xl:text-2xl inline-block border-s-2 border-primary ps-2 leading-6">
            CONTACT ME
          </h2>
          <p className="text-primary-light dark:text-primary-light mt-2 text-sm 2xl:text-lg max-w-md">
            Send me a message and I&apos;ll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg outline-none text-sm 2xl:text-lg bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 backdrop-blur-sm focus:border-primary/70"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg outline-none text-sm 2xl:text-lg bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 backdrop-blur-sm focus:border-primary/70"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg outline-none text-sm 2xl:text-lg bg-gradient-to-br from-primary/20 to-transparent border border-primary/30 backdrop-blur-sm focus:border-primary/70 resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className="w-fit ms-auto px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-md 2xl:text-lg rounded-lg bg-primary text-white font-semibold transition-transform duration-300 disabled:opacity-50"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right: Contact Info Card */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="absolute w-[520px] h-[520px] rounded-full bg-primary/20 blur-3xl" />

          <div className="relative w-full max-w-md rounded-3xl p-8 border border-primary/30 bg-gradient-to-br from-primary/20 to-transparent backdrop-blur-sm space-y-6">
            <div>
              <h3 className="text-xl 2xl:text-2xl font-semibold text-zinc-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-sm 2xl:text-lg text-zinc-600 dark:text-gray-400 mt-2">
                Feel free to reach out via email, phone, or visit me at my location.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <p className="text-sm 2xl:text-lg font-medium text-zinc-800 dark:text-zinc-200">Email</p>
                  <p className="text-md 2xl:text-xl text-zinc-600 dark:text-gray-400">wahabkhan9605@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-sm 2xl:text-lg font-medium text-zinc-800 dark:text-zinc-200">Phone</p>
                  <p className="text-md 2xl:text-xl text-zinc-600 dark:text-gray-400">+92 317 9922459</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-sm 2xl:text-lg font-medium text-zinc-800 dark:text-zinc-200">Location</p>
                  <p className="text-md 2xl:text-xl text-zinc-600 dark:text-gray-400">Peshawar, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">💼</span>
                <div>
                  <p className="text-sm 2xl:text-lg font-medium text-zinc-800 dark:text-zinc-200">LinkedIn</p>
                  <p className="text-md 2xl:text-xl text-zinc-600 dark:text-gray-400">linkedin.com/in/wahab-khan-203413347</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;