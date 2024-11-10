export interface PersonalInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  summary: string;
}

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  CGPA: number;
  institution: string;
  duration: string;
  achievements: string[];
}

export interface Skills {
  skills: string[];
}

export interface Language {
  language: string[];
}

export interface Achievements {
  achievements: string[];
}

export interface Resume {
  personalInfo: PersonalInfo;
  experience: ExperienceItem[];
  skills: string[];
  education: Education;
  languages: string[];
}

export const defaultResume: Resume = {
  personalInfo: {
    name: "Jane Doe",
    location: "Karnataka, India",
    phone: "+91 9876543210",
    email: "janedoe@example.com",
    linkedin: "linkedin.com/in/janedoe",
    summary:
      "Experienced Software Engineer with over 5 years of expertise in developing scalable web applications and optimized backend systems. Proven ability to reduce latency by 35% and improve system reliability by 45% through advanced software architectures and performance optimizations.",
  },
  experience: [
    {
      company: "Tech Solutions Pvt Ltd",
      location: "Bengaluru, Karnataka",
      role: "Senior Software Engineer",
      duration: "June 2021 - Present",
      responsibilities: [
        "Led a team of 5 engineers in developing a real-time analytics platform, improving data processing speeds by 50%.",
        "Designed and implemented RESTful APIs and optimized database operations, reducing system latency by 40%.",
        "Mentored junior developers, improving team productivity by 20% through technical guidance and code review sessions.",
      ],
    },
    {
      company: "Web Innovators Ltd",
      location: "Pune, Maharashtra",
      role: "Software Engineer",
      duration: "January 2018 - May 2021",
      responsibilities: [
        "Developed and maintained features for a SaaS platform, enhancing customer engagement by 30%.",
        "Collaborated closely with product and design teams to create responsive, user-friendly interfaces using ReactJS.",
        "Boosted application performance by 25% by optimizing both front-end and back-end codebase.",
      ],
    },
    {
      company: "Digital Creatives LLP",
      location: "Remote",
      role: "Junior Developer",
      duration: "June 2016 - December 2017",
      responsibilities: [
        "Contributed to the development of e-commerce platforms, ensuring smooth payment integrations and checkout processes.",
        "Resolved over 100 critical issues in production, reducing customer complaints by 15%.",
        "Worked with senior developers to implement efficient, scalable coding practices.",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Technology in Computer Science Engineering",
    institution:
      "Jawaharlal Nehru Technological University, Hyderabad, Telangana",
    duration: "July 2012 - May 2016",
    CGPA: 9.2,
    achievements: [
      "Achieved Dean's List honors for academic excellence.",
      "Led a team project to develop an AI chatbot, winning the university's annual innovation competition.",
    ],
  },
  skills: [
    "JavaScript",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "ReactJS",
    "Node.js",
    "Django",
    "MySQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "AWS",
    "Azure",
    "REST API development",
    "Microservices architecture",
    "Agile methodologies",
  ],
  languages: ["English (Fluent)", "Hindi (Fluent)"],
};
