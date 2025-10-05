import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, User, Tag } from "lucide-react";

const blogs = [
  {
    id: 1,
    date: { day: "10", month: "JUNE" },
    title: "Many of those Products Offer the Potential",
    author: "Admin",
    category: "Music",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    date: { day: "10", month: "JUNE" },
    title: "Many of those Products Offer the Potential",
    author: "Admin",
    category: "Music",
    img: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    date: { day: "10", month: "JUNE" },
    title: "Many of those Products Offer the Potential",
    author: "Admin",
    category: "Music",
    img: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=600&h=400&fit=crop",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Blog & Insights</h2>
            <p className="text-muted-foreground">
              Stay updated with my latest thoughts and experiences
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white rounded-lg p-2 text-center shadow-lg">
                      <div className="text-2xl font-bold text-primary">{blog.date.day}</div>
                      <div className="text-xs uppercase text-muted-foreground">{blog.date.month}</div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4 text-primary" />
                      <span>By {blog.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-4 h-4 text-primary" />
                      <span>{blog.category}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {blog.title}
                  </h3>
                  <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
