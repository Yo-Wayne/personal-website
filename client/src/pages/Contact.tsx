import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Instagram,
  Linkedin,
  Send,
  Clock,
} from "lucide-react";
import { insertContactSchema, InsertContact } from "@shared/schema";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "yowayne.chen@gmail.com",
    href: "mailto:yowayne.chen@gmail.com",
    color: "text-blue-500",
    bgColor: "bg-blue-500/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+886 988502733",
    href: "tel:+886988502733",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Taipei, Taiwan",
    color: "text-green-500",
    bgColor: "bg-green-500/20",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/Yo-Wayne",
    icon: Github,
    color: "hover:bg-gray-700/50",
  },
  {
    name: "LinkedIn",
    href: "www.linkedin.com/in/yowaynechen1",
    icon: Linkedin,
    color: "hover:bg-blue-700/50 text-blue-400",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yowayne0501",
    icon: Instagram,
    color: "hover:bg-pink-600/50 text-pink-400",
  },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: InsertContact) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error(result.error || "Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 gradient-text">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's collaborate on something amazing. Whether you have a project
              in mind or just want to chat about tech, I'd love to hear from
              you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <Card className="glass-effect border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Let's work together!"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project..."
                              rows={6}
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="h-4 w-4 mr-2 border-2 border-current border-t-transparent rounded-full"
                        />
                      ) : (
                        <Send className="h-4 w-4 mr-2" />
                      )}
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <ScrollReveal delay={0.4}>
              <Card className="glass-effect border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={info.label}
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      >
                        <div
                          className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center`}
                        >
                          <info.icon className={`h-5 w-5 ${info.color}`} />
                        </div>
                        <div>
                          <p className="font-medium">{info.label}</p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className={`text-muted-foreground transition-colors duration-200 ${info.color} hover:${info.color}`}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal delay={0.6}>
              <Card className="glass-effect border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Connect with Me</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-3 p-4 bg-muted/50 rounded-lg transition-all duration-300 group ${social.color}`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      >
                        <social.icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                        <span className="font-medium">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Quick Response */}
            <ScrollReveal delay={0.8}>
              <Card className="glass-effect border-0 border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="h-5 w-5 text-blue-500" />
                    <h4 className="font-semibold">Quick Response</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    I typically respond to messages within 24 hours. For urgent
                    matters, feel free to reach out on LinkedIn.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
