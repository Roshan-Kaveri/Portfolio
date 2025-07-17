import {
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
  SiFlask,
  SiTensorflow,
  SiFigma,
  SiCanva,
} from "react-icons/si";
import { FaJava, FaWindows } from "react-icons/fa";

const skills = {
  Languages: [
    { name: "C", Icon: SiC, carousel: true },
    { name: "C++", Icon: SiCplusplus, carousel: true },
    { name: "Java", Icon: FaJava, carousel: true },
    { name: "Python", Icon: SiPython, carousel: true },
    { name: "JavaScript", Icon: SiJavascript, carousel: true },
    { name: "HTML5", Icon: SiHtml5, carousel: true },
    { name: "CSS3", Icon: SiCss3, carousel: true },
  ],
  "Web Development": [
    { name: "ReactJS", Icon: SiReact, carousel: true },
    { name: "Node.js", Icon: SiNodedotjs, carousel: true },
    { name: "Express.js", Icon: SiExpress, carousel: true },
    { name: "Flask", Icon: SiFlask, carousel: true },
    { name: "Bootstrap", Icon: SiBootstrap, carousel: true },
    { name: "Tailwind CSS", Icon: SiTailwindcss, carousel: true },
  ],
  Databases: [
    { name: "MySQL", Icon: SiMysql, carousel: true },
    { name: "PostgreSQL", Icon: SiPostgresql, carousel: true },
    { name: "MongoDB", Icon: SiMongodb, carousel: true },
  ],

  "Other Skills": [
    { name: "Windows", Icon: FaWindows, carousel: true },
    { name: "Linux", Icon: SiLinux, carousel: true },
    { name: "Git", Icon: SiGit, carousel: true },
    { name: "GitHub", Icon: SiGithub, carousel: true },
    { name: "Postman", Icon: SiPostman, carousel: true },
    { name: "Machine Learning", Icon: SiTensorflow, carousel: true },
    { name: "Figma", Icon: SiFigma, carousel: true },
    { name: "Canva", Icon: SiCanva, carousel: true },
  ],
};

export default skills;
