import { motion } from "framer-motion";
import { Play, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const premiumVideos = [
  { id: 1, price: "$5.00", img: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=400&h=500&fit=crop" },
  { id: 2, price: "$5.00", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop" },
  { id: 3, price: "$5.00", img: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&h=500&fit=crop" },
  { id: 4, price: "$5.00", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop" },
  { id: 5, price: "$5.00", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop" },
  { id: 6, price: "$5.00", img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop" },
];

const PremiumVideos = () => {
  return (
    <section id="videos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">My Latest Premium Videos</h2>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            🎬 View All Videos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {premiumVideos.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative group cursor-pointer rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-[4/5] relative">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, hsl(340, 100%, 75%), hsl(25, 100%, 70%))`,
                  }}
                />
                <img
                  src={video.img}
                  alt={`Premium Video ${video.id}`}
                  className="w-full h-full object-cover mix-blend-overlay opacity-80"
                />

                <div className="absolute top-4 left-4">
                  <Button size="icon" variant="ghost" className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <Heart className="w-5 h-5 text-white" />
                  </Button>
                </div>

                <div className="absolute top-4 right-4">
                  <div className="bg-white rounded-full px-3 py-1 text-sm font-bold text-primary">
                    {video.price}
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors">
                    <Play className="w-10 h-10 text-primary fill-primary ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumVideos;
