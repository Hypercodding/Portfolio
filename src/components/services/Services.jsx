import { useRef } from "react";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import "./services.css";
import { motion, useInView } from "motion/react";

const textVarient = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const listVarient = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 3,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Frontend Projects",
    counter: 2,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Full Stack Applications",
    counter: 4,
  },
];

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVarient}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          How do I help?
        </motion.h1>
        <motion.div
          variants={listVarient}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVarient}
              // initial="initial"
              className="service"
              key={service.id}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="sSection right">
        <ComputerModelContainer />
      </div>
    </div>
  );
};

export default Services;
