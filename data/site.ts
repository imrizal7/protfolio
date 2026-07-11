export const siteConfig = {
  name: "Sudarshan Rijal",
  title: "Sudarshan Rijal — Computer Engineering Student",
  description:
    "Computer Engineering student at Kathmandu University building software with curiosity, craftsmanship, and a long-term vision. Creator of AXON HMS.",
  url: "https://sudarshanrijal.dev",
  ogImage: "https://sudarshanrijal.dev/og.png",
  email: "rijalsudarshan7@gmail.com",
  github: "https://github.com/imrizal7",
  linkedin: "https://www.linkedin.com/in/sudarshan-rijal/",
  instagram: "https://www.instagram.com/rizal0.7/",
  axonRepo: "https://github.com/AXON-HOSPITAL-MANAGEMENT-SYSTEM/AXON_HMS",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const typingPhrases = [
  "Building AXON",
  "Learning C++",
  "Exploring Python",
  "Developing with Qt",
  "Open Source Enthusiast",
  "Always Learning",
];

export const education = [
  {
    level: "Bachelor of Engineering",
    field: "Computer Engineering",
    institution: "Kathmandu University",
    location: "Dhulikhel, Nepal",
    status: "Current — 2nd Semester",
    year: "2024 – Present",
    icon: "🎓",
  },
  {
    level: "+2 Science",
    field: "Physics, Chemistry, Mathematics",
    institution: "United Academy",
    location: "Lalitpur, Nepal",
    status: "Completed",
    year: "2022 – 2024",
    icon: "📚",
  },
  {
    level: "Secondary Education (SEE)",
    field: "General Education",
    institution: "SOS Hermann Gmeiner School, Gandaki",
    location: "Pokhara, Nepal",
    status: "Completed",
    year: "– 2022",
    icon: "🏫",
  },
];

// Everything here is still being learned — nothing is "mastered" yet.
// Kept as a single honest bucket instead of implying finished skills.
export const skills = {
  learning: [
    { name: "C++", icon: "⚡", description: "Learning the language fundamentals, syntax, and memory management" },
    { name: "OOP", icon: "🔷", description: "Working on mastering object-oriented design patterns and principles" },
    { name: "AXON", icon: "🏗️", description: "Building a real Hospital Management System — learning by doing" },
    { name: "Python", icon: "🐍", description: "Exploring scripting, automation, and general-purpose programming" },
  ],
  tools: [
    { name: "Git", icon: "🌿", description: "Version control and branching workflows" },
    { name: "GitHub", icon: "🐙", description: "Collaboration, repos, and open source" },
    { name: "Qt Creator", icon: "🎛️", description: "Desktop GUI application development" },
  ],
  future: [
    { name: "Cybersecurity", icon: "🔐", description: "Secure systems and ethical hacking" },
    { name: "Cloud Computing", icon: "☁️", description: "AWS, GCP, distributed systems" },
    { name: "Full-Stack", icon: "🌐", description: "Web apps from frontend to backend" },
  ],
};

export const journeySteps = [
  {
    id: 1,
    title: "Started Computer Engineering",
    description: "Enrolled at Kathmandu University — one of Nepal's premier engineering institutions. The decision that set everything in motion.",
    status: "completed",
    year: "2025",
  },
  {
    id: 2,
    title: "Learning C++",
    description: "Diving deep into C++ — pointers, memory management, and the mechanics of how code truly runs. The foundation everything else builds on.",
    status: "ongoing",
    year: "2026",
  },
  {
    id: 3,
    title: "Mastering Object-Oriented Programming",
    description: "Classes, inheritance, polymorphism, encapsulation. Started thinking in systems rather than scripts.",
    status: "ongoing",
    year: "2026",
  },
  {
    id: 4,
    title: "Building AXON",
    description: "Created a full Hospital Management System with Qt and C++. My first real software project.",
    status: "building",
    year: "2026 – Present",
    highlight: true,
  },
  {
    id: 5,
    title: "Exploring Python",
    description: "Learning Python for its versatility. Scripting, automation, future ML exploration — one language at a time.",
    status: "current",
    year: "2026",
  },
  {
    id: 6,
    title: "The Road Ahead",
    description: "Cybersecurity. Cloud Computing. Full-Stack Development. The blueprint is forming, the foundation is solid.",
    status: "future",
    items: ["Cybersecurity", "Cloud Computing", "Full-Stack Development"],
  },
];

// Unified projects list — rendered side by side in the Projects section.
// Add new project objects here as they're built; the "more coming soon"
// card in Projects.tsx will always sit after the last one.
export const projects = [
  {
    id: "axon",
    icon: "axon",
    flagship: true,
    name: "AXON",
    tagline: "Hospital Management System",
    description:
      "AXON is a comprehensive desktop-based Hospital Management System built with C++ and Qt. Designed to streamline patient registration, appointment scheduling, and basic hospital workflows — all from a clean, native desktop interface.",
    longDescription:
      "Started as a university project, AXON grew into a full-featured application that taught me what software engineering really means: handling edge cases, thinking about users, writing maintainable code, and shipping something that actually works.",
    repo: "https://github.com/AXON-HOSPITAL-MANAGEMENT-SYSTEM/AXON_HMS",
    techStack: [
      { name: "C++", color: "#3B82F6" },
      { name: "Qt Framework", color: "#7C3AED" },
      { name: "Qt Creator", color: "#06B6D4" },
      { name: "OOP Design", color: "#10B981" },
      { name: "Git", color: "#F59E0B" },
      { name: "GitHub", color: "#EC4899" },
    ],
    features: [
      "Patient Registration & Management",
      "Appointment Scheduling System",
      "Doctor & Department Modules",
      "Qt Native Desktop Interface",
      "Modular OOP Architecture",
      "Data Persistence Layer",
    ],
    stats: [
      { label: "Language", value: "C++" },
      { label: "Framework", value: "Qt 6" },
      { label: "Type", value: "Desktop App" },
      { label: "Status", value: "Active Dev" },
    ],
  },
  {
    id: "jetson",
    icon: "jetson",
    flagship: false,
    name: "Jetson Fire/Smoke Detection",
    tagline: "Real-time fire & smoke detection on NVIDIA Jetson Nano",
    description:
      "A computer vision project built during a 2-day hands-on workshop hosted by the Nepal Technology Innovation Center (NTIC) at Kathmandu University. Runs real-time fire and smoke detection on an NVIDIA Jetson Nano from a live camera feed.",
    longDescription:
      "Built in a fast-paced 2-day workshop, this project introduced me to edge AI deployment, camera pipelines, and the constraints of running real-time inference on embedded hardware — a very different challenge from desktop development.",
    repo: "https://github.com/imrizal7/Jetson-Fire-Smoke-Detection.git",
    techStack: [
      { name: "Python", color: "#3B82F6" },
      { name: "NVIDIA Jetson Nano", color: "#7C3AED" },
      { name: "Computer Vision", color: "#06B6D4" },
      { name: "Edge AI", color: "#10B981" },
    ],
    stats: [
      { label: "Hardware", value: "Jetson Nano" },
      { label: "Duration", value: "2-Day Workshop" },
      { label: "Organizer", value: "NTIC, KU" },
      { label: "Domain", value: "Computer Vision" },
    ],
  },
];

export const githubStats = {
  username: "imrizal7",
  profileUrl: "https://github.com/imrizal7",
  stats: [
    { label: "Repositories", value: "12+" },
    { label: "Contributions", value: "200+" },
    { label: "Languages", value: "3" },
    { label: "Stars", value: "Growing" },
  ],
  repos: [
    {
      name: "AXON_HMS",
      description: "Hospital Management System — C++ & Qt desktop application",
      lang: "C++",
      stars: 0,
      url: "https://github.com/AXON-HOSPITAL-MANAGEMENT-SYSTEM/AXON_HMS",
      color: "#3B82F6",
    },
    {
      name: "Jetson-Fire-Smoke-Detection",
      description: "Real-time fire/smoke detection on NVIDIA Jetson Nano — built at an NTIC workshop",
      lang: "Python",
      stars: 0,
      url: "https://github.com/imrizal7/Jetson-Fire-Smoke-Detection.git",
      color: "#7C3AED",
    },
  ],
};
