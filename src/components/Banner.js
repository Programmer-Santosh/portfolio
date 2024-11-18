import React from "react";
//banner ko first img import
import Image from "../assets/avatar.png";
import { FaGithub, FaYoutube} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center "
      id="home"
    >
      <div className=" container mx-auto ">
        <div className=" flex flex-col gap-y-8 lg:flex-row lg:items-center ">
          <div className="flex flex-col ">
            <div className="flex-1 text-center font-secondary  lg:text-left mb-2">
              <motion.h1
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="  text-[45px] font-bold leading-[0.8] lg:text-[70px] "
              >
                SANTOSH <span> THAPA</span>
              </motion.h1>
            </div>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" mb-6 text-[36px] lg:text-[60px] text-center lg:text-left font-secondary font-semibold leading-[1]uppercase "
            >
              <span className="mr-4 text-white">I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Programmer",
                  2000,
                  "Designer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-center mb-8 mx-auto lg:text-left lg:mx-4 lg:w-4/5  "
            >
              {" "}
              I specialize in creating responsive, visually appealing websites
              and applications that are not only functional but also tailored to
              meet the specific needs of each client. From front-end development
              using modern frameworks like React and Vue.js to crafting
              beautiful user interfaces with design tools such as Figma and
              Adobe XD, I strive to deliver projects that stand out in both
              aesthetics and performance.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex  gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg ">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 mx-auto lg:mx-0 "
            >
              <a href="#">
                <FaYoutube />
              </a>
            
          
              <a href="#">
                <FaGithub />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex max-w-[320px] lg:max-w-[482px] mx-auto "
          >
            <img className="  hover:scale-125 transition-all duration-500" src={Image} alt="" />
          </motion.div>
        </div>
      </div> 
    </section>
  );
};

export default Banner;
