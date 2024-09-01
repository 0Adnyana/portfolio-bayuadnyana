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
						I’m Bayu, an IT student, aspiring developer, tech enthusiast, and most importantly, a lifelong learner. I’m
						pursuing my degree in Information Technology at ITB STIKOM Bali, where I’m actively involved in the
						International Volunteer and Programming Club. Beyond formal education, I’m a dedicated self-learner,
						constantly seeking online resources to expand my knowledge and apply it to real-world projects. This drive
						has led me to master creative software like Adobe Photoshop, Adobe Premiere Pro, and Figma, as well as
						develop web apps using frameworks such as NextJS and TailwindCSS—tools I’ve used in creating my web
						portfolio and a Timezone Converter app.
					</p>
					<p className="font-roboto font-normal text-base text-foreground text-justify">
						Driven by my belief in learning a little bit of everything in tech, I’ve also cultivated an interest in
						Machine Learning and Cybersecurity, which I find both fascinating and full of potential. My passion for
						problem-solving extends to Competitive Programming on platforms like LeetCode, and it has sparked a growing
						curiosity about Capture the Flag (CTF) challenges. As I continue to hone my skills in programming and
						technology, I’m committed to exploring these fields further and making meaningful contributions in the
						future.
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
