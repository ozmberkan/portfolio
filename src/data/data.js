import {
  FaLinkedin,
  FaGithub,
  FaTwitterSquare,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


export const rightTab = [
  { id: 1, label: "HAKKIMDA", to: "/about" },
  { id: 2, label: "PROJELERİM", to: "/projects" },
];


export const socialMedia = [
  {id:1, to:"https://linkedin.com/in/berkanozm", icon:FaLinkedin},
  {id:2, to:"https://github.com/ozmberkan", icon:FaGithub},
  {id:3, to:"https://twitter.com/berkannozm", icon:FaTwitterSquare},
  {id:4, to:"mailto:ozmberkan@gmail.com", icon:IoMdMail},
]