import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./styles/experience.css";
import WorkIcon from "@material-ui/icons/Work";
import StarIcon from "@material-ui/icons/Star";
import experiences from "./data/experience.js";
import DoneTwoToneIcon from "@material-ui/icons/DoneTwoTone";

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div>
        <h1>Experience</h1>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: "#71c9ce", color: "#fff" }}
              contentArrowStyle={{
                borderLeft: "7px solid  #2d4059"
              }}
              date={experience.date}
              dateClassName="experience-date"
              iconStyle={{ background: "#2d4059", color: "#e3fdfd" }}
              icon={<WorkIcon />}
            >
              <h3 dangerouslySetInnerHTML={{ __html: experience.event }} />
              <h5 dangerouslySetInnerHTML={{ __html: experience.area }} />
              <ul>
                {experience.details.map((detail, index) => (
                  <li key={index}>
                    <DoneTwoToneIcon />
                    {detail.title}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            iconStyle={{ background: "#71c9ce", color: "#2d4059" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
