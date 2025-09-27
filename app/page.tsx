import HeaderComponent from "@/components/header/HeaderComponent";
import Homepage from "@/components/homePage/Homepage";
import FooterComponent from "@/components/footer/FooterComponent";

export default function Home() {
  return (
    <>
      <main className="p-4">
        <HeaderComponent />
        <Homepage />
        <FooterComponent />
      </main>
    </>
  );
}