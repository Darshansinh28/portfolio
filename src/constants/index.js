import {
  backend,
  cloud,
  frontend,
  UI,
  javascript,
  typescript,
  reactjs,
  mongodb,
  git,
  figma,
  docker,
  concordia,
  lj,
  genetec,
  ipath,
  shriominfotech,
  csharp,
  java,
  angular,
  azure,
  aws,
  dotNET,
  spring,
  warzone,
  Twitter,
  OpenTracksApp,
  cvIcon,
  githubIcon,
  instagramIcon,
  linkdinIcon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socialMedia = [
  {
    id: "linkdin",
    icon: linkdinIcon,
    link: "https://www.linkedin.com/in/darshansinh-devda/",
  },
  {
    id: "github",
    icon: githubIcon,
    link: "https://github.com/Darshansinh28",
  },
  {
    id: "instagram",
    icon: instagramIcon,
    link: "https://www.instagram.com/darshansinh_devda/",
  },
  {
    id: "CV",
    icon: cvIcon,
    link: "https://www.dropbox.com/scl/fi/33u4mj4n5e0sb6xoxnhcx/Darshansinh_Devda_resume.pdf?rlkey=0rahx6dji2kniexnaqfdsizrv&st=xu3gu5su&dl=0",
  },
];
const services = [
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Cloud & DevOps Engineer",
    icon: cloud,
  },
  {
    title: "React & Angular Developer",
    icon: frontend,
  },
  {
    title: "Interactive UI Developer",
    icon: UI,
  },
];

const technologies = [
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "JAVA",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "azure",
    icon: azure,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "dotNET",
    icon: dotNET,
  },
  {
    name: "spring",
    icon: spring,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Genetec",
    icon: genetec,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "Architected and maintained scalable, high-performance microservices using .NET Core/C# and Angular/TypeScript.",
      "Implemented event-driven architecture using Azure Service Bus and Event Hubs for efficient inter-service communication.",
      "Engineered optimized data storage strategies with Elastic Cloud for enhanced system performance and resilience.",
      "Automated CI/CD pipelines using Azure DevOps and Terraform, streamlining deployment workflows.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "iPath Solutions",
    icon: ipath,
    iconBg: "#E6DEDD",
    date: "July 2022 - July 2023",
    points: [
      "Designed and developed scalable web applications using ASP.NET MVC, ASP.NET Core, and Angular.",
      "Enhanced system performance by optimizing database queries and stored procedures in MSSQL and PostgreSQL.",
      "Led code reviews and implemented performance optimizations to ensure faster, more responsive application experiences.",
      "Collaborated with cross-functional teams to ensure the robustness and maintainability of software solutions.",
    ],
  },
  {
    title: "Jr ASP.Net Developer",
    company_name: "Shri OM Infotech",
    icon: shriominfotech,
    iconBg: "#E6DEDD",
    date: "June 2021 - June 2022",
    points: [
      "Designed and engineered advanced web systems leveraging ASP.NET MVC, integrating backend services with front-end technologies including JavaScript, jQuery, and Bootstrap.",
      "Integrated RESTful APIs into applications, enhancing functionality and user experience.",
      "Designed high-performance C# applications with optimized asynchronous and multi-threaded algorithms, reducing processing time by 30%.",
      "Collaborated with the team to ensure effective communication between front-end and back-end systems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Warzone Game",
    description:
      "A strategic Java-based implementation of the classic Risk board game with advanced map editing and custom rules. Emphasized Agile practices and test-driven development to boost maintainability and team efficiency.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "maven",
        color: "green-text-gradient",
      },
      {
        name: "junit",
        color: "pink-text-gradient",
      },
    ],
    image: warzone,
    source_code_link: "https://github.com/Darshansinh28/Warzone",
  },
  {
    name: "Twitter Stream Analyzer",
    description:
      "Real-time data pipeline for analyzing COVID-19 tweets using Apache Flink, Kafka, and Docker. Features dynamic scaling, sentiment analysis, and fault-tolerant stream processing.",
    tags: [
      {
        name: "apache flink",
        color: "blue-text-gradient",
      },
      {
        name: "kafka",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
    ],
    image: Twitter,
    source_code_link:
      "https://github.com/Darshansinh28/Live-Twitter-Stream-Processing-with-Kafka-and-Flink", // Add your repo link
  },
  {
    name: "OpenTracks",
    description:
      "Enhanced an Android fitness tracking app by adding a chairlift wait-time tracker and significantly improving code quality using SonarCloud, static analysis, and Agile collaboration practices.",
    tags: [
      {
        name: "android studio",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "sonarcloud",
        color: "pink-text-gradient",
      },
    ],
    image: OpenTracksApp, // Replace with your imported image or placeholder
    source_code_link:
      "https://github.com/Darshansinh28/OpenTracks-Winter-SOEN-6431_2024", // Replace with actual repo link
  },
];

const education = [
  {
    degree: "Master of Applied Computer Science",
    institution: "Concordia University",
    icon: concordia,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - June 2025 (Expected)",
    points: [
      "GPA: 3.54/4.30",
      "Relevant Courses: Distributed System Design, Programming and Problem Solving, Computer Networks.",
      "Engaged in academic projects involving distributed systems, stream processing with Kafka & Flink, and full-stack development.",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Gujarat Technological University",
    icon: lj,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - June 2021",
    points: [
      "GPA: 8.94/10.0",
      "Relevant Courses: Data Structures, Programming and Problem Solving, Theory of Computation.",
      "Completed multiple projects, including a Risk board game and system hardware simulations.",
    ],
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  education,
  socialMedia,
};
