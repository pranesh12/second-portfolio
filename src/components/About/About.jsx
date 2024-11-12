import Link from "next/link";
import React from "react";
const activeSkills = [
  "dart",
  "flutter",
  "Rest API",
  "Riverpod",
  "SharedPreferences",
  " SOLID principles",
  "MVC",
  "JWT",
  "Git",
  "Github",
];

const familiarTech = [
  "javascript",
  "react",
  "next js",
  "express js",
  "mongoose",
];

const About = () => {
  return (
    <section className="bg-slate-50">
      <div
        id="about"
        className="pb-24 pt-5 max-w-6xl px-4 sm:px-6 mx-auto  text-center md:text-left "
      >
        <div className="text-center border-b-indigo-500 ">
          <h1 className="font-bold text-5xl pb-2 pt-10">About Me</h1>
          <p className="font-normal mt-4 ">
            You will find a little about me and technologies i use daily
          </p>
        </div>

        <div className="flex flex-col md:flex-row  gap-6 mt-16 items-center md:justify-between">
          <div className=" w-full md:w-1/2 ">
            <div>
              <h5 className="font-semibold text-xl pb-3  md:px-x-0 ">
                Want to know me?
              </h5>
            </div>
            <div className="pb-3 text-justify  md:px-0">
              <p>
                I'm a passionate app developer focused on creating interactive,
                scalable, and responsive mobile applications that deliver a
                seamless user experience. With expertise in Flutter and a deep
                understanding of state management, backend integration, and
                design principles, I am committed to building apps that are both
                functional and user-centric. My goal is to blend technical
                excellence with creativity, crafting mobile solutions that not
                only meet user needs but also enhance engagement and
                accessibility. I thrive on the challenge of transforming ideas
                into impactful digital experiences, always striving for quality,
                efficiency, and innovation in every project.
              </p>
            </div>
            <div className="pb-3 text-justify md:px-0">
              <p>
                My skill set includes mobile app development with Flutter and
                Dart, web technologies like HTML, CSS, JavaScript, and backend
                frameworks like Node.js and Express.js. Additionally, I have
                experience with a range of tools, including Git, GitHub, and
                Firebase. I'm committed to writing clean, maintainable code that
                ensures smooth functionality and a seamless user experience.
                Some of my recent projects include an e-commerce app and a
                recipe app, both built with Flutter.
              </p>
            </div>
            <div>
              <Link href="#contact">
                <button className="btn  btn-primary mt-2">Contact Me</button>
              </Link>
            </div>
          </div>
          <div className=" w-full md:w-1/2">
            <div>
              <div>
                <h5 className="font-semibold pb-2  text-xl ">
                  Skills and Technlogoies
                </h5>
              </div>
              <div>I'm actively using and familiar with following</div>
            </div>
            <div>
              <div>
                <h5 className="font-semibold py-2 text-xl">Actively using</h5>
              </div>
              <div className="py-4">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {activeSkills.map((skill) => {
                    return (
                      <div>
                        <button className=" btn  btn-outline  btn-primary capitalize ">
                          {skill}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <div>
                <h5 className="font-semibold">Familiar with</h5>
              </div>
              <div className="py-4">
                <div className="flex flex-wrap gap-2 justify-center md:justify-start ">
                  {familiarTech.map((skill) => {
                    return (
                      <div>
                        <button className=" btn e btn-outline  btn-primary capitalize ">
                          {skill}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
