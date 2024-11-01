import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Feature";
import Footer from "./components/Footer";

export default function Home(){
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Footer/>
    </div>
  )
}