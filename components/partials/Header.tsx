import NavLink from "../ui/NavLink";


const Header = () => {
  return (
    <header>
      <div className="md:w-[70%] mx-auto flex items-center justify-between py-3">
        <a href="/" className="font-playfair_display font-bold text-2xl text-foreground">Bayu Adnyana</a>
        <div className="flex">
          <NavLink title="Home" className="text-foreground hover:bg-foreground hover:text-background"/>
          <NavLink title="Portfolio" className="text-foreground hover:bg-foreground hover:text-background"/>
          <NavLink title="About" className="text-foreground hover:bg-foreground hover:text-background"/>
          <NavLink title="Contact" className="text-foreground bg-accent hover:brightness-90"/>
        </div>
      </div>
      <hr className="border-background-lighter"/>

    </header>
  )
}

export default Header;
