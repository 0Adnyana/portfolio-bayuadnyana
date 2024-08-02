import Header from "@/components/partials/Header";
import Hero from "@/components/partials/Hero";
import AboutMe from "@/components/partials/AboutMe";
import AboutMeImage from "@/public/assets/aboutme_image.png";
import ExperienceSection from "@/components/partials/ExperienceSection";
import PortfolioSection from "@/components/partials/PortfolioSection"
import ContactSection from "@/components/partials/ContactSection";
import Footer from "@/components/partials/Footer";

export default function Home() {
  return (
    <div className="fill-background pt-36">
      <Header></Header>
      <section className="space-y-24 h-full pb-12">
        <Hero></Hero>
        <AboutMe
          content="Lorem ipsum dolor sit amet consectetur. Aliquet tincidunt viverra nulla pretium morbi mattis viverra nibh at. A morbi risus proin ultrices donec. Tortor viverra feugiat id nibh gravida. Gravida et dui justo eleifend dictum placerat mus sed vulputate. Amet in amet tempor pretium nulla mauris eros ultricies. Aliquam quam ornare ornare non gravida imperdiet quis sed. Erat condimentum sit commodo ultrices."
          imgSrc={AboutMeImage}
          imgAlt="placeholder image"/>
        <ExperienceSection></ExperienceSection>
        <PortfolioSection></PortfolioSection>
        <ContactSection></ContactSection>
      </section>
      <Footer></Footer>
    </div>
  );
}
