import "./home.css";
import myPic from "../../assets/myPic.png";
import CV from "../../assets/Mohamed Ayman.pdf";
import HomeSocial from "./HomeSocial";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="container home-container">
        <h4>Hello I'm</h4>
        <h1>Mohamed Ayman</h1>
           <HomeSocial />
        <h4 className="text-light">Full stack Developer</h4>
        <div className="btns">
          <a href={CV} className="btn" download>
            Download CV
          </a>
          <a href="#" className="btn btn-primary">
            Lets go
          </a>
        </div>
        <div className="me">
          <img src={myPic} alt="my-picture" />
        </div>
        
      </div>

   
    </div>
  );
};

export default Home;
