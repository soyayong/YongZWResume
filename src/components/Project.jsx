import React from "react";
import { Button } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./styles/project.css";
import projects from "./data/project.js";

function Project() {
  return (
    <section className="section project" id="project">
      <div>
        <h1>Projects</h1>
        <h6>My latest works, projects, and developments showcase</h6>
        <VerticalTimeline>
          {projects.map((project, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ ...project.contentStyle }}
              contentArrowStyle={{ ...project.contentArrowStyle }}
              iconStyle={{ ...project.iconStyle }}
              icon={project.icon}
            >
              <p
                className="project-labeltitle"
                dangerouslySetInnerHTML={{ __html: project.label }}
              />
              <h3
                className="project-labeltitle"
                dangerouslySetInnerHTML={{ __html: project.title }}
              />
              <p
                className="project-subtitle"
                dangerouslySetInnerHTML={{ __html: project.subtitle }}
              />
              <p
                className="project-detail"
                dangerouslySetInnerHTML={{ __html: project.detail }}
              />
              {project.links.map((link, index) => (
                <Button
                  key={index}
                  className="project-button"
                  variant="dark"
                  color="default"
                  target="_blank"
                  href={link.url}
                >
                  {link.text}
                </Button>
              ))}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Project;
