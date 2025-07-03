export interface Skill {
  name: string;
  level: number;
  category:
    | "Algorithm Design"
    | "Frontend"
    | "Backend"
    | "Robotics & Systems"
    | "AI/ML";
}

export interface Education {
  school: string;
  degree: string;
  gpa: string;
  location: string;
  startDate: string;
  endDate: string;
  coursework: string[];
  honors: string[];
}

export interface Competition {
  name: string;
  role: string;
  placement: string;
  year: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  features: string[];
  technologies: string[];
  github?: string;
  demo?: string;
}

export interface Publication {
  title: string;
  type:
    | "Research Paper"
    | "Blog Post"
    | "Technical Article"
    | "Tutorial"
    | "Open Source"
    | "Conference Talk";
  venue: string;
  date: string;
  description: string;
  views: string;
  engagement: string;
  color: string;
}

export const skills: Skill[] = [
  { name: "C++", level: 90, category: "Algorithm Design" },
  { name: "Python", level: 90, category: "Algorithm Design" },
  { name: "Java", level: 70, category: "Algorithm Design" },
  { name: "React/Next.js", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 70, category: "Frontend" },
  { name: "Tailwind CSS", level: 60, category: "Frontend" },
  { name: "HTML", level: 90, category: "Frontend" },
  { name: "CSS", level: 90, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "Python", level: 90, category: "Backend" },
  { name: "FastAPI", level: 80, category: "Backend" },
  { name: "Basic SQL", level: 60, category: "Backend" },
  { name: "ROS", level: 70, category: "Robotics & Systems" },
  { name: "Linux", level: 80, category: "Robotics & Systems" },
  { name: "Docker", level: 70, category: "Robotics & Systems" },
  { name: "Git", level: 70, category: "Robotics & Systems" },
  { name: "Python", level: 85, category: "AI/ML" },
  { name: "Reinforcement Learning", level: 80, category: "AI/ML" },
  { name: "Machine Learning Basics", level: 80, category: "AI/ML" },
];

// Leadership experiences
export interface LeadershipExperience {
  title: string;
  organization: string;
  duration: string;
  description: string;
  impact: string[];
  skills: string[];
}

export const leadershipExperiences: LeadershipExperience[] = [
  {
    title: "President",
    organization: "Student Council",
    duration: "June 2025 - Present",
    description:
      "Leading student body initiatives and representing student interests at Asia American International Academy.",
    impact: [
      "Organized school-wide events and activities",
      "Improved student-faculty communication",
      "Led policy discussions affecting student life",
    ],
    skills: ["Leadership", "Public Speaking", "Event Planning", "Advocacy"],
  },
  {
    title: "Team Captain",
    organization: "VEX Robotics Team",
    duration: "August 2022 - Present",
    description:
      "Leading robotics team in competitive programming and engineering challenges.",
    impact: [
      "Won Think award in VEX Robotics World Championship",
      "Mentored team members in programming and design",
      "Developed innovative robot solutions",
    ],
    skills: [
      "Technical Leadership",
      "Engineering",
      "Programming",
      "Team Management",
    ],
  },
];

export const education: Education[] = [
  {
    school: "Asia American International Academy",
    degree: "High School Student",
    gpa: "N/A",
    location: "Taipei, Taiwan",
    startDate: "2022",
    endDate: "Present",
    coursework: [
      "Advanced Computer Science",
      "Mathematics",
      "Physics",
      "English Literature",
      "International Business",
    ],
    honors: [
      "Student Council President",
      "VEX Robotics Champion",
      "Debate Champion",
    ],
  },
];

export const competitions: Competition[] = [
  {
    name: "VEX Robotics Championship",
    role: "Team Captain",
    placement: "Champion",
    year: "2024",
    description:
      "Led robotics team to championship victory through innovative programming and engineering solutions.",
    skills: ["C++", "Robotics", "Team Leadership", "Engineering Design"],
  },
  {
    name: "Debate Championship",
    role: "Debater",
    placement: "Champion",
    year: "2024",
    description:
      "Won championship through strong argumentation, research skills, and public speaking ability.",
    skills: [
      "Public Speaking",
      "Research",
      "Critical Thinking",
      "Argumentation",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive admin dashboard for managing products, orders, and analytics with real-time updates.",
    longDescription:
      "This full-stack e-commerce dashboard provides administrators with powerful tools to manage their online store. Built with React and Node.js, it features real-time analytics, inventory management, order processing, and customer insights. The application handles over 1 million requests daily and serves as the backbone for a major retail operation.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Full-Stack"],
    category: "Web Application",
    features: [
      "Real-time analytics and reporting",
      "Inventory management with low-stock alerts",
      "Order processing and fulfillment tracking",
      "Customer management and insights",
      "Responsive design for mobile and desktop",
      "Advanced filtering and search capabilities",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Chart.js",
      "Tailwind CSS",
    ],
    github: "https://github.com/alexchen/ecommerce-dashboard",
    demo: "https://ecommerce-dashboard-demo.com",
  },
  {
    id: "ai-customer-support",
    title: "AI Customer Support",
    description:
      "Intelligent chatbot using NLP to provide automated customer support with 95% accuracy rate.",
    longDescription:
      "An advanced AI-powered customer support system that uses natural language processing to understand and respond to customer inquiries. The system has been trained on thousands of support conversations and achieves a 95% accuracy rate in resolving common issues without human intervention.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["AI/ML"],
    category: "Machine Learning",
    features: [
      "Natural language understanding",
      "Sentiment analysis for escalation",
      "Multi-language support",
      "Integration with existing CRM systems",
      "Real-time learning from interactions",
      "Analytics dashboard for support metrics",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    github: "https://github.com/alexchen/ai-customer-support",
    demo: "https://ai-support-demo.com",
  },
  {
    id: "fittracker-mobile",
    title: "FitTracker Mobile",
    description:
      "Cross-platform fitness app with workout tracking, social features, and personalized recommendations.",
    longDescription:
      "A comprehensive fitness tracking application built with React Native, offering users the ability to track workouts, set goals, and connect with friends. The app includes AI-powered workout recommendations based on user performance and preferences.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Mobile"],
    category: "Mobile Application",
    features: [
      "Workout tracking and analytics",
      "Social features and challenges",
      "Personalized workout recommendations",
      "Progress tracking and goal setting",
      "Integration with wearable devices",
      "Offline capability for workouts",
    ],
    technologies: [
      "React Native",
      "Firebase",
      "Redux",
      "Node.js",
      "MongoDB",
      "AWS",
    ],
    github: "https://github.com/alexchen/fittracker-mobile",
    demo: "https://fittracker-demo.com",
  },
  {
    id: "cryptotrader-pro",
    title: "CryptoTrader Pro",
    description:
      "Advanced cryptocurrency trading platform with real-time market data and automated trading strategies.",
    longDescription:
      "A sophisticated cryptocurrency trading platform that provides real-time market data, advanced charting tools, and automated trading strategies. Built with modern web technologies and blockchain integration.",
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Blockchain"],
    category: "Fintech",
    features: [
      "Real-time market data and charts",
      "Automated trading strategies",
      "Portfolio management and analytics",
      "Multi-exchange integration",
      "Risk management tools",
      "Mobile-responsive design",
    ],
    technologies: [
      "Web3.js",
      "Solidity",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "WebSocket",
    ],
    github: "https://github.com/alexchen/cryptotrader-pro",
    demo: "https://cryptotrader-demo.com",
  },
  {
    id: "social-analytics",
    title: "Social Analytics",
    description:
      "Comprehensive social media analytics platform with sentiment analysis and engagement tracking.",
    longDescription:
      "A powerful social media analytics platform that helps businesses understand their social media performance across multiple platforms. Features advanced sentiment analysis and predictive insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["Analytics"],
    category: "Data Analytics",
    features: [
      "Multi-platform social media monitoring",
      "Sentiment analysis and insights",
      "Engagement tracking and analytics",
      "Competitor analysis",
      "Automated reporting",
      "Custom dashboard creation",
    ],
    technologies: [
      "Vue.js",
      "D3.js",
      "Redis",
      "Python",
      "ElasticSearch",
      "Docker",
    ],
    github: "https://github.com/alexchen/social-analytics",
    demo: "https://social-analytics-demo.com",
  },
  {
    id: "smart-home-hub",
    title: "Smart Home Hub",
    description:
      "IoT-enabled smart home control system with voice commands and automated scheduling.",
    longDescription:
      "An intelligent home automation system that connects and controls various IoT devices throughout the home. Features voice control, automated scheduling, and energy optimization capabilities.",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    tags: ["IoT"],
    category: "IoT",
    features: [
      "IoT device integration and control",
      "Voice command support",
      "Automated scheduling and scenes",
      "Energy usage monitoring",
      "Mobile app for remote control",
      "Security and privacy focused",
    ],
    technologies: [
      "Arduino",
      "React",
      "MQTT",
      "Node.js",
      "InfluxDB",
      "Raspberry Pi",
    ],
    github: "https://github.com/alexchen/smart-home-hub",
    demo: "https://smarthome-demo.com",
  },
];

export const publications: Publication[] = [
  {
    title:
      "Optimizing Machine Learning Model Performance in Edge Computing Environments",
    type: "Research Paper",
    venue: "IEEE Conference",
    date: "2023",
    description:
      "An in-depth analysis of techniques for deploying ML models on resource-constrained edge devices, achieving 40% reduction in inference latency while maintaining accuracy.",
    views: "5.2k views",
    engagement: "89 citations",
    color: "blue",
  },
  {
    title: "Building Scalable React Applications: Lessons from the Trenches",
    type: "Blog Post",
    venue: "Medium",
    date: "2023",
    description:
      "A comprehensive guide to architecting large-scale React applications based on real-world experience building production systems serving millions of users.",
    views: "12.8k views",
    engagement: "347 claps",
    color: "cyan",
  },
  {
    title: "Microservices Architecture: When to Use It and When to Avoid It",
    type: "Technical Article",
    venue: "Dev.to",
    date: "2023",
    description:
      "An honest look at microservices architecture, discussing real-world trade-offs and decision frameworks for choosing between monolithic and distributed systems.",
    views: "8.9k views",
    engagement: "156 likes",
    color: "green",
  },
  {
    title: "Zero-Downtime Deployments with Docker and Kubernetes",
    type: "Tutorial",
    venue: "Personal Blog",
    date: "2022",
    description:
      "Step-by-step guide to implementing blue-green deployments and rolling updates for containerized applications, with practical examples and troubleshooting tips.",
    views: "6.1k views",
    engagement: "92 bookmarks",
    color: "purple",
  },
  {
    title: "react-performance-toolkit: Performance Monitoring Library",
    type: "Open Source",
    venue: "GitHub",
    date: "2022",
    description:
      "Open-source React library for real-time performance monitoring and optimization suggestions. Features automatic bundle analysis and runtime performance tracking.",
    views: "2.3k stars",
    engagement: "184 forks",
    color: "yellow",
  },
  {
    title: "The Future of Frontend: Server Components and Edge Computing",
    type: "Conference Talk",
    venue: "ReactConf 2022",
    date: "2022",
    description:
      "Keynote presentation exploring the evolution of frontend architecture, discussing React Server Components and edge computing's impact on web development.",
    views: "15.2k views",
    engagement: "40 min talk",
    color: "indigo",
  },
];
