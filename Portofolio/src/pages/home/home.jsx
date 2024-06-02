import React from "react";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../../components/navbar";

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

      <section className="about py-28" id="about">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div>
                <img src="svg/me.svg" alt="about-img" />
              </div>
            </div>
            <div className="col-lg-7 lg:pl-10">
              <h3>Hello! I'm Ari Wibowo</h3>
              <p>
                I graduated with a Diploma III in Application Software
                Engineering from Telkom University, and I'm really into roles
                like Full-Stack Developer, IT Quality Assurance, and similar
                positions. I have experience in Website Development (FrontEnd
                using ReactJs and Backend using .NetCore), as well as QA
                Testing. People know me for being adaptable, a quick learner,
                good at communicating, and great at collaborating with teams.
                I'm super passionate about technology and software development!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
