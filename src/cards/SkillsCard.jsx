import React from 'react';

const SkillsCard = ({ icon, title }) => {
  return (
    <div className='w-[180px] h-[180px] shadow-lg border-2 border-black rounded-md flex flex-col justify-center items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:bg-black hover:text-white mx-auto'>
      <div className='text-[50px] mb-4'>
        {icon}
      </div>
      <h1 className='text-[20px] font-semibold'>{title}</h1>
    </div>
  )
}

export default SkillsCard;
