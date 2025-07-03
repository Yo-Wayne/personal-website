import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-muted-foreground mb-4 font-medium">
            Building the future, one solution at a time.
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Yo-Wayne Chen. All rights reserved. Made with ❤️ and lots of ☕.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}