import React from "react";
//counting add gareko
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
// framer motion 
import { motion } from "framer-motion";
//transition effect for fade
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10  lg:flex-row lg:items-center  lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-about bg-contain bg-no-repeat h-[600px] mix-blend-lighten bg-top "
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"} 
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            <h2 className="h2 text-accent">About Me</h2>
            <h3 className="h3 mb-4">
              {" "}
              I'm a Freelance Full-Stack Developer with over 5 years Experience
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum quia tempore dolore est, fugit explicabo esse natus
              odit rerum, aperiam rem ratione quis odio. Dolorum totam non aut
              velit dignissimos.
            </p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={5} duration={4} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={10} duration={4} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2 ">
                  {inView ? <CountUp start={0} end={8} duration={4} /> : null}
                  k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
