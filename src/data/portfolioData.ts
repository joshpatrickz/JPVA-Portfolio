import JPVAPortfolio from "@/assets/portfolio-screenshot.png";
import PortfolioTemplate from "@/assets/portfoliotemplate.png";
import ProjectImg from "@/assets/ProjectImg.jpg";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Full-Stack / Laravel" | "React" | "HTML / CSS / JS";
  imgUrl?: string;
  bannerStyle?: "lwua-is" | "lwua-ams";
  stack: string[];
  link?: string;
  github?: string;
  isInternalEnterprise?: boolean;
  description: string;
  highlights: string[];
}

export const projectsData: ProjectItem[] = [
  {
    id: "lwua-information-systems",
    title: "LWUA Information & Ticketing System",
    subtitle: "Enterprise ICT Helpdesk & Multi-Stage Approval Platform",
    category: "Full-Stack / Laravel",
    bannerStyle: "lwua-is",
    stack: ["PHP", "Laravel", "MySQL", "JavaScript", "HTML / CSS"],
    isInternalEnterprise: true,
    description:
      "An internal administrative and ICT ticketing platform built for the Local Water Utilities Administration (LWUA). Streamlines employee technical & administrative requests with dynamic multi-tier department approval routing and MISD/NFMD helpdesk fulfillment.",
    highlights: [
      "Role-Based Access Control (System Admin, Ticketing Agent, Department Manager, HR Admin, Employee) with additive permissions.",
      "Automated multi-stage approval routing (Department Manager to Strategy Management Department) with self-approval safeguards.",
      "Dynamic JSON schema request fields per ticket category, real-time status queues, and full activity audit trail.",
      "Printable official LWUA Request & Action Slip generation for compliance and physical sign-off.",
    ],
  },
  {
    id: "lwua-ams-tms",
    title: "LWUA Asset & Training Management (AMS / TMS)",
    subtitle: "Government Resource & Personnel Tracking Systems",
    category: "Full-Stack / Laravel",
    bannerStyle: "lwua-ams",
    stack: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "JavaScript"],
    isInternalEnterprise: true,
    description:
      "Modular internal web applications designed for tracking organizational ICT assets, equipment lifecycle inventory, and employee training records across agency services and departments.",
    highlights: [
      "Relational MySQL schema modeling 3-tier agency hierarchy (Services, Departments, and Divisions).",
      "Structured inventory tracking, accountability assignment, and status lifecycle reporting.",
      "Built for private-network deployment with self-hosted assets and strict authentication controls.",
    ],
  },
  {
    id: "jpva-portfolio",
    title: "JPVA Developer Portfolio",
    subtitle: "Interactive Personal Portfolio & Case Study Showcase",
    category: "React",
    imgUrl: JPVAPortfolio,
    stack: ["React.js", "Tailwind CSS", "JavaScript", "HTML / CSS"],
    link: "https://jpva.netlify.app/",
    github: "https://github.com/joshpatrickz/jpva.github.io/",
    description:
      "My personal developer portfolio website built with React.js, Shadcn UI, Tailwind CSS, and Framer Motion. Designed with a modern developer aesthetic, dark/light theme support, and responsive Bento cards.",
    highlights: [
      "Built with React.js, Shadcn UI primitives, Tailwind CSS, and Framer Motion animations.",
      "Interactive project filtering, case study modal dialogs, and persistent dark/light theme toggle.",
      "Direct CV download and integrated Getform.io contact pipeline.",
    ],
  },
  {
    id: "portfolio-template",
    title: "Developer Portfolio Template",
    subtitle: "Clean & Responsive Static Web Template",
    category: "HTML / CSS / JS",
    imgUrl: PortfolioTemplate,
    stack: ["HTML / CSS", "JavaScript"],
    link: "https://jpva-portfolio-template.netlify.app/",
    description:
      "A lightweight, fast-loading portfolio template crafted from scratch using semantic HTML5, modern CSS3 layouts, and vanilla JavaScript for smooth navigation and responsiveness.",
    highlights: [
      "Zero-framework semantic HTML5 & custom responsive CSS grid/flexbox architecture.",
      "Optimized for fast load performance across mobile, tablet, and desktop viewports.",
      "Clean, customizable sections for showcasing developer projects and contact links.",
    ],
  },
];

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  current?: boolean;
  type: string;
  tags: string[];
  bullets: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    role: "Information System Analyst I",
    organization: "Local Water Utilities Administration (LWUA)",
    period: "2022 — Present",
    current: true,
    type: "Full-Stack Web Development & Systems Analysis",
    tags: ["PHP", "Laravel", "MySQL", "React.js", "Tailwind CSS", "JavaScript"],
    bullets: [
      "Design, develop, and maintain internal enterprise web applications and information systems using PHP, Laravel, and MySQL.",
      "Architect multi-step workflow engines, role-based access control (RBAC), and database schemas for agency-wide operations (Ticketing System, HRIS, AMS/TMS).",
      "Build clean, responsive front-end interfaces using React.js, Tailwind CSS, JavaScript, and HTML/CSS.",
      "Collaborate with divisions and department managers to translate government business processes into reliable digital platforms.",
    ],
  },
  {
    role: "Computer Operator II",
    organization: "MWSS Regulatory Office",
    period: "May 2018 — Aug 2022",
    current: false,
    type: "ICT Infrastructure & Technical Operations",
    tags: ["IT Infrastructure", "Network Admin", "Web Updates", "Tech Support"],
    bullets: [
      "Assisted MIS unit in ICT infrastructure maintenance and system administration.",
      "Performed comprehensive inventory and auditing of ICT hardware and network structures.",
      "Provided technical support for agency events, operations, and end-user workstations.",
      "Executed LAN/WAN network troubleshooting and hardware/software repair.",
      "Managed official website updates and digital content posting.",
    ],
  },
];

export interface CertificateItem {
  title: string;
  org: string;
  date: string;
  category: string;
}

export const certificatesData: CertificateItem[] = [
  {
    title: "Power of 2FA Authentication in Digital Transformation",
    org: "AirCUVE Network Access Authentication",
    date: "August 17, 2021",
    category: "Identity & Access Security",
  },
  {
    title: "Backup and Disaster Recovery on AWS Webinar",
    org: "VBusiness Software and Solution Inc.",
    date: "May 14, 2020",
    category: "Cloud & Disaster Recovery",
  },
  {
    title: "Webinar on Intermediate Cybersecurity",
    org: "Department of Information and Communications Technology (DICT)",
    date: "April 29, 2020",
    category: "Cybersecurity",
  },
  {
    title: "Advanced Malware Awareness",
    org: "Sophos Cybersecurity",
    date: "September 21, 2018",
    category: "Endpoint Security",
  },
];
