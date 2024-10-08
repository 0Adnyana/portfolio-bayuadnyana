'use client'
import SectionTitle from "../ui/SectionTitle"
import ListPortfolio from "./ListPortfolio"
import Button from "../ui/Button"
import { useState } from "react"
import { cn } from "@/lib/utils"

const PortfolioSection = () => {

    const [isTech, setIsTech] = useState(true);

    function handlePortfolioType() {
        if (isTech) {
            setIsTech(false);
        } else {
            setIsTech(true);
        }
    }

    return (
        <section className="w-[70%] mx-auto scroll-m-20 flex flex-col items-center space-y-6" id="portfolio">
            <div className="flex flex-col items-center">
                <SectionTitle title="Portfolio"/>
                <div className="flex flex-row space-x-2 justify-center">
                    <Button className={cn("bg-background-lighter hover:brightness-90", isTech ? "bg-foreground" : "")} onClick={handlePortfolioType}>Tech</Button>
                    <Button className={cn("bg-background-lighter hover:brightness-90", !isTech ? "bg-foreground" : "")} onClick={handlePortfolioType}>Creative</Button>
                </div>
            </div>
            
            <ListPortfolio isTech={isTech} ></ListPortfolio>
        </section>
  )
}

export default PortfolioSection