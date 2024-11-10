import { Resume } from "./service";

const data: Resume = {
  personalInfo: {
    name: "Deva Kumar Kilim",
    location: "Andhra Pradesh, India",
    phone: "+919177398252",
    email: "devakumar997@gmail.com",
    linkedin: "linkedin.com/in/devak997",
    summary:
      "Product Development Engineer with 4+ years in building scalable architecture in a startup. Increased throughput by 50%, reduced latency by 40%, and optimized backend for 200K+ requests/second",
  },
  experience: [
    {
      company: "CodeTantra Tech Solutions Pvt Ltd",
      location: "Hyderabad, IN",
      role: "Product Development Engineer / Software Engineer",
      duration: "July 2020 - Present",
      responsibilities: [
        "Led a team of 4 engineers in designing and developing an performant Online Examination Proctoring System with ReactJS, Spring, and MongoDB, cutting cheating by 30% and boosting exam integrity",
        "Co-developed a Learning Management System with ReactJS and Jakarta J2EE, improving user engagement by 25% and cutting server costs by 45% through efficient client-side execution",
        "Engineered a scalable video recording system with Golang and FFmpeg to track and sync user actions and events, enhancing exam integrity by 40%",
        "Mentored 8+ freshers and interns, accelerating onboarding and boosting team productivity by 50% in three months, contributing to improved project delivery",
        "Played a key role in software architecture design and streamlined code quality processes, boosting system scalability by 50%, performance by 40%, reliability by 35%",
        "Spearheaded the architecture design and development of a secure mobile app with Flutter, improving performance and security, which boosted sales by 10% and expanded user reach by 30%",
        "Optimized backend performance by 40% through indexing MongoDB queries and refining API calls, cutting page load times to under 2 seconds",
      ],
    },
    {
      company: "Heramba IT Services",
      location: "Kakinada, IN",
      role: "Fullstack Developer Intern",
      duration: "July 2019 - December 2019",
      responsibilities: [
        "Led a team of 5 to design and develop a custom office automation application for an architecture firm using NodeJS and Postgres, enhancing operational efficiency by 60%",
        "Developed a modular application with inventory, supplier, account, and project management, reducing process time by 50% and increasing client productivity by 40%",
      ],
    },
    {
      company: "Centre for Development of Advanced Computing",
      location: "Pune, IN",
      role: "Research Intern",
      duration: "May 2018 - June 2018",
      responsibilities: [
        "Collaborated with a team of 3 in evaluating performance of numerical linear algebra libraries (OpenMP, Pthreads, MPI, CUDA) on diverse hardware architectures",
        "Evaluated library scalability, implementing enhancements across three hardware platforms, reducing peak resource consumption by 25%",
      ],
    },
  ],
  skills: [
    "Java",
    "Spring",
    "Hibernate",
    "Jakarta EE",
    "Redis",
    "Rabbit MQ",
    "Apache Kafka",
    "NodeJS",
    "Golang",
    "MongoDB",
    "Postgres",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "ReactJS",
    "NextJS",
    "Redux",
    "AWS",
    "Docker",
    "Kubernetes",
    "Microservices",
    "AWS",
  ],
  education: {
    degree: "Bachelor of Technology, Computer Science and Engineering",
    CGPA: 9.36,
    institution: "Jawaharlal Nehru Technological University, Kakinada",
    duration: "July 2017 - May 2021",
    achievements: [
      "Guided a team of 6 to the finals of the 3-day Smart India Hackathon (March 2019), showcasing cutting edge innovation and exceptional teamwork",
      "Built an automated bell system with ReactJS, IoT, MariaDB, and Raspberry Pi alongside 3 team members, showcasing practical technical skills in an academic project",
    ],
  },
  languages: ["English (Fluent)", "Telugu (Native)"],
};

export default data;
