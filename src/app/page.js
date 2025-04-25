import Demo from "@/component/Demo";
import Download from "@/component/Download";
import Features from "@/component/Features";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import Hero from "@/component/Hero";
import Parallax from "@/component/Parallax";
import ThreeBg from "@/component/ThreeBg";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen w-full relative">
      <ThreeBg />
      <div className="relative z-10">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Parallax />
          <Features />
          <Demo />
          <Download />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default page;
