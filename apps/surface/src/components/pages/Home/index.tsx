import HeroSection from "@/components/shadcn-space/blocks/hero/hero";
import Header from "@/components/shadcn-space/blocks/hero/header";
import BrandSlider from "@/components/shadcn-space/blocks/hero/brand-slider";
import { navigationData } from "@/lib/header.data";
import { brandList } from "@/lib/brand-list.data";
import { avatarList } from "@/lib/hero.data";
import FeatureSection from "../../shadcn-space/blocks/feature";
import AboutAndStats from "../../shadcn-space/blocks/about-us";
import Testimonials from "../../shadcn-space/blocks/testimonial/testimonial";
import Pricing from "../../shadcn-space/blocks/pricing/pricing";
import Faq from "../../shadcn-space/blocks/faq/faq";
import CTA from "../../shadcn-space/blocks/cta/cta";
import Footer from "../../shadcn-space/blocks/footer/footer";

export default function HomePage() {
  return (
    <div className="relative scroll-mt-20" id="home">
      <Header navigationData={navigationData} />
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
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
