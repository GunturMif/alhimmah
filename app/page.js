import ContactUs from "@/components/contactUs/ContactUs";
import HeroSlider from "@/components/heroSlider/HeroSlider";
import Services from "@/components/services/Services";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Vision from "@/components/vision/Vision";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <Vision />
      <Services />
      <ContactUs />
      <Footer />
    </main>
  );
}
