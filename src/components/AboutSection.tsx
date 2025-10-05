import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Play } from "lucide-react";

const highlights = [
  "Non mattis nulla, in ultrices diam",
  "Web design done Delightful Visualization",
  "Alienum phaedrum torquatos nec eu, vis detraxit periculis",
  "Software Makes Your Profit Double if You Scale Properly.",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              I'm a Social Media influencer & digital content creator
            </h2>
            <p className="text-gray-300 mb-8">
              consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec
              pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet
              sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-white">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black"
            >
              Contact Me
            </Button>

            <motion.div
              className="absolute left-10 opacity-20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="w-24 h-24 border-2 border-primary rounded-full" />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-full overflow-hidden aspect-square max-w-lg mx-auto">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=800&fit=crop"
                alt="Content creator"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                  <Play className="w-12 h-12 text-primary fill-primary ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
