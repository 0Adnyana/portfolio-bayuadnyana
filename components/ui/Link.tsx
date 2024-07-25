import { RiExternalLinkLine } from "react-icons/ri";

type LinkProps = {
  link: string;
  children: React.ReactNode;
}

const Link = (props: LinkProps) => {
  return (
    <a className="flex flex-row items-center italic underline font-roboto font-normal text-base -translate-y-0.5 hover:brightness-75 ease-in-out duration-200" href={props.link} target="_blank" rel="noopener noreferrer">{props.children} <RiExternalLinkLine className="ml-0.5 size-4 translate-y-0.5"></RiExternalLinkLine></a>
  )
}

export default Link