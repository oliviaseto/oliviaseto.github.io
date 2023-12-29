import React from "react";

const Contact = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="flex items-center justify-center">
          <a href="https://www.linkedin.com/oliviaseto" target="_blank" rel="noopener noreferrer" className="mr-4">
            <img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
          <a href="https://github.com/oliviaseto" target="_blank" rel="noopener noreferrer" className="mr-4">
            <img
              src="/icons/github.svg"
              alt="GitHub"
              className="w-8 h-8"
            />
          </a>
          <a href="mailto:oliviaseto5@gmail.com" className="mr-4">
            <img
              src="/icons/gmail.svg"
              alt="Email"
              className="w-8 h-8"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
