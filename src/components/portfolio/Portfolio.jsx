import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import Slider from "react-slick";
import "./portfolio.css";

// Portfolio items
const items = [
  {
    id: 1,
    img: "/payam.PNG",
    title: "Introduction Website",
    desc: "Introducing the personality freelnace project.",
    link: "/https://payamehaq.com/",
  },
  {
    id: 2,
    img: "/login_signup.PNG",
    title: "Full Stack Blog Application",
    desc: "Figma design Login Signup implemented.",
    link: "https://figma-login-signup.vercel.app/",
  },
  {
    id: 3,
    img: "/chatio.PNG",
    title: "Real-time Chat Application",
    desc: "",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

// List Item Component
const ListItem = ({ item }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={inView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt={item.title} />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={inView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (3 seconds in this case)
  };

  return (
    <div className="portfolio">
      <section className="portfolio-section" id="portfolio">
        <Slider {...settings}>
          {items.map((item) => (
            <ListItem item={item} key={item.id} />
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Portfolio;
