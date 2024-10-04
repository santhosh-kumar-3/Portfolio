import React, { useState } from "react";
import SmallCards from "../cards/SmallCards";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_awe1f8n";
    const templateId = "template_m0iadba";
    const publicKey = "J6lXzQ3OhXJl6h1A8";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "SK",
      message: formData.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Email sent successfully!");
        setFormData('')
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email.");
      });
  };

  return (
    <div className="h-[80vh] w-full flex font-sora items-center">
      {/* Left side form */}
      <div className="w-[60%] h-full p-8 flex items-center">
        <form
          className="flex flex-col space-y-5 w-[70%] mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="border border-gray-700 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-black text-custom-neutral"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-700 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            onChange={handleChange}
            value={formData.email}
          />
          <textarea
            name="message"
            placeholder="How can I help?"
            className="border border-gray-700 p-4 rounded-md focus:outline-none focus:ring-1 focus:ring-black h-32"
            onChange={handleChange}
            value={formData.message}
          ></textarea>

          <div className="flex items-center">
            <button
              type="submit"
              className="bg-black text-white px-5 py-4 rounded-md hover:bg-gray-800"
            >
              Get In Touch
            </button>
            {/* Social Media Icons */}
            <div className="ml-6 flex gap-6">
              <SmallCards
                w={"52px"}
                h={"52px"}
                icon={<FaFacebook size={24} />}
              />
              <SmallCards
                w={"52px"}
                h={"52px"}
                icon={<FaLinkedin size={24} />}
              />
              <SmallCards
                w={"52px"}
                h={"52px"}
                icon={<FaInstagram size={24} />}
              />
            </div>
          </div>
        </form>
      </div>

      {/* right side content */}
      <div className="w-[40%] h-fit  ">
        <h1 className="text-black text-5xl font-normal text-[42px] text-start ">
          <span className="mr-3 font-extrabold">{"Let’s"}</span>
          <span
            className="font-extrabold tracking-tighter"
            style={{
              color: "white",
              textShadow: `
                    2px 2px 0 black,
                    -2px -2px 0 black,
                    -2px 2px 0 black,
                    2px -2px 0 black,
                    2px 2px 0 black,
                    1px 1px 0 black,
                    -1px -1px 0 black,
                    -1px 1px 0 black,
                    1px -1px 0 black`,
            }}
          >
            {"talk"}
          </span>

          <span className="ml-3 font-extrabold">{"  for"}</span>
        </h1>

        <h1 className="text-black text-5xl text-[42px] pt-3.5 text-start font-extrabold">
          {" Something special"}
        </h1>

        <p className="text-[14px] pt-6 font-light text-custom-neutral">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>

        <h1 className="text-[20px] mt-10 font-medium">
          santhoshkmb123sk@gmail.com
        </h1>
        <h1 className="text-[20px] mt-1 font-medium mb-10">9025232001</h1>
      </div>
    </div>
  );
};

export default ContactUs;
