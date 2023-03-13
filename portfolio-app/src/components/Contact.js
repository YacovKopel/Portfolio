import React from "react";
import { FaEnvelopeOpen, FaPhone } from "react-icons/fa";


export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contactForm", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative  text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/3 md:w-1/2 sm:mr-10 p-10 flex flex-col justify-evenly items-center relative">
              <h2 className="title-font font-semibold text-white tracking-widest text-2x1 ">
                EMAIL</h2>
              <a className="leading-relaxed">
              <FaEnvelopeOpen style={{fontSize: '50px'}}/>
              </a>
              <p className="leading-relaxed" >Yacovkopel94@gmail.com</p>

              <h2 className="title-font font-semibold  tracking-widest text-2x1 mt-4">
                PHONE
              </h2>
              <FaPhone style={{fontSize: '50px'}}/>
              <p className="leading-relaxed text-white"> (818)-689-0424</p>
              <br></br>
              <a href="https://www.linkedin.com/in/yacov-kopel/">
                <i style={{fontSize: '50px'}} class="devicon-linkedin-plain"></i>
              </a>
              <br></br>
              <a href="https://github.com/YacovKopel">
              <i style={{fontSize: '50px'}} class="devicon-github-original"></i>
              </a>           
        </div>
        <form
          method="POST"
          name="contactForm"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="lg:w-2/3 text-white md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
        >
          <input type="hidden" name="form-name" value="contactForm" />

          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Looking for a full-time position where I can execute both my
            full-stack skills and my Cloud computing design.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
