import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assests/2.jpg"

function Contact (){
return(
    <>
     <Navbar/>
     <Hero
     cName="hero-mid"
     heroImg={AboutImg}
     title="Contact"
  
     btnClass="hide"

     />
     </>



)
}
export default Contact;