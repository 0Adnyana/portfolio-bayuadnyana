import Button from "./Button"

type NavLinkProps = {
  title: string;
  className?: string;
  href?: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <Button className={props.className}>
      <a href={props.href}>{props.title}</a>
    </Button>
  )
}
export default NavLink