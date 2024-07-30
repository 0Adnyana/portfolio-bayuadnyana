'use client'
import type { NextPage } from 'next'
import SectionTitle from "../ui/SectionTitle"
import Subtitle from "../ui/Subtitle"
import BodyText from "../ui/BodyText"
import SocialLink from "../ui/SocialLink"
import { GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";
import { FormEvent, useState } from "react"


const ContactSection: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      let form = {
          name,
          email,
          message
      }

      const rawResponse = await fetch('/api/submit.ts', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
      });
      const content = await rawResponse.json();

      // print to screen
      alert(content.data.tableRange)

      // Reset the form fields
      setMessage('')
      setName('')
      setEmail('')
  }

  return (
    <section className="w-fit mx-auto scroll-m-20 flex flex-row border-background-lighter border-2 rounded-xl py-8 px-12 space-x-8 text-foreground" id="contact">
      
      {/* Message box */}
      <div className="w-96 space-y-3">
        <SectionTitle title="Send me a message!"></SectionTitle>
        <form action="" className="flex flex-col space-y-3" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your name" className="placeholder:pl-1 bg-background-lighter p-1" value={name} onChange={e => setName(e.target.value)} name="name" id="name"/>

          <input type="email" placeholder="Your email" className="placeholder:pl-1 bg-background-lighter p-1" value={email} onChange={e => setEmail(e.target.value)} name="email" id="email"/>

          <textarea placeholder="Your message" className="h-32 placeholder:pl-1 bg-background-lighter p-1 resize-none" value={message} onChange={e => setMessage(e.target.value)} id="message"></textarea>

          <button className="font-roboto_mono font-medium text-base mx-1 px-4 py-1.5  hover:scale-105 ease-in-out rounded-xl duration-200 cursor-pointer bg-accent max-w-full" type-submit>Send message</button>
          {/* <Button className="bg-accent max-w-full" type="submit">Send message</Button> */}
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