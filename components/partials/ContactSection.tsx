import SectionTitle from "../ui/SectionTitle"
import Subtitle from "../ui/Subtitle"
import BodyText from "../ui/BodyText"
import SocialLink from "../ui/SocialLink"
import Button from "../ui/Button"
import { GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";


const ContactSection = () => {
  return (
    <section className="w-fit mx-auto scroll-m-20 flex flex-row border-background-lighter border-2 rounded-xl py-8 px-12 space-x-8 text-foreground" id="contact">
      
      {/* Message box */}
      <div className="w-96 space-y-3">
        <SectionTitle title="Send me a message!"></SectionTitle>
        <form action="" className="flex flex-col space-y-3">
          <input type="text" placeholder="Name" className="placeholder:pl-1 bg-background-lighter p-1"/>
          <input type="text" placeholder="Email" className="placeholder:pl-1 bg-background-lighter p-1"/>
          <textarea name="" id="" placeholder="Message" className="h-32 placeholder:pl-1 bg-background-lighter p-1 resize-none"></textarea>
          <Button className="bg-accent max-w-full">Send message</Button>
        </form>
      </div>
      
      {/* Contact Information */}
      <div className="w-fit flex flex-col justify-between">
        <div className="space-y-2">
          <Subtitle>Contact</Subtitle>
          <BodyText className="leading-none">bayup.adnyana@gmail.com</BodyText>
        </div>
        <div className="space-y-2">
          <Subtitle>Based in</Subtitle>
          <BodyText className="leading-none">Bali, Indonesia</BodyText>
        </div>
        
        {/* Social Links */}
        <div className="space-y-2">
          <Subtitle>Connect</Subtitle>
          <div className="space-y-2">
            <SocialLink href="https://linkedin.com/in/bayuadnyana" className="flex flex-row space-x-1 items-center">
              <GrLinkedin className="size-6"></GrLinkedin>
              <BodyText>bayuadnyana</BodyText>
            </SocialLink>
            <SocialLink href="https://instagram.com/bayu.adnyana0" className="flex flex-row space-x-1 items-center">
              <GrInstagram className="size-6"></GrInstagram>
              <BodyText>bayu.adnyana0</BodyText>
            </SocialLink>
            <SocialLink href="https://github.com/0Adnyana" className="flex flex-row space-x-1 items-center">
              <GrGithub className="size-6"></GrGithub>
              <BodyText>0Adnyana</BodyText>
            </SocialLink>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default ContactSection