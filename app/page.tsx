import Header from "@/components/partials/Header";
import Hero from "@/components/partials/Hero";
import AboutMe from "@/components/partials/AboutMe";

import ExperienceSection from "@/components/partials/ExperienceSection";
import PortfolioSection from "@/components/partials/PortfolioSection";
import ContactSection from "@/components/partials/ContactSection";
import Footer from "@/components/partials/Footer";

export default function Home() {
	return (
		<div className="fill-background pt-36">
			<Header></Header>
			<section className="space-y-24 h-full pb-12">
				<Hero></Hero>
				<AboutMe />
				<ExperienceSection></ExperienceSection>
				<PortfolioSection></PortfolioSection>
				<ContactSection></ContactSection>
			</section>
			<Footer></Footer>
		</div>
	);
}
