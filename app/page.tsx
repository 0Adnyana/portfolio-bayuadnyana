import Header from "@/components/partials/Header"
import Hero from "@/components/partials/Hero";
import AboutMe from "@/components/partials/AboutMe";
import PlaceholderImage from "@/public/placeholderImage.jpg"
import PortfolioCard from "@/components/partials/PortfolioCard";

export default function Home() {
  return (
    <div className="fill-background space-y-20">
      <Header></Header>
      <Hero></Hero>
      <AboutMe
        content="Lorem ipsum dolor sit amet consectetur. Aliquet tincidunt viverra nulla pretium morbi mattis viverra nibh at. A morbi risus proin ultrices donec. Tortor viverra feugiat id nibh gravida. Gravida et dui justo eleifend dictum placerat mus sed vulputate. Amet in amet tempor pretium nulla mauris eros ultricies. Aliquam quam ornare ornare non gravida imperdiet quis sed. Erat condimentum sit commodo ultrices."
        imgSrc={PlaceholderImage}
        imgAlt="placeholder image"/>
      <div className="space-y-2">
        <PortfolioCard 
          imgSrc={PlaceholderImage} 
          imgAlt="placeholder image"
          name="Personal ePortfolio"
          year="2024"
          link="https://instagram.com"
          linkTitle="instagram.com"/>
        <PortfolioCard 
          imgSrc={PlaceholderImage} 
          imgAlt="placeholder image"
          name="Personal ePortfolio"
          year="2024"
          link="https://instagram.com"
          linkTitle="instagram.com"/>
      </div>
      
      
    </div>
  );
}
