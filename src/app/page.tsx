import ModeToggle from "../components/ui/themeButton";
import HeroSection from "@/components/layouts/hero";
import WorkSection from "@/components/layouts/work";

export default function Home() {
  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      <HeroSection />

      <WorkSection />
    </>
  );
}
