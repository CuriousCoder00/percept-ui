import Announcement from "@/components/landing-page/Announcement";
import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/landing-page/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center max-w-screen min-h-screen overflow-hidden bg-black">
      <Announcement />
      <div className="container flex flex-col justify-center overflow-hidden">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
