import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi!  I'm Yacov.
            <br className="hidden lg:inline-block" />
            Creativity, technical expertise, and passion
            for problem-solving to create seamless and scalable
            solutions that drive business success!
          </h1>
          <p className="mb-8 text-white leading-relaxed">
            I'm a full-stack developer and AWS certified Solutions Architect
            with expertise in both front-end, back-end development and cloud
            computing. With my knowledge of multiple programming languages and
            frameworks, I can seamlessly integrate technologies to create robust
            and scalable end-to-end solutions. I thrive on delivering
            high-quality code optimized for performance and user experience that
            meets the unique needs of diverse clients. Let me help you build
            cutting-edge applications that exceed your expectations.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 border-0 py-2 px-6  rounded text-lg"
            >
              Lets Collab!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 border-0 py-2 px-6  rounded text-lg"
            >
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./programming.svg"
          />
        </div>
      </div>
    </section>
  );
}
