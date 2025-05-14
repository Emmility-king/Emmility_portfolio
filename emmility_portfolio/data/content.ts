// Project type definition
export interface Project {
  title: string;
  description: string;
  link: string;
}

// Experience type definition
export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

// Projects data
export const projects: Project[] = [
  {
    title: "Enterprise Resource Planning System",
    description: "Developed a comprehensive ERP system for Ambrose Alli University that streamlined administrative processes and improved data management across departments.",
    link: "#erp-project"
  },
  {
    title: "Data Analytics Dashboard",
    description: "Created an interactive dashboard for visualizing and analyzing large datasets, enabling stakeholders to make data-driven decisions with real-time insights.",
    link: "#analytics-dashboard"
  },
  {
    title: "Mobile Learning Platform",
    description: "Built a cross-platform mobile application that provides accessible educational content to students, featuring offline capabilities and interactive learning modules.",
    link: "#mobile-learning"
  },
  {
    title: "Digital Literacy Training Portal",
    description: "Designed and implemented a web-based training portal used to upskill over 800 public servants in essential digital literacy skills.",
    link: "#training-portal"
  }
];

// Experiences data
export const experiences: Experience[] = [
  {
    role: "Lead Developer",
    company: "Ambrose Alli University",
    duration: "2020 - Present",
    responsibilities: [
      "Spearheaded the development and implementation of the university's enterprise resource planning system",
      "Managed a team of 5 developers to deliver high-quality software solutions on schedule",
      "Conducted code reviews and implemented best practices to ensure code quality and maintainability",
      "Collaborated with stakeholders to gather requirements and translate them into technical specifications"
    ]
  },
  {
    role: "Data Analyst",
    company: "Tech Solutions Inc.",
    duration: "2018 - 2020",
    responsibilities: [
      "Analyzed large datasets to identify trends and patterns that informed business strategy",
      "Created interactive dashboards and visualizations to communicate insights to non-technical stakeholders",
      "Developed automated reporting systems that reduced manual work by 75%",
      "Collaborated with cross-functional teams to implement data-driven solutions"
    ]
  },
  {
    role: "Digital Literacy Trainer",
    company: "Government Digital Skills Initiative",
    duration: "2017 - 2018",
    responsibilities: [
      "Designed and delivered comprehensive digital literacy training programs for public servants",
      "Trained over 800 individuals in essential computer skills, office productivity tools, and digital communication",
      "Developed training materials and assessment tools to measure learning outcomes",
      "Provided one-on-one coaching to participants with varying levels of technical proficiency"
    ]
  }
];