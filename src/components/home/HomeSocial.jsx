import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const HomeSocial = () => {
  return (
    <div className="home-social">
        <a href="#" target='_blank'><FaLinkedin /></a>
        <a href="#" target='_blank'><FaFacebook /></a>
        <a href="#" target='_blank'><FaYoutube /></a>
        <a href="#" target='_blank'><IoLogoGithub /></a>
    </div>
  )
}

export default HomeSocial