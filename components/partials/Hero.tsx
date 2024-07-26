import { GrGithub, GrInstagram, GrLinkedin, GrMail } from "react-icons/gr";
import NavLink from "../ui/NavLink";
import Image from "next/image";
import ProfilePicture from "@/public/profilePicture.png"
import SocialLink from "../ui/SocialLink";

const Hero = () => {
  return (
    <section className="md:w-[70%] mx-auto flex flex-row items-center justify-between">
      <div className="flex flex-col space-y-4">
        {/* Name and Description */}
        <h1 className="font-playfair_display font-bold text-5xl text-foreground">Bayu Adnyana</h1>
        <p className="font-roboto font-normal text-lg text-foreground">I’m a student, video editor, aspiring developer, and deep learning enthusiast.</p>

        {/* Contact Button */}
        <NavLink title="Contact Me" className="text-foreground bg-primary hover:brightness-90"></NavLink>

        {/* SOCIALS LINKS */}
        <div className="flex flex-row space-x-4">
          <SocialLink href="https://github.com/0Adnyana">
            <GrGithub className="size-6"/>
          </SocialLink>
          <SocialLink href="https://instagram.com/bayu.adnyana0">
            <GrInstagram className="size-6"/>
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/bayuadnyana">
            <GrLinkedin className="size-6"/>
          </SocialLink><SocialLink href="https://bayup.adnyana@gmail.com">
            <GrMail className="size-6"/>
          </SocialLink>
        </div>
      </div>

      {/* Profile Picture */}
      <div className="group sm:size-56 md:size-56 md:shrink-0 relative flex items-center justify-center">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[75%] border-2 border-foreground border-b-0 rounded-xl bg-opacity-0 z-0 group-hover:border-primary ease-in-out duration-200"></div>
        <Image 
          src={ProfilePicture} 
          alt="profile picture" 
          className="z-10 ease-in-out duration-300 brightness-[90%] group-hover:scale-[104%]" 
        />
      </div>
    </section>
  )
}

export default Hero