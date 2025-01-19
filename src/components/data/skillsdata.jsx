import { SiJavascript, SiPython, SiC, SiReact, SiNodedotjs, SiPostgresql, SiTensorflow, SiFigma, SiCanva } from 'react-icons/si';
import { Java, PostgreSQL, Python, React as R , NodeJs, JavaScript } from 'developer-icons'; // Import developer-icons

const skills = {
    Languages: [
      { name: 'JavaScript', Icon: JavaScript || SiJavascript, carousel: true }, // Fallback to react-icons if developer-icons doesn't have it
      { name: 'Python', Icon: Python || SiPython, carousel: true },
      { name: 'Java', Icon: Java, carousel: true  },  // If Java is not available in dev-icons, use react-icons fallback
      { name: 'Embedded C', Icon: SiC ,  carousel: true},
    ],
    'Web Development': [
      { name: 'ReactJS', Icon: R || SiReact ,  carousel: true},
      { name: 'Node.js', Icon: NodeJs || SiNodedotjs,  carousel: true },
      { name: 'PostgreSQL', Icon: PostgreSQL || SiPostgresql,  carousel: true },
    ],
    'Other Skills': [
      { name: 'Machine Learning', Icon: SiTensorflow ,  carousel: true},
      { name: 'Figma', Icon: SiFigma,  carousel: true },
      { name: 'Canva', Icon: SiCanva ,  carousel: true},
    ],
  };

  export default skills;