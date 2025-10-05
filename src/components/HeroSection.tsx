import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(340, 100%, 75%), hsl(25, 100%, 70%))",
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-5 py-2.5 mb-6 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bryan"
                alt="Bryan"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-white text-sm">Bryan has</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span className="text-white text-sm">liked</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              I'm{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Linda</span>
                <motion.span
                  className="absolute bottom-2 left-0 w-full h-4 bg-white/30 -z-10 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>{" "}
              Susan
              <br />
              Beauty & Lifestyle
              <br />
              Influencer
            </h1>

            <div className="flex gap-4 mb-8">
              <Button
                size="lg"
                variant="gradient"
                className="rounded-full px-8 hover:scale-105 transition-transform"
              >
                About Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary rounded-full px-8 backdrop-blur-sm bg-white/10"
              >
                Contact Me
              </Button>
            </div>

            <motion.div
              className="absolute bottom-20 left-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-30">
                <path
                  d="M10,50 Q25,20 50,50 T90,50"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative animate-float">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop"
                alt="Linda Susan"
                className="rounded-3xl w-full max-w-md mx-auto shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-3xl"></div>
              <motion.div
                className="absolute top-10 -right-4 bg-white rounded-3xl px-8 py-6 shadow-2xl shadow-glow"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold gradient-text">74K</div>
                <div className="text-sm font-medium text-muted-foreground">Followers</div>
              </motion.div>
              <motion.div
                className="absolute bottom-20 -left-4 inline-flex items-center gap-2 bg-white/95 backdrop-blur-md rounded-full px-5 py-3 shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Bryan2"
                  alt="Bryan"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm">Bryan has</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span className="text-sm">liked</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
