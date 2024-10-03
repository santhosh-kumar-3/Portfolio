import React from "react";
import { motion } from "framer-motion";
import aboutimg from "../assests/mainimg2.png";

const AboutMe = () => {
  return (
    <div className="h-[85vh] w-full flex font-sora mb-10">
      <div className="w-1/2 flex justify-start items-end pl-8 font-sora">
        <motion.img
          src={aboutimg}
          initial={{ opacity: 0, x: "-5%" }}
          animate={{ opacity: 1, x: "0%" }}
          transition={{ duration: 1, delay: 1 }}
          className="w-[580px] h-[580px]"
        />
      </div>

      <div className="w-1/2 flex-col justify-start my-auto ml-10">
        <h1 className="text-[38px] items-start pt-8">
          <span className="opacity-90">About </span>
          <span className="font-extrabold">Me</span>
        </h1>

        <div className="flex-col space-y-6 mt-7 w-[90%]">
          <p>
            I'm a passionate frontend developer with expertise in creating
            interactive, visually appealing web applications using React.js. I
            specialize in building seamless user interfaces with a focus on user
            experience, and I'm proficient in using modern tools like Tailwind
            CSS for responsive design and Framer Motion for adding engaging
            animations.
          </p>
          <p>
            While my main focus is frontend development, I also have
            intermediate knowledge of backend technologies like Node.js and
            Express, allowing me to handle the server-side aspects when needed.
            Additionally, I have experience with React Native, enabling me to
            extend my skills beyond web development and into mobile app
            creation.
          </p>
          <p>
            In my free time, I enjoy staying active in the developer community
            through GitHub and Twitter, where I share my experiences and
            learnings. I'm always excited to experiment with new tools,
            collaborate on projects, and push the boundaries of what's possible
            in frontend development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
