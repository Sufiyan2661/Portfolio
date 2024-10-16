import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { animate, interpolate, motion } from "framer-motion";

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="border-b px-1 border-neutral-800 pb-24">
      <motion.h1 whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity: 1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-5">

        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" className="rounded-2xl   border-neutral-800 pb-4">
          <RiHtml5Fill className="text-8xl text-orange-500" />
        </motion.div>

        <motion.div
        
        variants={iconVariants(3)}
        initial="initial"
        animate="animate" 
        className="rounded-2xl  border-neutral-800 pb-4">
          <RiCss3Fill className="text-8xl text-blue-500" />
        </motion.div>

        <motion.div
         variants={iconVariants(3.5)}
         initial="initial"
         animate="animate" 
          className="rounded-2xl  border-neutral-800 pb-4">
          <RiJavascriptFill className="text-8xl text-yellow-500" />
        </motion.div>

        <motion.div
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"  className="rounded-2xl  border-neutral-800 pb-4">
          <RiReactjsFill className="text-8xl text-cyan-400" />
        </motion.div>

        <motion.div
         variants={iconVariants(4.5)}
         initial="initial"
         animate="animate"  className="rounded-2xl  border-neutral-800 pb-4">
          <RiNodejsFill className="text-8xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
