import NavLink from "../ui/NavLink";


const Header = () => {
  return (
    <header className="">
      <div className="md:w-[60%] mx-auto flex items-center justify-between py-3 ">
        <a href="/" className="font-playfair_display font-bold text-2xl text-foreground">Bayu Adnyana</a>
        <div className="flex">
          <NavLink title="Home"/>
          <NavLink title="Portfolio"/>
          <NavLink title="About"/>
          <NavLink title="Contact" className="text-foreground bg-accent hover:bg-accent-darker hover:text-foreground-darker"/>
        </div>
      </div>
      <hr className="border-background-lighter"/>

    </header>
  )
}

export default Header;
