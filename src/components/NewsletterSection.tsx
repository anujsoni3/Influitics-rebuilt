import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play } from "lucide-react";

const NewsletterSection = () => {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(90deg, hsl(0, 100%, 50%), hsl(25, 100%, 60%))",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
              <Play className="w-8 h-8 text-primary fill-primary" />
            </div>
            <span className="text-4xl font-bold text-white">Influtics</span>
          </motion.div>

          <motion.div
            className="flex gap-4 w-full md:w-auto"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-white border-0 h-14 px-6 rounded-full text-lg w-full md:w-96"
            />
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-primary text-white hover:opacity-90 rounded-full px-8 h-14 whitespace-nowrap"
            >
              Get Notified
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
