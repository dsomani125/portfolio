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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
      "Led the development of BukuWarung’s new product B2B payments.",
      "Added industry standard security principles to our projects.",
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
      "Developed various reusable and configurable UI components in React.js and Next.js",
      "Working on payments main features such as KYC, KYB",
      "Implemented Universal Checkout for BukuWarung and integrated it with multiple payment gateways",
      "Established AWS S3 integration within our front-end repository and configured GitHub actions for seamless synchronization with the associated bucket.",
      "Enhanced webview performance by 20% with implementing best practices and optimizations.",
      "Worked on the internal web app used by our on-ground team to manage KYC, KYB, and other details.",
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
