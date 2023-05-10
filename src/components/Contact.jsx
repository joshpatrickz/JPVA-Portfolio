import React from "react";

const Contact = () => {
  return (
    <div className="absolute w-full flex justify-center mt-20">
      <form
        method="POST"
        action="https://getform.io/f/6e136da9-89d7-4ab2-8bf3-7dafa3aea345"
        className="max-w-[800px] flex flex-col justify-center text-center"
      >
        <p className="text-4xl mb-3">Contact</p>
        <p className="text-xl mb-3">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <div className="text-left p-10 border rounded-xl shadow-xl hover:shadow-2xl duration-1000 flex flex-col bg-white">
          <p className="text-lg">Name</p>
          <input
            className="text-sm hover:shadow-md duration-1000 bg-gray-100 p-3 border rounded-md mb-3"
            type="text"
            placeholder="Enter Your Name"
            name="name"
          />
          <p className="text-lg">Email</p>
          <input
            className="text-sm hover:shadow-md duration-1000 bg-gray-100 p-3 border rounded-md mb-3"
            type="email"
            placeholder="Enter Your Email"
            name="email"
          />
          <p className="text-lg">Message</p>
          <textarea
            className="text-sm hover:shadow-md duration-1000 bg-gray-100 p-3 border rounded-md"
            name="message"
            placeholder="Enter Your Message"
            cols="30"
            rows="10"
          />
          <button className="text-lg px-6 py-2 mt-5 mx-auto flex rounded-md hover:shadow-lg hover:text-white hover:bg-[#4CD7D0] bg-[#A4E8E0] duration-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
