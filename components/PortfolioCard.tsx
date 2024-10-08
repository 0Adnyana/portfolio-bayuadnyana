"use client"
import Image from "next/image"
import Link from "./ui/Link"
import React from "react"
import { cn } from "@/lib/utils"
import Subtitle from "./ui/Subtitle"
import BodyText from "./ui/BodyText"

type PortfolioCardProps = {
  imgSrc: string;
  imgAlt: string;
  name: string;
  year: string;
  link: string;
  linkTitle: string;
  description: string;
  client: string;
  children?: React.ReactNode;
}

const PortfolioCard = (props: PortfolioCardProps) => {

  const[isClicked, setClicked] = React.useState(false);

  function handleClick() {
    if (isClicked) {
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
    // div will expand when clicked
    <div className="w-full h-fit mx-auto flex flex-col justify-center rounded-xl bg-secondary ease-in-out duration-200 cursor-pointer text-foreground" onClick={handleClick}>
      <div className="w-full h-16 px-4 space-x-2 flex flex-row items-center justify-between bg-primary rounded-xl drop-shadow-md ease-in-out duration-200 hover:brightness-90">
        <div className="flex flex-row space-x-2 items-center leading-none">
          <p className="font-roboto font-light text-l border-r-[1px] p-2 pl-0 border-inherit">{props.year}</p>
          <Subtitle>{props.name}</Subtitle>
        </div>
        <Link link={props.link}>{props.linkTitle}</Link>
      </div>

      {/* expanded div */}
      <div className={cn("w-full h-fit px-6 py-4 space-x-4 flex flex-row justify-center rounded-xl bg-secondary ", isClicked ? "" : "hidden")}>
        <Image src={props.imgSrc} alt={props.imgAlt} width={320} height={180} className="object-scale-down rounded-xl"></Image>
        <div className="min-h-full max-h-fit flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <BodyText>{props.description}</BodyText>
            <p className="font-bold text-sm">Client: {props.client}</p>
          </div>
          <div className="flex flex-row justify-end space-x-1">
            {props.children}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default PortfolioCard