import Image from "next/image";
import Header from "@/components/partials/Header"
import Hero from "@/components/partials/Hero";

export default function Home() {
  return (
    <div className="fill-background ">
      <Header></Header>
      <Hero></Hero>
    </div>
  );
}
