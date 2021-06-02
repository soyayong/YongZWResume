import React from "react";
import { DiPython } from "react-icons/di";
import { BsTools } from "react-icons/bs";
import {
  SiLabview,
  SiMicrosoftsqlserver,
  SiJavascript,
  SiSmartthings
} from "react-icons/si";
import MoreIcon from "@material-ui/icons/More";

const skill = [
  {
    name: "LabVIEW",
    style: {
      background: "#666661",
      color: "#f7eb00",
      width: "6rem",
      height: "6rem",
      margin: "10px auto"
    },
    icon: <SiLabview size={70} />,
    detail: [
      {
        title: "Dataflow programming"
      },
      {
        title: "Graphical programming (G-code)"
      },
      {
        title: "NI OPC Systems"
      },
      {
        title: "DLLs. and .NET assemblies"
      }
    ]
  },
  {
    name: "Microsoft Sql Server (MSSQL)",
    style: {
      background: "#0d0d0d",
      color: "#fff",
      width: "6rem",
      height: "6rem",
      margin: "10px auto"
    },
    icon: <SiMicrosoftsqlserver size={70} />,
    detail: [
      {
        title: "Query, Index, and Server Tuning"
      },
      {
        title: "Parameter Sniffing"
      },
      {
        title: "ColumnstoreIndexes and TempDB"
      },
      {
        title: "Database Administration (DBA)"
      }
    ]
  },
  {
    name: "Javascript",
    style: {
      background: "#000",
      color: "#f7eb00",
      width: "6rem",
      height: "6rem",
      margin: "10px auto"
    },
    icon: <SiJavascript size={70} />,
    detail: [
      {
        title: "ES6"
      },
      {
        title: "JQuery"
      },
      {
        title: "React"
      },
      {
        title: "React Native"
      }
    ]
  },
  {
    name: "Others Programming",
    style: {
      background: "#122",
      color: "#fff",
      width: "6rem",
      height: "6rem",
      margin: "10px auto"
    },
    icon: <MoreIcon size={70} />,
    detail: [
      {
        title: "SQL (MySQL & MangoDB)"
      },
      {
        title: "Bootstrap"
      },
      {
        title: "HTML/CSS"
      },
      {
        title: "R & Python"
      }
    ]
  },
  {
    name: "Soft Skills",
    style: {
      background: "#e60ba4",
      color: "#fff",
      width: "6rem",
      height: "6rem",
      margin: "10px auto"
    },
    icon: <SiSmartthings size={70} />,
    detail: [
      {
        title: "Self-motivation"
      },
      {
        title: "Teamwork"
      },
      {
        title: "Responsibility"
      },
      {
        title: "Problem-solving"
      },
      {
        title: "Leadership"
      },
      {
        title: "Time management"
      },
      {
        title: "Ability to work under pressure"
      }
    ]
  },
  {
    name: "Tools",
    style: {
      background: "#740be3",
      color: "#fff",
      width: "6rem",
      height: "6rem",
      margin: "10px auto"
    },
    icon: <BsTools size={70} />,
    detail: [
      {
        title: "PowerBI & Qlik"
      },
      {
        title: "Github"
      },
      {
        title: "Visual Studio Code"
      },
      {
        title: "Miscrosoft Office"
      },
      {
        title: "Git Bash"
      },
      {
        title: "Jupyter"
      }
    ]
  }
];

export default skill;
