import React from "react";
import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../../components/navbar";
import ProjectCard from "../../components/projectCard";

const projects = [
  {
    title: "D'Language",
    img: "img/language.png",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stacks: ["ReactJS", "Material UI", ".NetCore"],
    website: "http://52.237.194.35:2027/",
    github: "https://github.com/example/project1",
  },
  {
    title: "D'Language",
    img: "img/language.png",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stacks: ["ReactJS", "Material UI", ".NetCore"],
    website: "http://52.237.194.35:2027/",
    github: "https://github.com/example/project1",
  },
  {
    title: "D'Language",
    img: "img/language.png",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    stacks: ["ReactJS", "Material UI", ".NetCore"],
    website: "http://52.237.194.35:2027/",
    github: "https://github.com/example/project1",
  },
];

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 px-20 py-40 font-rubik" id="home">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="col-span-1">
              <div className="text-left lg:text-left">
                <h3 className="uppercase text-gray-700 text-3xl lg:text-4xl font-bold mb-2">
                  Hello,
                </h3>

                <h1 className="uppercase text-gray-900 text-5xl lg:text-6xl font-bold mb-4">
                  I am Ari Wibowo
                </h1>
                <h5 className="uppercase text-gray-500 text-lg lg:text-base mb-8 hover:text-gray-900">
                  <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                      500,
                      "I do Front End",
                      1000,
                      "I do Back End",
                      1000,
                      "I am Full Stack Developer",
                      500,
                    ]}
                    speed={50}
                    style={{ fontSize: "2em" }}
                    repeat={Infinity}
                  />
                </h5>
                <div className="flex items-center">
                  <a
                    className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out"
                    href="#contact"
                  >
                    <span>Contact Me</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex justify-center items-center h-full">
                <div className="lg:w-full">
                  <img
                    className="object-contain"
                    src="svg/coder.svg"
                    alt="Profile"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about px-28 py-28" id="about">
        <RevealOnScroll>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
              <div className="flex justify-center items-center h-full">
                <img src="svg/me.svg" alt="about-img" />
              </div>
              <div className="col-lg-7 lg:pl-10">
                <h3 className="uppercase font-rubik font-bold text-3xl lg:text-4xl">
                  Let me introduce myself
                </h3>
                <p className="font-rubik text-gray-500">
                  <br />
                  Hey there! I'm Ari Wibowo. I finished my studies in
                  Application Software Engineering at Telkom University, and I
                  absolutely love working as a Full-Stack Developer or IT
                  Quality Assurance. I've got hands-on experience in web
                  development (FrontEnd with ReactJs and Backend with .NetCore),
                  and I'm also into QA Testing. People say I'm adaptable, a fast
                  learner, good at communicating, and I enjoy working in teams.
                  Tech and software development are my true passions!
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="services px-28 py-28" id="skills">
        <RevealOnScroll>
          <div className="container mx-auto">
            <h2 className="uppercase flex justify-center font-rubik font-bold text-3xl lg:text-4xl mb-8">
              Expertise and Skills
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="col-span-1 lg:col-span-1 h-[300px]">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 h-full">
                  <h3 className="text-xl font-bold mb-4">
                    Frontend Development
                  </h3>
                  <ul className="list-disc pl-6">
                    <li>ReactJS</li>
                    <li>HTML/CSS/JS</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-1 h-[300px]">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 h-full">
                  <h3 className="text-xl font-bold mb-4">
                    Backend Development
                  </h3>
                  <ul className="list-disc pl-6">
                    <li>Golang</li>
                    <li>.NetCore</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>
              </div>
              <div className="col-span-1 lg:col-span-1 h-[300px]">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 h-full">
                  <h3 className="text-xl font-bold mb-4">
                    Database Management
                  </h3>
                  <ul className="list-disc pl-6">
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>Firebase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      <section className="project px-28 py-28" id="project">
        <div className="container mx-auto">
          <RevealOnScroll>
            <h2 className="uppercase flex justify-center font-rubik font-bold text-3xl lg:text-4xl mb-20">
              My Projects
            </h2>
          </RevealOnScroll>

          <RevealOnScroll>
            <div
              className={`grid grid-cols-1 lg:grid-cols-${Math.min(
                projects.length,
                3
              )} gap-8 justify-center`}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border-dashed border-4 border-gray-200"
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
};
export default Home;
