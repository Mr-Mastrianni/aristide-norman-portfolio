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
  { text: "Leadership", imgPath: "images/leadership.svg" },
  { text: "Innovation", imgPath: "images/innovation.svg" },
  { text: "Strategy", imgPath: "images/strategy.svg" },
  { text: "Excellence", imgPath: "images/excellence.svg" },
  { text: "Leadership", imgPath: "images/leadership.svg" },
  { text: "Innovation", imgPath: "images/innovation.svg" },
  { text: "Strategy", imgPath: "images/strategy.svg" },
  { text: "Excellence", imgPath: "images/excellence.svg" },
];

const counterItems = [
  { value: 20, suffix: "+", label: "Years in Financial Tech" },
  { value: 100, suffix: "+", label: "Team Members Led" },
  { value: 50, suffix: "+", label: "Systems Automated" },
  { value: 98, suffix: "%", label: "Project Success Rate" },
];

const logoIconsList = [
  {
    imgPath: "images/logos/company-logo-1.png", 
  },
  {
    imgPath: "images/logos/company-logo-2.png", 
  },
  {
    imgPath: "images/logos/company-logo-3.png", 
  },
  {
    imgPath: "images/logos/company-logo-4.png", 
  },
  {
    imgPath: "images/logos/company-logo-5.png", 
  },
  {
    imgPath: "images/logos/company-logo-6.png", 
  },
  {
    imgPath: "images/logos/company-logo-7.png", 
  },
  {
    imgPath: "images/logos/company-logo-8.png", 
  },
  {
    imgPath: "images/logos/company-logo-9.png", 
  },
  {
    imgPath: "images/logos/company-logo-10.png",
  },
];

const abilities = [
  {
    imgPath: "images/leadership.png",
    title: "Technology Leadership",
    desc: "Leading high-performing teams to deliver complex technology solutions in the financial sector.",
  },
  {
    imgPath: "images/devops.png",
    title: "DevOps Excellence",
    desc: "Implementing CI/CD pipelines and automation to accelerate delivery and improve reliability.",
  },
  {
    imgPath: "images/strategy.png",
    title: "Strategic Vision",
    desc: "Aligning technology initiatives with business goals to drive innovation and growth.",
  },
];

const techStackImgs = [
  {
    name: "Cloud Platforms",
    imgPath: "images/logos/cloud-platforms.png",
  },
  {
    name: "Containerization",
    imgPath: "images/logos/containerization.png",
  },
  {
    name: "CI/CD",
    imgPath: "images/logos/cicd.png",
  },
  {
    name: "Infrastructure as Code",
    imgPath: "images/logos/iac.png",
  },
  {
    name: "Monitoring",
    imgPath: "images/logos/monitoring.png",
  },
  {
    name: "Security",
    imgPath: "images/logos/security.png",
  },
];

const expCards = [
  {
    imgPath: "images/wells-fargo.jpg",
    logoPath: "images/wells-fargo-logo.png",
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
    imgPath: "images/tamm-financial.jpg",
    logoPath: "images/tamm-logo.png",
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

const testimonials = [
  {
    imgPath: "images/placeholder-profile.png", // Placeholder image
    name: "Satisfied Collaborator",
    mentions: "@Collaborator",
    desc: "Aristide is a visionary leader with a deep understanding of technology and its application to business challenges. His strategic insights were invaluable to our project's success."
  },
  {
    imgPath: "images/placeholder-profile.png", // Placeholder image
    name: "Former Colleague",
    mentions: "@ExCoWorker",
    desc: "Working with Aristide was a fantastic experience. His ability to motivate teams and drive results is exceptional. He fosters a positive and innovative work environment."
  }
  // Add more testimonials as needed
];

const socialImgs = [
  {
    name: "LinkedIn",
    imgPath: "images/socials/linkedin.svg", // You'll need to add this image
    url: "https://www.linkedin.com/in/aristidenorman/", // Placeholder URL
  },
  // {
  //   name: "GitHub",
  //   imgPath: "images/socials/github.svg", // Add if Aristide has a GitHub
  //   url: "#",
  // },
  // {
  //   name: "Twitter",
  //   imgPath: "images/socials/twitter.svg", // Add if Aristide has a Twitter/X
  //   url: "#",
  // },
  // Add more social links as needed
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  navLinks,
  techStackImgs,
  expCards,
  testimonials,
  socialImgs,
};
