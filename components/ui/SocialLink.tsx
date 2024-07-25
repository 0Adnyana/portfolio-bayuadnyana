type SocialLinkProps = {
    href: string;
    children: React.ReactNode;
}

const SocialLink = (props: SocialLinkProps) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer" className="text-foreground size-6 hover:scale-110 cursor-pointer ease-in-out duration-200">{props.children}</a>
  )
}

export default SocialLink