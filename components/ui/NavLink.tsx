type NavLinkProps = {
  title: string;
  className?: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <div className={`max-w-fit font-roboto_mono font-medium text-base mx-1 px-4 py-1.5  hover:scale-105 ease-in-out rounded-xl duration-200 cursor-pointer ${props.className}`}>
        <a href="/">{props.title}</a>
    </div>
  )
}
export default NavLink