import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialStats from "@/components/SocialStats";
import VideoReels from "@/components/VideoReels";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PremiumVideos from "@/components/PremiumVideos";
import BlogSection from "@/components/BlogSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialStats />
      <VideoReels />
      <AboutSection />
      <ServicesSection />
      <PremiumVideos />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
