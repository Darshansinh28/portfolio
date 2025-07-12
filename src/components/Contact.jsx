import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { styles } from "../styles";
import { RobotCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mwpoplzz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setLoading(false);
        toast.success("Thank you! I'll get back to you soon.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setLoading(false);
        toast.error("Oops! Something went wrong. Please try again.", {
          position: "bottom-right",
          theme: "dark",
        });
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Failed to send message. Please try again later.", {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl relative overflow-hidden border border-[#64bbbb]/10 shadow-lg"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#64bbbb] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#64bbbb] rounded-full blur-2xl"></div>
        </div>

        {/* Header */}
        <div className="relative z-10 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#64bbbb] to-[#00cea8] rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className={styles.sectionSubText}>Let's Connect</p>
              <h3 className={styles.sectionHeadText}>
                <span className="block sm:hidden">Get in touch</span>
                <span className="hidden sm:block">Contact</span>
              </h3>
            </div>
          </div>
        </div>

                  <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col gap-6"
          >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="bg-tertiary/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary/60 text-white rounded-lg outline-none border-2 border-transparent focus:border-[#64bbbb]/30 transition-all duration-300 font-medium hover:bg-tertiary/80"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="bg-tertiary/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary/60 text-white rounded-lg outline-none border-2 border-transparent focus:border-[#64bbbb]/30 transition-all duration-300 font-medium hover:bg-tertiary/80"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Ready to collaborate?"
              className="bg-tertiary/50 backdrop-blur-sm py-4 px-6 placeholder:text-secondary/60 text-white rounded-lg outline-none border-2 border-transparent focus:border-[#64bbbb]/30 transition-all duration-300 font-medium hover:bg-tertiary/80 resize-none"
              required
            />
          </label>

          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-3 text-secondary text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#64bbbb] rounded-full animate-pulse"></div>
                <span>Open for opportunities</span>
              </div>
            </div>
            
            <button
              type="submit"
              className="bg-gradient-to-r from-[#64bbbb] to-[#00cea8] hover:from-[#00cea8] hover:to-[#64bbbb] py-3 px-8 rounded-xl outline-none text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>Send</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              )}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <RobotCanvas />
      </motion.div>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
