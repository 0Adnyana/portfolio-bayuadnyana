"use client"
import Image, {StaticImageData} from "next/image"
import Link from "../ui/Link"
import React from "react"
import { cn } from "@/lib/utils"
import Tag from "../ui/Tag"

type PortfolioCardProps = {
  imgSrc: StaticImageData;
  imgAlt: string;
  name: string;
  year: string;
  link: string;
  linkTitle: string;
}

const PortfolioCard = (props: PortfolioCardProps) => {

  const[isClicked, setClicked] = React.useState(false);

  function handleClick() {
    if (isClicked) {
      setClicked(false);
      console.log("CLICKED FALSE");
    } else {
      setClicked(true);
      console.log("CLICKED TRUE");
    }
  }

  return (
    // div will expand when clicked
    <div className="w-[70%] h-fit mx-auto flex flex-col justify-center rounded-xl bg-secondary ease-in-out duration-200 cursor-pointer text-foreground" onClick={handleClick}>
      <div className="w-full h-16 px-4 space-x-2 flex flex-row items-center bg-primary rounded-xl drop-shadow-md ease-in-out duration-200 hover:brightness-90">
        <div className="w-full flex flex-row items-center space-x-2 leading-none">
          <p className="font-roboto font-light text-l border-r-[1px] p-2 pl-0 border-inherit">{props.year}</p>
          <p className="font-roboto_mono font-medium text-xl">{props.name}</p>
        </div>
        <Link link={props.link}>{props.linkTitle}</Link>
      </div>

      <div className={cn("w-full p-4 space-x-2 flex flex-row items-center rounded-xl bg-secondary ", isClicked ? "" : "hidden")}>
        <Image src={props.imgSrc} alt={props.imgAlt} className="rounded-xl w-[320px] h-[180px]"></Image>
        <div className="w-full h-full flex flex-col">
          <div>
            <div>

            </div>
            <div>

            </div>
          </div>
          <div className="flex flex-row space-x-1">
            <Tag title="Tag"></Tag>
            <Tag title="Tag"></Tag>
            <Tag title="Tag"></Tag>
            <Tag title="Tag"></Tag>

          </div>
        </div>
      </div>
    </div>
    
  )
}

export default PortfolioCard