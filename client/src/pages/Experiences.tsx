import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";

interface WorkExperience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

interface ResearchExperience {
  title: string;
  institution: string;
  supervisor: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  publications: string[];
  skills: string[];
}

const researchExperiences: ResearchExperience[] = [
  {
    title: "Research Assistant",
    institution: "National Yang Ming Chiao Tung University",
    supervisor: "Yuan-Fu Yang",
    location: "Hsinchu, Taiwan",
    startDate: "June 2024",
    endDate: "Present",
    description:
      "Project name: Infinite Photorealistic Worlds with Arbitrary Indoor Layout Using Diffusion Model. This project would enable AI to generate diverse indoor environments and build large-scale datasets for computer vision and graphics applications.",
    publications: ["Research work in progress"],
    skills: ["Python", "Computer Vision", "Data Analysis"],
  },
  {
    title: "Intern",
    institution: "Academia Sinica",
    supervisor: "Ti-Rong Wu",
    location: "Taipei, Taiwan",
    startDate: "June 2025",
    endDate: "August 2025",
    description:
      "Project name: Minizero. MiniZero is a reinforcement learning framework designed for zero-knowledge training of game-playing AI agents. It integrates four state-of-the-art algorithms—AlphaZero, MuZero, Gumbel AlphaZero, and Gumbel MuZero—and supports a range of environments, including 9x9 Go, 8x8 Othello, and 57 Atari games. The framework provides a standardized benchmark for evaluating and comparing zero-knowledge learning algorithms.",
    publications: ["Research work in progress"],
    skills: [
      "Python",
      "Research Methodology",
      "Data Analysis",
      "Technical Writing",
    ],
  },
];

const workExperiences: WorkExperience[] = [
  {
    title: "Acoustic Engineering Intern",
    company: "Intelligo",
    location: "Taipei, Taiwan",
    startDate: "June 2024",
    endDate: "August 2024",
    description:
      "Testing and comparing different speech-to-text (STT) models using programming-based evaluations to measure accuracy and efficiency, Evaluating Microsoft Teams’ music detection capabilities to assess performance under varying conditions, and Collecting and analyzing speaker audio samples for testing purposes.",
    technologies: ["Python", "AWS"],
    achievements: [
      "Sourced and curated training data to support development of Intelligo’s noise cancellation AI",
      "Conducted real-world evaluations to compare competitor performance in speech-to-text and audio clarity",
      "Identified key areas for model improvement to enhance product competitiveness and user experience",
    ],
  },
];

export default function Experiences() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              Experiences
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey through research and industry roles.
            </p>
          </div>
        </ScrollReveal>

        {/* Research Experiences Section */}
        <ScrollReveal delay={0.2}>
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold">Research Experience</h2>
            </div>

            <div className="space-y-8">
              {researchExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  <Card className="glass-effect border-0 border-l-4 border-l-green-500">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Info */}
                        <div className="lg:col-span-2">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-green-500 mb-1">
                                {exp.title}
                              </h3>
                              <h4 className="text-xl font-semibold mb-1">
                                {exp.institution}
                              </h4>
                              <p className="text-muted-foreground mb-2">
                                Supervisor: {exp.supervisor}
                              </p>
                            </div>
                            <div className="text-muted-foreground text-sm">
                              <div className="flex items-center mb-1">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>
                                  {exp.startDate} - {exp.endDate}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {exp.description}
                          </p>
                          <div className="mb-6">
                            <h5 className="text-lg font-semibold mb-3">
                              Publications
                            </h5>
                            <ul className="space-y-2">
                              {exp.publications.map((pub, pubIndex) => (
                                <motion.li
                                  key={pubIndex}
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.8 + index * 0.2 + pubIndex * 0.1,
                                  }}
                                >
                                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-muted-foreground">
                                    {pub}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Skills */}
                        <div>
                          <h5 className="text-lg font-semibold mb-3 flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            Skills & Tools
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                  delay: 1 + index * 0.2 + skillIndex * 0.05,
                                }}
                              >
                                <Badge
                                  variant="outline"
                                  className="text-green-600 border-green-500/20"
                                >
                                  {skill}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>
        {/* Work Experiences Section */}
        <ScrollReveal delay={0.2}>
          <section className="mb-20">
            <div className="flex items-center mb-8">
              <Briefcase className="h-6 w-6 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>

            <div className="space-y-8">
              {workExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.2,
                  }}
                >
                  <Card className="glass-effect border-0 border-l-4 border-l-blue-500">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Info */}
                        <div className="lg:col-span-2">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-blue-500 mb-1">
                                {exp.title}
                              </h3>
                              <h4 className="text-xl font-semibold mb-2">
                                {exp.company}
                              </h4>
                            </div>
                            <div className="text-muted-foreground text-sm">
                              <div className="flex items-center mb-1">
                                <Calendar className="h-4 w-4 mr-2" />
                                <span>
                                  {exp.startDate} - {exp.endDate}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="mb-6">
                            <h5 className="text-lg font-semibold mb-3">
                              Key Achievements
                            </h5>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <motion.li
                                  key={achIndex}
                                  className="flex items-start"
                                  initial={{
                                    opacity: 0,
                                    x: -20,
                                  }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  transition={{
                                    delay: 0.6 + index * 0.2 + achIndex * 0.1,
                                  }}
                                >
                                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-muted-foreground">
                                    {achievement}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h5 className="text-lg font-semibold mb-3 flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            Technologies
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{
                                  opacity: 0,
                                  scale: 0.8,
                                }}
                                animate={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                transition={{
                                  delay: 0.8 + index * 0.2 + techIndex * 0.05,
                                }}
                              >
                                <Badge
                                  variant="outline"
                                  className="text-blue-600 border-blue-500/20"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
