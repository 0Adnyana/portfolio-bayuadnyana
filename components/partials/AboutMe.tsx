import Image, { StaticImageData } from "next/image";
import SectionTitle from "../ui/SectionTitle";
import AboutMeImage from "@/public/assets/aboutme_image.png";

const AboutMe = () => {
	return (
		<section
			id="about"
			className="md:w-[70%] mx-auto scroll-m-20 flex flex-row border-2 border-background-lighter rounded-xl py-8 px-12 space-x-8"
		>
			<div className="md:w-[75%] min-h-full flex flex-col">
				<SectionTitle title="About Me"></SectionTitle>
				<div className="flex flex-col space-y-4">
					<p className="font-roboto font-normal text-base text-foreground text-justify">
						Hello, I’m Bayu—an IT student, aspiring developer, and lifelong learner with a passion for tech. Currently
						studying Information Technology at ITB STIKOM Bali, I actively contribute to the International Volunteer and
						Programming Club. My self-driven approach to learning has led me to master tools like Adobe Photoshop,
						Premiere Pro, and Figma, and build web apps with NextJS and TailwindCSS, including my web portfolio and a
						Timezone Converter app. With interests in Machine Learning, Cybersecurity, and Competitive Programming, I’m
						committed to growing my skills and exploring new ways to make a meaningful impact in tech.
					</p>
				</div>
			</div>
			<div className="md:w-[25%] flex flex-col justify-center items-center">
				<Image className="object-cover rounded-xl" src={AboutMeImage} alt="placeholder image"></Image>
			</div>
		</section>
	);
};

export default AboutMe;
