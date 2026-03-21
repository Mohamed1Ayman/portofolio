import './services.css'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services">
      <div className="top_section">
        <h5 className="text-light">What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container_services">
        <article className="card">
          <MdDesignServices className="icon" />
          <h3>Web Design</h3>
          <p className="text-light">
            Passionate web designer focused on creating modern, responsive, and
            user-friendly interfaces. Skilled in turning ideas into clean,
            functional designs using HTML, CSS, and JavaScript.
          </p>
        </article>

        <article className="card">
          <IoIosRocket className="icon" />
          <h3>Fast Performance </h3>
          <p className="text-light">
            Focused on building fast, high-performance web applications with
            smooth user experiences. Skilled in optimizing speed and efficiency
            using modern web technologies like HTML, CSS, and JavaScript.
          </p>
        </article>

        <article className="card">
          <FaCode className="icon" />
          <h3>Clean Code</h3>
          <p className="text-light">
            Dedicated to writing clean, maintainable, and well-structured code
            for scalable web applications. Focused on delivering
            high-performance and user-friendly designs using modern web
            technologies.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Services;
