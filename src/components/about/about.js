import PlatForm from "./platform";
import TeamMember from "./teamMember";
import aboutBackground from "../../img/about-banner.png";
import { Link, NavLink } from "react-router-dom";
const About = () => {
  return (
    <section className="marginNav">
      <div
        style={{ backgroundImage: `url(${aboutBackground})` }}
        className="aboutBackground py-5"
      >
        <div className="container about">
          <h2>About Us</h2>
          <ul className="">
            <Link className="text-decoration-none" to="/home">
              Home{" "}
            </Link>
            <span> / </span>
            <span> About</span>
          </ul>
        </div>
      </div>
      <section className="container">
        <PlatForm />
        <TeamMember />
        <div className=" my-5 py-5 opacity-0 text-hide">" "</div>
      </section>
    </section>
  );
};

export default About;
