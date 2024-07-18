type NavLinkProps = {
  title: string;
  className?: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <div className={`font-roboto_mono font-medium text-base mx-1 px-4 py-2 text-foreground hover:bg-foreground hover:text-background ease-in-out rounded-2xl duration-200 cursor-pointer ${props.className}`}>
        <a href="/">{props.title}</a>
    </div>
  )
}
export default NavLink