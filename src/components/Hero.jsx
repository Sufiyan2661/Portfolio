import React from "react";
import { HERO_CONTENT } from "../../constants/index";
import profilepic from "../../assets/Firefly 20241013115845.png";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });
  return (
    <div className="border-b border-neutral-900 px-1  pb-4 lg:mb-32">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2 flex justify-center ">
          <div className="flex flex-col items-center  lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-14 text-3xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Mohd Sufiyan
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent "
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-sm tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className=" border bg-gray-700 rounded-lg text-2xl flex w-24  justify-center mb-3 hover:bg-slate-800"
            >
              <button
                onClick={() =>
                  window.open("/public/mohd_sufiyan_resume1.pdf")
                }
                
              >
                Resume
              </button>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              width={400}
              height={400}
              src={profilepic}
              alt="sufiyan"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
