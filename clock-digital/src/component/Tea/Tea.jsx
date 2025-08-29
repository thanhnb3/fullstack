import BackHome from "../BackHome.jsx";
import Hero from "./Hero.jsx";
import Logo from "./Logo.jsx";
import Product from "./Product.jsx";
import Slogan from "./Slogan.jsx";
import Nav from "./css/Nav.jsx";
import Features from "./Features.jsx";
import BestSeller from "./BestSeller.jsx";

// Main component
export default function Tea() {
  return (
    <>
      <BackHome />
      <Nav />
      <Hero />
      <Logo />
      <Product />
      <Slogan />
      <Features />
      <BestSeller />
      <div className="h-screen"></div>
    </>
  );
}
