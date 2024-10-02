import React from "react";
import { FaJs, FaHtml5, FaGitAlt, FaFigma, FaCss3Alt } from "react-icons/fa";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import SkillsCard from "../cards/SkillsCard";

const MySkills = () => {
  const skills = [
    { icon: <FaHtml5 />, title: "HTML5" },
    { icon: <FaCss3Alt />, title: "Css" },
    { icon: <FaJs />, title: "JavaScript" },
    { icon: <RiReactjsFill />, title: "React.js" },
    {
      icon: <RiTailwindCssFill />,
      title: "Tailwind CSS",
    },
    { icon: <DiNodejs />, title: "Node.js" },
    { icon: <SiExpress />, title: "Express.js" },
    { icon: <SiMongodb />, title: "MongoDB" },
    { icon: <FaGitAlt />, title: "Git" },
    { icon: <FaFigma />, title: "Figma" },
  ];

  return (
    <div className="w-full h-[90vh] my-auto font-sora pt-5">
      <h1 className="text-[40px] text-center">
        My <span className="font-extrabold">Skills</span>
      </h1>

      <div className="grid grid-cols-2 mt-14 sm:grid-cols-2 lg:grid-cols-5 gap-y-20 mx-8">
        {skills.map((item, index) => (
          <SkillsCard title={item.title} icon={item.icon} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MySkills;
