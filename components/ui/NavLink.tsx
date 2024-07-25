import Button from "./Button"

type NavLinkProps = {
  title: string;
  className?: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <Button className={props.className}>
      <a href="">{props.title}</a>
    </Button>
  )
}
export default NavLink