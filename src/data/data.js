import reactImage from "~/assets/frontend/react.svg";
import reduxImage from "~/assets/frontend/redux.svg";
import jsImage from "~/assets/frontend/js.svg";
import htmlImage from "~/assets/frontend/html.svg";
import cssImage from "~/assets/frontend/css.svg";
import tailwindImage from "~/assets/frontend/tailwind.svg";
import nextjsImage from "~/assets/frontend/nextjs.svg";
import bootstrapImage from "~/assets/frontend/bootstrap.svg";

import expressImage from "~/assets/backend/express.svg";
import nodejsImage from "~/assets/backend/nodejs.svg";
import mongodbImage from "~/assets/backend/mongodb.svg";
import firebaseImage from "~/assets/backend/firebase.svg";
import postmanImage from "~/assets/backend/postman.svg";
import githubImage from "~/assets/backend/github.svg";

export const frontendTechnologies = [
  {
    id: 1,
    title: "React",
    image: reactImage,
    description: "For front end development",
    since: "2023", // Kullanım yılı
  },
  {
    id: 2,
    title: "Redux",
    image: reduxImage,
    description: "For front end development",
    since: "2023",
  },
  {
    id: 3,
    title: "JavaScript",
    image: jsImage,
    description: "For front end development",
    since: "2020",
  },
  {
    id: 4,
    title: "HTML",
    image: htmlImage,
    description: "For front end development",
    since: "2020",
  },
  {
    id: 5,
    title: "CSS",
    image: cssImage,
    description: "For front end development",
    since: "2020",
  },
  {
    id: 6,
    title: "Tailwind CSS",
    image: tailwindImage,
    description: "For front end development",
    since: "2023",
  },
  {
    id: 7,
    title: "Next.js",
    image: nextjsImage,
    description: "For front end development",
    since: "2023",
  },
  {
    id: 8,
    title: "Bootstrap",
    image: bootstrapImage,
    description: "For front end development",
    since: "2020",
  },
];

export const backendTechnologies = [
  {
    id: 1,
    title: "Express.js",
    image: expressImage,
    description: "For back end development",
    since: "2023",
  },
  {
    id: 2,
    title: "Node.js",
    image: nodejsImage,
    description: "For back end development",
    since: "2023",
  },
  {
    id: 3,
    title: "MongoDB",
    image: mongodbImage,
    description: "For back end development",
    since: "2023",
  },
  {
    id: 4,
    title: "Firebase",
    image: firebaseImage,
    description: "For back end development",
    since: "2023",
  },
  {
    id: 5,
    title: "Postman",
    image: postmanImage,
    description: "For back end development",
    since: "2023",
  },
  {
    id: 6,
    title: "Github",
    image: githubImage,
    description: "For back end development",
    since: "2020",
  },
];

export const projectInputs = [
  {
    id: 1,
    label: "Proje Başlığı",
    name: "projectTitle",
    type: "text",
    placeholder: "Proje başlığını girin",
  },
  {
    id: 2,
    label: "Açıklama",
    name: "projectDescription",
    type: "text",
    placeholder: "Proje açıklamasını girin",
  },
  {
    id: 3,
    label: "Proje Bağlantısı",
    name: "projectLink",
    type: "text",
    placeholder: "Proje bağlantısını girin (örn: https://example.com)",
  },
  {
    id: 4,
    label: "GitHub Bağlantısı",
    name: "projectGithubLink",
    type: "text",
    placeholder:
      "GitHub bağlantısını girin (örn: https://github.com/username/repo)",
  },
  {
    id: 5,
    label: "Kullanılan Teknolojiler",
    name: "projectTechnology",
    type: "text",
    placeholder:
      "Teknolojileri virgül ile ayırarak girin (örn: React, Node.js)",
  },
  {
    id: 6,
    label: "Stil Teknolojisi",
    name: "projectStyleTechnology",
    type: "text",
    placeholder: "Kullanılan stil teknolojisini girin (örn: TailwindCSS)",
  },
  {
    id: 7,
    label: "Proje Versiyonu",
    name: "projectVersion",
    type: "text",
    placeholder: "Proje versiyonunu girin (örn: 1.0.0)",
  },
  {
    id: 8,
    label: "Responsive Durumu",
    name: "projectResponsive",
    type: "select",
    placeholder: "Responsive durumu (örn: Evet / Hayır)",
    options: ["Evet", "Hayır"],
  },
];
