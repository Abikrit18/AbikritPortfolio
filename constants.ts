import { Experience, Project, Education, SkillCategory, SocialLink } from './types';

export const PROFILE = {
  name: "Abikrit Gautam",
  title: "Software Engineer & Full Stack Developer",
  location: "Monroe, LA",
  phone: "(337) 806-6976",
  email: "abikritgautam123@gmail.com",
  summary: "Honors Computer Science student with a 3.91 GPA and hands-on experience in full-stack development, AI integration, and cloud solutions. Proven track record of delivering cost-saving software solutions and leading technical communities."
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/abikrit-gautam/", icon: "linkedin" },
  { platform: "Email", url: "mailto:abikritgautam123@gmail.com", icon: "mail" },
  { platform: "GitHub", url: "https://github.com/Abikrit18", icon: "github" },
];

export const EDUCATION: Education = {
  school: "University of Louisiana, Monroe (ULM)",
  degree: "BS in Computer Science (Honors)",
  gpa: "3.91/4.00",
  period: "January 2022 – December 2025"
};

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "Python", "C/C++", "SQL", "MongoDB", "Shell Scripting"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Node.js", "Express.js", "React", "MERN Stack", "TensorFlow", "Pandas"]
  },
  {
    category: "Tools & Cloud",
    skills: ["AWS", "Agile", "Docker", "Git", "GitHub", "Power BI", "HTML5", "CSS", "Jira", "Linux"]
  },
  {
    category: "AI & Data Science",
    skills: ["Machine Learning", "Deep Learning", "NLP", "LLM Applications", "Model Deployment"]
  }
];

export const CERTIFICATIONS = [
  "AWS Certified Cloud Practitioner",
  "AWS Certified AI Practitioner"
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Software Developer",
    company: "IBM Technology Louisiana Economic Development Grant",
    location: "Monroe, LA",
    period: "August 2023 – May 2025",
    description: [
      "Designed and deployed MERN stack application, managed $70K budget, and delivered $100K in savings for local businesses.",
      "Directed full SDLC phases, integrated automated testing pipelines, and introduced CI/CD workflows, cutting deployment time by 50%.",
      "Optimized React-based front-end components and implemented advanced state management, increasing user engagement by 25%.",
      "Integrated AWS services to deliver an AI-powered chatbot and leveraged cloud monitoring tools to enhance performance.",
      "Developed RESTful APIs using Node.js and Express.js, reducing response time by 30%."
    ]
  },
  {
    id: "exp-2",
    role: "President",
    company: "ULM Association for Computing Machinery (ACM)",
    location: "Monroe, LA",
    period: "August 2022 – May 2025",
    description: [
      "Organized and launched the first-ever university-wide hackathon, attracting 64+ participants.",
      "Designed and deployed ACM’s website, providing 300+ students access to alumni connections and resources.",
      "Led a core team of 4 members to plan and execute 6+ technical events annually, improving engagement by 40%.",
      "Delivered Git and GitHub workshops to 60+ students per semester."
    ]
  },
  {
    id: "exp-3",
    role: "Undergraduate Teaching Assistant",
    company: "Department of Computer Science, ULM",
    location: "Monroe, LA",
    period: "August 2022 – December 2022",
    description: [
      "Assisted professor in facilitating daily lectures for CSCI 2001 (Introductory Programming) using Java and Python.",
      "Provided guidance on programming challenges, contributing to a 10% increase in the class’s average grade.",
      "Tutored students in Java fundamentals, OOP, and control structures."
    ]
  },
  {
    id: "exp-4",
    role: "Information Technology Helpdesk Assistant",
    company: "ULM Information Technology Department",
    location: "Monroe, LA",
    period: "January 2022 – May 2023",
    description: [
      "Resolved 600+ technical support cases with a 95% customer satisfaction rate.",
      "Reduced repeat incidents by 40% through root-cause analysis.",
      "Achieved an average resolution time of under 15 minutes for software access and system errors."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "HopeBot",
    description: "Developed an AI-powered chatbot delivering real-time answers to student questions. Integrated AWS Lex for NLU, Bedrock for GenAI, and DynamoDB for storage.",
    techStack: ["AWS Lex", "AWS Bedrock", "DynamoDB", "S3", "TypeScript"],
    imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "proj-2",
    title: "ULM Baseball Data Analysis",
    description: "Built a Python-based automation system to collect and visualize player performance data. Reduced report preparation time from 30+ hours to 10 hours.",
    techStack: ["Python", "SQLite", "Power BI"],
    imageUrl: "https://images.unsplash.com/photo-1562552058-ad2846c2781d?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "proj-3",
    title: "Dog Walking Scheduler",
    description: "Led an Agile team to build a React SPA for managing appointments. Supported 100+ weekly bookings and reduced scheduling conflicts by 50%.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "proj-4",
    title: "Adversarial Attacks Defense",
    description: "Designed a hybrid defense system combining deep neural networks, federated learning, and differential privacy against adversarial attacks.",
    techStack: ["Python", "TensorFlow", "Federated Learning", "Differential Privacy"],
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "proj-5",
    title: "Email Encryption Research",
    description: "Researched interoperability vulnerabilities in Outlook email encryption. Proposed a two-step verification solution presented at Student Research Symposium.",
    techStack: ["Outlook", "Encryption Protocols", "Security Analysis"],
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
  }
];