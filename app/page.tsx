import HeaderComponent from "@/components/header/HeaderComponent";
import Homepage from "@/components/homePage/Homepage";
import FooterComponent from "@/components/footer/FooterComponent";
import HeroSection from "@/components/homePage/HeroSection";

export default function Home() {
  return (
    <>
      <main className="p-4 mx-4">
        <HeaderComponent />
        <HeroSection />
        <Homepage />
        <FooterComponent />
      </main>
    </>
  );
}
