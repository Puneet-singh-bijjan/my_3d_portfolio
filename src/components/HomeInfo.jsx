import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  const getContent = {
    1: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I'm
        <span className="font-semibold mx-2 text-white">Puneet Singh Bijjan</span>
        👋
        <br />A Software Developer from Pune, India
      </h1>
    ),
    2: (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Worked on different technologies <br /> and picked up many skills along the way
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    ),
    3: (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Led multiple projects to success over the years. <br /> Curious about the impact?
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Visit my portfolio
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    ),
    4: (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Looking for a dev? <br /> I'm just a few keystrokes away
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    ),
  };

  return getContent[currentStage] ?? null;
};

export default HomeInfo;
