import React from "react";
import { SiLabview, SiGoogleanalytics, SiJavascript } from "react-icons/si";
import { VscProject } from "react-icons/vsc";
import { DiPython, DiDatabase, DiReact } from "react-icons/di";

const project = [
  {
    contentStyle: {
      borderTop: "5px Solid #373638",
      background: "#06b4ba",
      color: "#fff"
    },
    contentArrowStyle: { borderLeft: "7px solid  #06b4ba" },
    label: "LabVIEW | NI OPC Server | MSSQL",
    title: "PLIS(Production Line Info System) Project",
    subtitle: "PLIS name same like OEE(Overall Equipment Effectiveness)",
    detail:
      "This project easily applies to each production side for capture OEE data. Currently, projects have applied this system in Shimano Components (Malaysia) Sdn. Bhd. with 10 departments and Shimano (Tianjin) Bicycle Components Co., Ltd. in realtime capture data.",
    icon: <SiLabview />,
    iconStyle: { background: "#373638", color: "#f7eb00" },
    links: [
      {
        url:
          "https://u.pcloud.link/publink/show?code=XZPrFMXZOKYQiSBEuJjJ4DdqUcvJezCxVmdy",
        text: "LabVIEW Full-stack Project"
      }
    ]
  },
  {
    contentStyle: {
      borderTop: "5px Solid #6013f0",
      background: "#9f5fde",
      color: "#fff"
    },
    contentArrowStyle: { borderLeft: "7px solid  #9f5fde" },
    label: "6 sigma",
    title: "Productivity Improvement",
    subtitle: "6 sigma training - Shimano Components (Malaysia) Sdn. Bhd. ",
    detail:
      "Apply 6 sigma knowledge to improve OEE for production line and production quality using PLIS system.",
    icon: <VscProject />,
    iconStyle: { background: "#6013f0", color: "#fff" },
    links: [
      {
        url:
          "https://u.pcloud.link/publink/show?code=XZ97pMXZ8Vd0tMVrRmLMEi42O0JYobyUFCsX",
        text: "6 sigma Project"
      }
    ]
  },
  {
    contentStyle: {
      borderTop: "5px Solid #4d2b02",
      background: "#bf843b",
      color: "#fff"
    },
    contentArrowStyle: { borderLeft: "7px solid  #bf843b" },
    label: "Relation Database | Non-Relation Database ",
    title: "Database Project",
    subtitle: "Main focus in Microsoft SQL Server (MSSQL)",
    detail:
      "In database development are three important distinct areas are modify and edit the database, design and develop a new database, and troubleshooting issues in database that have been applying in all projects.",
    icon: <DiDatabase />,
    iconStyle: { background: "#4d2b02", color: "#fff" },
    links: [
      {
        url:
          "https://u.pcloud.link/publink/show?code=XZxJpMXZQd0FAinOSdpKl9SXNcIIWS2SgQyV",
        text: "Database Project"
      },
      {
        url: "",
        text: "Source code"
      }
    ]
  },
  {
    contentStyle: {
      borderTop: "5px Solid #024d35",
      background: "#089669",
      color: "#fff"
    },
    contentArrowStyle: { borderLeft: "7px solid  #089669" },
    label: "Qlik | PowerBI",
    title: "Data Analyst Project",
    subtitle: "Broad field of using data and tools to make business decisions",
    detail:
      "Qlik Sense is the main tool for my analyst project. PowerBI apply in database project.While for fully master those skills, some of the basic calculationand function and ETL & ELT process knowledge.",
    icon: <SiGoogleanalytics />,
    iconStyle: { background: "#024d35", color: "#fff" },
    links: [
      {
        url:
          "https://u.pcloud.link/publink/show?code=XZ5FpMXZDpqakXgdYtpUpluoShDhQpBbJ3V7",
        text: "Qlik Project"
      },
      {
        url:
          "https://u.pcloud.link/publink/show?code=XZxJpMXZQd0FAinOSdpKl9SXNcIIWS2SgQyV",
        text: "PowerBI Project"
      }
    ]
  },
  {
    contentStyle: {
      borderTop: "5px Solid #615c02",
      background: "#c2b808",
      color: "#fff"
    },
    contentArrowStyle: { borderLeft: "7px solid  #c2b808" },
    label: "Javascript | HTML | CSS | Bootstrap",
    title: "Web Project",
    subtitle: "Start in 2021 as web developer",
    detail: "Develop project using visual studio code and upload in GitHub.",
    icon: <SiJavascript />,
    iconStyle: { background: "#615c02", color: "#fff" },
    links: [
      {
        url: "https://soyayong.github.io/TinDogProject/",
        text: "TinDog Project"
      },
      {
        url: "https://soyayong.github.io/SimonGamePlayer/",
        text: "Simon Game Project"
      },
      {
        url: "https://soyayong.github.io/DiceeGame/",
        text: "Dicee Game Project"
      },
      {
        url: "https://soyayong.github.io/DrumKitPlayer/",
        text: "Drum Kit Player Project"
      }
    ]
  },
  {
    contentStyle: {
      borderTop: "5px Solid #015a91",
      background: "#04c8de",
      color: "#fff"
    },
    contentArrowStyle: { borderLeft: "7px solid  #04c8de" },
    label: "ReactJS | ES6",
    title: "Web Project",
    subtitle: "Apply react in project",
    detail: "Design to-do list.",
    icon: <DiReact />,
    iconStyle: { background: "#015a91", color: "#fff" },
    links: [
      {
        url: "https://okp2x.csb.app/",
        text: "Keeper Webpage"
      },
      {
        url: "https://github.com/soyayong/KeeperProject",
        text: "Keeper Soure Code"
      }
    ]
  },
  {
    contentStyle: {
      borderTop: "5px Solid #015a91",
      background: "#04c8de",
      color: "#fff"
    },
    contentArrowStyle: { borderLeft: "7px solid  #04c8de" },
    label: "ReactJS | ES6",
    title: "Resume Template Project",
    subtitle: "Apply react in project",
    detail: "Design resume template using react and react hooks.",
    icon: <DiReact />,
    iconStyle: { background: "#015a91", color: "#fff" },
    links: [
      {
        url: "https://dkrnv.csb.app/",
        text: "Resume Template Webpage"
      },
      {
        url: "https://github.com/soyayong/ResumeTemplateYZW",
        text: "Resume Template Soure Code"
      }
    ]
  },
  {
    contentStyle: {
      borderTop: "5px Solid #015a91",
      background: "#04c8de",
      color: "#fff"
    },
    contentArrowStyle: { borderLeft: "7px solid  #04c8de" },
    label: "ReactJS | ES6",
    title: "Resume Project",
    subtitle: "Apply react in project",
    detail: "Design my resume using resume template create in GitHub.",
    icon: <DiReact />,
    iconStyle: { background: "#015a91", color: "#fff" },
    links: [
      {
        url: "https://github.com/soyayong/YongZWResume",
        text: "Resume Webpage"
      },
      {
        url: "https://github.com/soyayong/YongZWResume",
        text: "Resume Soure Code"
      }
    ]
  },
  {
    contentStyle: {
      borderTop: "5px Solid #030063",
      background: "#2597d9",
      color: "#fff"
    },
    contentArrowStyle: { borderLeft: "7px solid  #2597d9" },
    label: "Python",
    title: "Data Science",
    subtitle: "Python Projects",
    detail: "Export data into python and analysis using colab or Jupyter",
    icon: <DiPython />,
    iconStyle: { background: "#030063", color: "#fff" },
    links: [
      {
        url:
          "https://filedn.com/lzQz4YwK2qQSa8Al3y8Jwsk/Python%20Data/eda.html",
        text: "View Webpage"
      }
    ]
  }
];

export default project;
