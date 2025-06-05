"use client";
import React from "react";
import { motion } from "framer-motion";

const ContactBlock = () => {
  return (
    <div className="min-h-screen flex flex-col font-inter mt-2">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold border-b-2 border-[#c49647] inline-block">
          Contact
        </h2>
      </div>

      <main className="flex-grow flex justify-center items-start pt-10 px-4">
        <motion.form
          action="https://formsubmit.co/6a794e02b6e916d45ad18dfa735b15c4" // FormSubmit.co action
          method="POST"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#0E1117] rounded-3xl max-w-2xl w-full p-8 flex flex-col gap-4"
          aria-label="Contact form"
        >
          <h2 className="text-white font-semibold text-center mb-4">
            Get In Touch
          </h2>

          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://your-website.com/thank-you" // Optional: redirect after form submit
          />

          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className="bg-[#464a4f] text-white rounded-lg py-3 px-4 placeholder-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="bg-[#464a4f] text-white rounded-lg py-3 px-4 placeholder-white focus:outline-none"
          />
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="bg-[#464a4f] text-white rounded-lg py-3 px-4 placeholder-white focus:outline-none"
          />
          <textarea
            rows={4}
            name="message"
            required
            placeholder="Message"
            className="bg-[#464a4f] text-white rounded-lg py-3 px-4 placeholder-white resize-none focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#464a4f] text-white font-semibold tracking-widest rounded-full py-2 px-10 mx-auto mt-2 hover:bg-[#8a8c8c] transition-colors"
          >
            SUBMIT
          </button>
        </motion.form>
      </main>
    </div>
  );
};

export default ContactBlock;
