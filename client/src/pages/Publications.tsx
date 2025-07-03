import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExternalLink, Download, Share, Star, Bookmark, Play } from "lucide-react";
import { publications } from "@/lib/mockData";

const iconMap = {
  "Research Paper": Download,
  "Blog Post": ExternalLink,
  "Technical Article": ExternalLink,
  "Tutorial": Bookmark,
  "Open Source": Star,
  "Conference Talk": Play,
};

const colorMap = {
  blue: "bg-blue-500/20 text-blue-400",
  cyan: "bg-cyan-500/20 text-cyan-400",
  green: "bg-green-500/20 text-green-400",
  purple: "bg-purple-500/20 text-purple-400",
  yellow: "bg-yellow-500/20 text-yellow-400",
  indigo: "bg-indigo-500/20 text-indigo-400",
};

const hoverColorMap = {
  blue: "hover:bg-blue-500/5",
  cyan: "hover:bg-cyan-500/5",
  green: "hover:bg-green-500/5",
  purple: "hover:bg-purple-500/5",
  yellow: "hover:bg-yellow-500/5",
  indigo: "hover:bg-indigo-500/5",
};

const textColorMap = {
  blue: "group-hover:text-blue-400",
  cyan: "group-hover:text-cyan-400",
  green: "group-hover:text-green-400",
  purple: "group-hover:text-purple-400",
  yellow: "group-hover:text-yellow-400",
  indigo: "group-hover:text-indigo-400",
};

export default function Publications() {
  return (
    <div className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              Writing & Publications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing knowledge through technical articles, research papers, and thought leadership pieces.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {publications.map((publication, index) => {
            const Icon = iconMap[publication.type];
            const colorClass = colorMap[publication.color as keyof typeof colorMap];
            const hoverColorClass = hoverColorMap[publication.color as keyof typeof hoverColorMap];
            const textColorClass = textColorMap[publication.color as keyof typeof textColorMap];

            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className={`glass-effect cursor-pointer transition-all duration-300 group border-0 ${hoverColorClass} h-full`}>
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <Badge className={colorClass}>
                            {publication.type}
                          </Badge>
                          <span className="text-muted-foreground text-sm">
                            {publication.venue}
                          </span>
                        </div>
                        <span className="text-muted-foreground text-sm">
                          {publication.date}
                        </span>
                      </div>
                      
                      <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${textColorClass}`}>
                        {publication.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {publication.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4">
                          <span className="text-sm text-muted-foreground">
                            {publication.views}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {publication.engagement}
                          </span>
                        </div>
                        <div className="flex space-x-3">
                          <Button variant="ghost" size="sm" className={textColorClass}>
                            <Icon className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}
