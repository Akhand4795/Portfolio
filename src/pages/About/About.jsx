/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "Experienced in building responsive, user-friendly websites and web applications using the latest web technologies."
  },
  {
    icon: "/images/icon-design.svg",
    title: "Frontend development",
    description: "Skilled in HTML, CSS, and JavaScript, with expertise in modern frameworks like React to create engaging user interfaces."
  },
  {
    icon: "/images/icon-design.svg",
    title: "Backend development",
    description: "Skilled in HTML, CSS, and JavaScript, with expertise in modern frameworks like React and Angular to create engaging user interfaces."
  },
  {
    icon: "/images/icon-photo.svg",
    title: "Figma",
    description: "Expert in using Figma to design intuitive user interfaces, create wireframes, and develop interactive prototypes."
  }
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
      <p>
        I'm a Web Developer from UP, India, working in Full Stack Web Development.
        I enjoy
        turning complex problems into simple, beautiful and intuitive designs.
      </p>

      <p>
        My job is to build your website so that it is functional and user-friendly but at the same time attractive.
        Moreover, I
        add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
        across your
        message and identity in the most creative way.
      </p>
    </section>


    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    {/* <section className="testimonials">

      <h3 className="h3 testimonials-title">Testimonials</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section> */}


    {/* <!--
      - clients
    --> */}

    <section className="clients">

      <h3 className="h3 clients-title">Technology</h3>

      <ul className="clients-list has-scrollbar">

        <li className="clients-item">
          <a href="#">
            <img src="images/C_Logo.png" alt="C logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/Python_Logo.png" alt="Python logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/Java_Logo.png" alt="Java logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/HTML5_Logo.png" alt="HTML logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/css_logo.png" alt="CSS logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/Tailwindcss_Logo.png"alt="Tailwindcss logo"/>
          </a>
        </li>

        <li className="clients-item">
          <a href="#">
            <img src="images/javascript_logo.png"alt="JavaScript logo"/>
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src="images/MongoDB_Logo.png"alt="MongoDB logo"/>
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src="images/ExpressJs_Logo.png"alt="Express.js logo"/>
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src="images/react_logo.png"alt="ReactJs logo"/>
          </a>
        </li>
        <li className="clients-item">
          <a href="#">
            <img src="images/NodeJs_Logo.png"alt="Node.js logo"/>
          </a>
        </li>

      </ul>

    </section>

  </article>
  )
}

export default About