import HeroSection from "@/components/blocks/hero/hero";
import Header from "@/components/blocks/hero/header";
import BrandSlider from "@/components/blocks/hero/brand-slider";
import { navigationData } from "@/lib/header.data";
import { brandList } from "@/lib/brand-list.data";
import { avatarList } from "@/lib/hero.data";
import FeatureSection from "../../blocks/feature";
import AboutAndStats from "../../blocks/about-us";
import Testimonials from "../../blocks/testimonial/testimonial";
import Pricing from "../../blocks/pricing/pricing";
import Faq from "../../blocks/faq/faq";
import CTA from "../../blocks/cta/cta";
import Footer from "../../blocks/footer/footer";

export default function HomePage() {
  return (
    <div className="relative scroll-mt-20" id="home">
      <Header navigationData={navigationData} />
      <main>
        <HeroSection avatarList={avatarList} />
        {/* <BrandSlider brandList={brandList} /> */}
        <FeatureSection />
        <AboutAndStats />
        <Testimonials />
        <Pricing />
        <Faq />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
