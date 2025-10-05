import { motion } from "framer-motion";
import { Play, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const videos = [
  { id: 1, img: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=400&h=600&fit=crop" },
  { id: 2, img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop" },
  { id: 3, img: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&h=600&fit=crop" },
  { id: 4, img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=600&fit=crop" },
  { id: 5, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop" },
];

const VideoReels = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Latest Video Reels</h2>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              className="relative group cursor-pointer rounded-3xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="aspect-[3/4] relative">
                <img
                  src={video.img}
                  alt={`Video ${video.id}`}
                  className="w-full h-full object-cover"
                  style={{
                    background: `linear-gradient(180deg, hsl(340, 100%, 75%), hsl(25, 100%, 70%))`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <Button size="icon" variant="ghost" className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <Heart className="w-5 h-5 text-white" />
                  </Button>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors">
                    <Play className="w-8 h-8 text-primary fill-primary ml-1" />
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

export default VideoReels;
