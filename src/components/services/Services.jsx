import ComputerModelContainer from "./computer/ComputerModelContainer";
import "./services.css";

const services = [
  {
    id: 1,
    img: "/service1.png",
    title: "Web Development",
    counter: 35,
  },
  {
    id: 2,
    img: "/service2.png",
    title: "Frontend Projects",
    counter: 23,
  },
  {
    id: 3,
    img: "/service3.png",
    title: "Full Stack Applications",
    counter: 46,
  },
];

const Services = () => {
  return (
    <div className="services">
      <div className="sSectionleft">
        <h1 className="sTitle">How do I help?</h1>
        <div className="serviceList">
          {services.map((service) => (
            <div className="service" key={service.id}>
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sSection right">
        <ComputerModelContainer />
      </div>
    </div>
  );
};

export default Services;
