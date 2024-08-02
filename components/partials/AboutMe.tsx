import Image, { StaticImageData } from "next/image";
import SectionTitle from "../ui/SectionTitle";

type AboutMeProps = {
    content: string;
    imgSrc: StaticImageData;
    imgAlt: string;
}

const AboutMe = (props: AboutMeProps) => {
  return (
    <section id="about" className="md:w-[70%] mx-auto scroll-m-20 flex flex-row border-2 border-background-lighter rounded-xl py-8 px-12 space-x-8">
      <div className="md:w-[75%] min-h-full flex flex-col">
        <SectionTitle title="About Me"></SectionTitle>
        <p className="font-roboto font-normal text-base text-foreground text-justify">{props.content}</p>
      </div>
      <div className="md:w-[25%] flex flex-col justify-center items-center">
        <Image className="object-cover rounded-xl" src={props.imgSrc} alt={props.imgAlt}></Image>
      </div>
    </section>
  )
}

export default AboutMe