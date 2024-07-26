import Input from "../ui/Input"
import SectionTitle from "../ui/SectionTitle"
import Subtitle from "../ui/Subtitle"
import BodyText from "../ui/BodyText"
import SocialLink from "../ui/SocialLink"
import Button from "../ui/Button"
import { GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";


const ContactSection = () => {
  return (
    <section className="w-[60%] mx-auto flex flex-row border-background-lighter border-2 rounded-xl py-8 px-12 space-x-8 text-foreground" id="contact">
      <div className="w-[60%] flex flex-col space-y-3">
            <SectionTitle title="Send me a message!"></SectionTitle>
            <Input className="border-b-2"></Input>
            <Input className="border-b-2"></Input>
            <Input className="h-32"></Input>
            <Button className="bg-accent max-w-full">Send message</Button>
      </div>
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
          <Subtitle>Contact</Subtitle>
          <BodyText className="leading-none">bayup.adnyana@gmail.com</BodyText>
        </div>
        <div className="space-y-2">
          <Subtitle>Based in</Subtitle>
          <BodyText className="leading-none">Bali, Indonesia</BodyText>
        </div>
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