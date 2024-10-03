import React from 'react';
import { motion } from 'framer-motion';
import mainimg1 from '../assests/main.png'
import SmallCards from '../cards/SmallCards';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Hero = () => {
    
  const subtext = ", I’am ";
  const text = "Santhoshkumar.";
  const hello = "Hello";

  return (
    <div className='w-full h-[100vh] flex items-center justify-center font-sora'>

      <div className='w-1/2 flex-col justify-center mx-28'>

        <motion.h1
            className='text-black text-5xl font-normal text-[40px]  text-start '
            initial={{ x: '20%' }}
            animate={{ x: '-0%' }} 
            transition={{ duration: 1 }}> 
            
                {hello}

            <motion.span
            className='ml-2 font-normal' 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }} >
                {subtext}
            </motion.span>

            <motion.span
            className='ml-2 font-extrabold' 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }} >
                {text}
            </motion.span>

        </motion.h1>

        <motion.h1
            className='text-black text-5xl font-normal text-[42px] mt-7 text-start '
            initial={{ opacity: 0, y : '-30%' }} 
            animate={{ opacity: 1, y : '0%' }}
            transition={{ duration: 1, delay: 1.2 }}> 
            
                <motion.span className='mr-3 font-extrabold'>{'Frontend'}</motion.span>
                <motion.span className='font-extrabold tracking-tighter'   
                style={{
                    color: 'white', 
                    textShadow: `
                    2px 2px 0 black,
                    -2px -2px 0 black,
                    -2px 2px 0 black,
                    2px -2px 0 black,
                    2px 2px 0 black,
                    1px 1px 0 black,
                    -1px -1px 0 black,
                    -1px 1px 0 black,
                    1px -1px 0 black` 
                    }}>
                    {'Developer'}
                </motion.span>

        </motion.h1>


        <motion.p
            className='text-zinc-500 font-normal text-[16px] mt-9 text-start leading-7'
            initial={{ opacity: 0,}} 
            animate={{ opacity: 1, }}
            transition={{ duration: 1, delay: 1.2 }}> 
            {'I’m passionate about creating engaging and user-friendly web experiences. With a keen eye for design and a commitment to delivering high-quality solutions, I strive to bring ideas to life through innovative and responsive interfaces.'}
        </motion.p>

        <div className='mt-16 flex gap-6'>
           <SmallCards w={'52px'} h={'52px'} icon={<FaFacebook size={24}/>} />
           <SmallCards w={'52px'} h={'52px'} icon={<FaLinkedin  size={24}/>} />
           <SmallCards w={'52px'} h={'52px'} icon={<FaInstagram  size={24}/>} />
        </div>

        
      </div>

      <div className='w-1/2 flex justify-start items-center'>
        <motion.img src={mainimg1} 
        initial={{ opacity: 0, x : '-15%' }} 
        animate={{ opacity: 1, x : '0%' }}
        transition={{ duration: 1, delay: 1.2 }}/>
      </div>
      
    </div>
  );
};

export default Hero;
