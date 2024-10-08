import NavLink from "../ui/NavLink";


const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="md:w-[70%] mx-auto flex items-center justify-between py-3 bg-background">
        <a href="#home" className="font-playfair_display font-bold text-2xl text-foreground">Bayu Adnyana</a>
        <div className="flex">
          <NavLink title="Home" className="text-foreground hover:bg-foreground hover:text-background" href="#home"/>
          <NavLink title="About" className="text-foreground hover:bg-foreground hover:text-background" href="#about"/>
          <NavLink title="Experience" className="text-foreground hover:bg-foreground hover:text-background" href="#experience"/>
          <NavLink title="Portfolio" className="text-foreground hover:bg-foreground hover:text-background" href="#portfolio"/>
          <NavLink title="Contact" className="text-foreground bg-accent hover:brightness-90" href="#contact"/>
        </div>
      </div>
      <hr className="border-background-lighter"/>

    </header>
  )
}

export default Header;
