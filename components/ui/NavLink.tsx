import Button from "./Button"

type NavLinkProps = {
  title: string;
  className?: string;
  href?: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <a href={props.href}>
      <Button className={props.className}>
        {props.title}
      </Button>
    </a>
    
  )
}
export default NavLink