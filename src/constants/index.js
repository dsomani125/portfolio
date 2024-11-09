import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  audiomaster,
  aws,
  bukuwarung,
  leftout,
  springboot,
  postgresql,
  java,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Postgres SQL",
    icon: postgresql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Software Engineer II",
    company_name: "BukuWarung",
    icon: bukuwarung,
    linkedin_url: "https://www.linkedin.com/company/bukuwarung/mycompany/",
    iconBg: "#014ca3",
    date: "Sep 2023 - Present",
    points: [
      "Leading the payments web vertical at BukuWarung.",
      "Led the web development of BukuWarung’s new product B2B payments",
      "Contributed in backend development for devices utilizing the ISO-8583 international standard to enable secure money transfers and balance inquiries for debit and credit cards (EDC machines).",
      "Led and currently maintaining the entire order flow for purchasing EDC devices.",
      "Responsible for developing and managing major payment flows, including wallet top-ups and peer-to-peer money transfers.",
      "Served as primary on-call, resolving various issues and implementing monitoring for CPU and memory usage, as well as enhancing logging for critical incidents.",
    ],
  },
  {
    title: "Software Engineer I",
    company_name: "BukuWarung",
    icon: bukuwarung,
    linkedin_url: "https://www.linkedin.com/company/bukuwarung/mycompany/",
    iconBg: "#014ca3",
    date: "Oct 2022 - Sep 2023",
    points: [
      "Worked on payments main features including Universal Checkout, KYC and KYB.",
      "Established AWS S3 integration within our front-end repository and configured GitHub actions for seamless synchronization with the associated bucket.",
      "Developed various reusable and configurable UI components in React.js and Next.js",
      "Enhanced webview performance by 20% with implementing best practices and optimizations.",
    ],
  },
  {
    title: "Software Engineer (Intern)",
    company_name: "BukuWarung",
    icon: bukuwarung,
    linkedin_url: "https://www.linkedin.com/company/bukuwarung/mycompany/",
    iconBg: "#014ca3",
    date: "Jan 2022 - Sep 2022",
    points: [
      "Wrote a script in javascript to display the previous and changed value for remote config on Firebase.",
      "Migrated the rewards and loyalty flow from Vue.js to React.js and added more features.",
      "Developed the help section for BukuWarung app.",
    ],
  },
];

const projects = [
  {
    name: "Audio Master",
    description:
      "A fully-fledged e-commerce platform to buy headphones, speakers and more.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Sanity",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "Vercel",
        color: "pink-text-gradient",
      },
    ],
    image: audiomaster,
    source_code_link: "https://github.com/dsomani125/audio-master",
    deployed_link: "https://audio-master-pi.vercel.app/",
  },
  {
    name: "LeftOut",
    description:
      "A full-stack web app to let travellers connect and plan their next trip with fellow travellers",
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "React.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Styled Components",
        color: "blue-text-gradient",
      },
      {
        name: "ImageKit",
        color: "green-text-gradient",
      },
      {
        name: "Netlify",
        color: "pink-text-gradient",
      },
    ],
    image: leftout,
    source_code_link: "https://github.com/leftout-social",
  },
];

export { technologies, experiences, projects };
