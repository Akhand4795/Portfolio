import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Lucknow Institute of Technology, Lucknow"
            subtitle="B.Tech in Computer Science and Engineering"
            date="2020 — 2024"
            description="Percentages - 80%"
          />
          <TimelineItem
            title="Academic Heights Public School, Gorakhpur"
            subtitle="Intermediate in Mathematics"
            date="2017-2019"
            description="Percentages - 69.2%"
          />
          <TimelineItem
            title="JP Education Academic, Gorakhpur"
            subtitle="High School in Science"
            date="2015 — 2017"
            description="9.4 CGPA"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Full Stack Web Developer"
            subtitle="IfStatic"
            date="Oct 2023 - Apr 2024"
            description="IfStatic"
          />
          <TimelineItem
            title="Web Developer Intern"
            subtitle="Acmegrade PVT LTD"
            date="Aug 2023 — Sep 2023"
            description="Acmegrade PVT LTD"
          />
        </ol>
      </div>

      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML" value={90} />
          <SkillItem title="CSS" value={90} />
          <SkillItem title="Tailwind CSS" value={90} />
          <SkillItem title="BootStrap" value={90} />
          <SkillItem title="JavaScript" value={80} />
          <SkillItem title="ReactJs" value={80} />
          <SkillItem title="Node.js" value={80} />
          <SkillItem title="Express.js" value={80} />
          <SkillItem title="jQuery" value={80} />
          <SkillItem title="MongoDB" value={80} />
          <SkillItem title="Python" value={70} />
          <SkillItem title="React-Redux" value={60} />
          <SkillItem title="C" value={60} />
          <SkillItem title="Java" value={40} />
        </ul>
      </div>

      <div className="skill" style={{ marginTop: "20px" }}>
        <a href='https://leetcode.com/u/singhakhandpratap70/' className="h3 skills-title">LeetCode DSA</a>
        <h4 className="h3 skills-title" style={{ fontSize: "16px" }}>
          Solved 250+ Questions
        </h4>
        <ul className="skills-list content-card">
          <SkillItem title="Easy" value={10} />
          <SkillItem title="Medium" value={8} />
          <SkillItem title="Hard" value={3} />
        </ul>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <a href="images/Akhand_Resume_1.pdf" download="Akhand_Resume.pdf">
          <button className="form-btn" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Download Resume</span>
          </button>
        </a>
      </div>
    </section>
  );
};

export default Resume;
