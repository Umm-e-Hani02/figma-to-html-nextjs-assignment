import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blog from "./components/Blog";
import Featured from "./components/Feature";
import Footer from "./components/Footer";

export default function Home(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Blog/>
      <Featured/>
      <Footer/>
    </div>
  )
}