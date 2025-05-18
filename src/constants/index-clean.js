const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Expertise",
    link: "#expertise",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Leadership",
    link: "#leadership",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Leadership", imgPath: "/images/leadership.svg" },
  { text: "Innovation", imgPath: "/images/innovation.svg" },
  { text: "Strategy", imgPath: "/images/strategy.svg" },
  { text: "Excellence", imgPath: "/images/excellence.svg" },
  { text: "Leadership", imgPath: "/images/leadership.svg" },
  { text: "Innovation", imgPath: "/images/innovation.svg" },
  { text: "Strategy", imgPath: "/images/strategy.svg" },
  { text: "Excellence", imgPath: "/images/excellence.svg" },
];

const counterItems = [
  { value: 20, suffix: "+", label: "Years in Financial Tech" },
  { value: 100, suffix: "+", label: "Team Members Led" },
  { value: 50, suffix: "+", label: "Systems Automated" },
  { value: 98, suffix: "%", label: "Project Success Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/wells-fargo-logo.png",
  },
  {
    imgPath: "/images/logos/aws-logo.png",
  },
  {
    imgPath: "/images/logos/azure-logo.png",
  },
  {
    imgPath: "/images/logos/docker-logo.png",
  },
  {
    imgPath: "/images/logos/kubernetes-logo.png",
  },
  {
    imgPath: "/images/logos/terraform-logo.png",
  },
  {
    imgPath: "/images/logos/jenkins-logo.png",
  },
  {
    imgPath: "/images/logos/gitlab-logo.png",
  },
  {
    imgPath: "/images/logos/ansible-logo.png",
  },
  {
    imgPath: "/images/logos/linux-logo.png",
  },
];

const abilities = [
  {
    imgPath: "/images/leadership.png",
    title: "Technology Leadership",
    desc: "Leading high-performing teams to deliver complex technology solutions in the financial sector.",
  },
  {
    imgPath: "/images/devops.png",
    title: "DevOps Excellence",
    desc: "Implementing CI/CD pipelines and automation to accelerate delivery and improve reliability.",
  },
  {
    imgPath: "/images/strategy.png",
    title: "Strategic Vision",
    desc: "Aligning technology initiatives with business goals to drive innovation and growth.",
  },
];

const techStackImgs = [
  {
    name: "Cloud Platforms",
    imgPath: "/images/logos/cloud-platforms.png",
  },
  {
    name: "Containerization",
    imgPath: "/images/logos/containerization.png",
  },
  {
    name: "CI/CD",
    imgPath: "/images/logos/cicd.png",
  },
  {
    name: "Infrastructure as Code",
    imgPath: "/images/logos/iac.png",
  },
  {
    name: "Monitoring",
    imgPath: "/images/logos/monitoring.png",
  },
  {
    name: "Security",
    imgPath: "/images/logos/security.png",
  },
];

const expCards = [
  {
    imgPath: "/images/wells-fargo.jpg",
    logoPath: "/images/wells-fargo-logo.png",
    title: "Senior Technology Leader",
    company: "Wells Fargo",
    location: "Phoenix, AZ",
    duration: "2003 - Present",
    description: [
      "Led cross-functional teams in the design and implementation of automated server provisioning processes, reducing deployment times by 70%.",
      "Spearheaded DevOps transformation initiatives, implementing CI/CD pipelines that improved release frequency by 40%.",
      "Mentored and developed junior engineers, fostering a culture of continuous learning and innovation.",
      "Collaborated with business stakeholders to align technology solutions with strategic objectives.",
      "Managed mission-critical applications with 99.99% uptime in a highly regulated financial environment.",
    ],
    technologies: ["DevOps", "Cloud Architecture", "Automation", "Team Leadership", "Financial Systems"],
  },
  {
    imgPath: "/images/tamm-financial.jpg",
    logoPath: "/images/tamm-logo.png",
    title: "President",
    company: "Tamm Financial Corporation",
    location: "Mesa, AZ",
    duration: "2010 - 2015",
    description: [
      "Oversaw all aspects of financial technology operations and strategic planning.",
      "Implemented technology solutions that improved operational efficiency by 35%.",
      "Led digital transformation initiatives to modernize legacy systems.",
      "Established technology governance frameworks and best practices.",
      "Managed vendor relationships and technology partnerships.",
    ],
    technologies: ["Technology Strategy", "Digital Transformation", "Financial Technology", "Operations", "Vendor Management"],
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  navLinks,
  techStackImgs,
  expCards,
};
