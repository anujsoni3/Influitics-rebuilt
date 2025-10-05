import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const services = [
  "Brand Collaborations",
  "Empowering Creators",
  "Content Planner",
  "Relevant Content",
  "Social Media Management",
];

const features = [
  "Unlimited influencer search",
  "Unlimited direct messages with freelancer.",
  "Unlimited requests for with celebrities.",
  "Unlimited project tracking",
  "Unlimited Campaign monitoring.",
  "Goal Setting Begin by clearly defining",
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-0">What Will I Give You?</h2>
          <Button className="bg-gradient-to-r from-accent to-primary text-white hover:opacity-90">
            View All Services
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl cursor-pointer transition-all ${
                  index === 0
                    ? "bg-gradient-to-r from-primary to-accent text-white"
                    : "bg-white hover:bg-white/80"
                }`}
              >
                <h3 className="text-xl font-bold">{service}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team meeting"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Strategy Development</h3>
                <p className="text-muted-foreground mb-6">
                  consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec
                  pharetra nunc. Nunc nec pellentesque nisl. Ut non mauris bibendum nunc pharetra laoreet
                  sed eget mauris. Donec eget fermentum libero, ac aliquet lectus.
                </p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
