import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Card } from "@/components/ui/card";

const socialPlatforms = [
  { name: "Facebook", followers: "20.5K followers", icon: Facebook, color: "#1877F2" },
  { name: "Instagram", followers: "30.9K followers", icon: Instagram, color: "#E4405F" },
  { name: "Tiktok", followers: "2.5M followers", icon: "🎵", color: "#000000" },
  { name: "YouTube", followers: "1.69M Sbscribers", icon: Youtube, color: "#FF0000" },
];

const SocialStats = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 hover:border-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {typeof platform.icon === "string" ? (
                      <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center text-2xl shadow-lg">
                        {platform.icon}
                      </div>
                    ) : (
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: platform.color }}
                      >
                        <platform.icon className="w-7 h-7 text-white" />
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-lg">{platform.name}</h3>
                      <p className="text-sm text-muted-foreground">{platform.followers}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="gradient"
                    className="rounded-full"
                  >
                    {platform.name === "YouTube" ? "Subscribe" : "Follow Me"}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialStats;
