import { GrGithub, GrInstagram, GrLinkedin, GrMail } from "react-icons/gr";
import NavLink from "../ui/NavLink";

const Hero = () => {
  return (
    <section className="md:w-[70%] mx-auto flex items-center justify-between">
      <div className="flex flex-col space-y-4">

        {/* Name and Description */}
        <h1 className="font-playfair_display font-bold text-5xl text-foreground">Bayu Adnyana</h1>
        <p className="font-roboto font-normal text-base text-foreground">I’m a student, video editor, aspiring developer, and deep learning enthusiast.</p>

        {/* Contact Button */}
        <NavLink title="Contact Me" className="text-foreground bg-primary hover:bg-secondary hover:text-foreground-darker"></NavLink>

        {/* SOCIALS LINKS */}
        <div className="flex flex-wrap space-x-4">
          <a href="https://github.com/0Adnyana"><GrGithub className="text-foreground size-6 hover:scale-110 cursor-pointer ease-in-out duration-200" ></GrGithub></a>
          <a href="https://instagram.com/bayu.adnyana0"><GrInstagram className="text-foreground size-6 hover:scale-110 cursor-pointer ease-in-out duration-200"></GrInstagram></a>
          <a href="https://linkedin.com/bayuadnyana"><GrLinkedin className="text-foreground size-6 hover:scale-110 cursor-pointer ease-in-out duration-200"></GrLinkedin></a>
          <a href="https://bayup.adnyana@gmail.com"><GrMail className="text-foreground size-6 hover:scale-110 cursor-pointer ease-in-out duration-200"></GrMail></a>
        </div>
        
      </div>

      <div>
        
      </div>
    </section>
  )
}

export default Hero