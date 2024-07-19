import Image, { StaticImageData } from "next/image";
import SectionTitle from "../ui/SectionTitle";

type AboutMeProps = {
    content: string;
    imgSrc: StaticImageData;
    imgAlt: string;
}

const AboutMe = (props: AboutMeProps) => {
  return (
    <section className="md:w-[70%] mx-auto flex flex-row border-2 border-background-lighter rounded-xl py-8 px-12 space-x-8">
      <div className="md:w-[65%] min-h-full flex flex-col space-y-4">
        <SectionTitle title="About Me"></SectionTitle>
        <p className="font-roboto font-normal text-base text-foreground text-justify">{props.content}</p>
      </div>
      <div className="md:w-[35%] min-h-full flex flex-col justify-center items-center">
        <Image className="object-cover min-h-full rounded-xl" src={props.imgSrc} alt={props.imgAlt}></Image>
      </div>
    </section>
  )
}

export default AboutMe