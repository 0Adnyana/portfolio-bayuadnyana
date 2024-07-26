type SocialLinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const SocialLink = (props: SocialLinkProps) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer" className={`text-foreground hover:scale-110 cursor-pointer ease-in-out duration-200 ${props.className}`}>{props.children}</a>
  )
}

export default SocialLink