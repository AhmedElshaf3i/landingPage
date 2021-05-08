import aboutPlatformImg from "../../img/about-image.png";
import vision from "../../img/vision.jpg";
import mission from "../../img/mission.jpg";
import value from "../../img/value.png";
const PlatForm = () => {
  return (
    <div className=" platform my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="about-content">
            <h2>I Pharma </h2>
            <p className="lead text-muted">
              I Pharma is a digital pharma business solutions platform
              connecting pharmacies with a large network of stores, distributors
              and manufacturers to facilitate their day to day supply chain
              objectives related to medicines, cosmetics and medical supplies
              efficiently.
            </p>
          </div>

          <div className="whychoose-block">
            <span className="whychoose-icon">
              <img
                src={vision}
                alt=""
                width="50px"
              />
            </span>
            <h4 className="font-weight-bold">Vision</h4>
            <p className="lead">
              Enhancing the pharmaceutical supply chain to deliver an optimal
              healthcare system.
            </p>
          </div>

          <div className="whychoose-block">
            <span className="whychoose-icon ">
              <img
                src={mission}
                alt=""
                width="50px"
                
              />
            </span>
            <h4 className="font-weight-bold">Mission</h4>
            <p className="lead">
              I Pharma provides a range of digital pharmaceutical business
              solutions connecting pharmacies with suppliers through efficient
              and accurate value chain integration.
            </p>
          </div>
          <div className="whychoose-block">
            <span className="whychoose-icon">
              <img
                src={value}
                alt=""
                width="50px"
              />
            </span>
            <h4 className="font-weight-bold">Values</h4>
            <ul className="stylish-list lead">
              <li>
                <i className="far fa-check-square"></i>
                <strong>Integrity</strong>
                <p className="mb-3">
                  We treat our stakeholders with the utmost trust and
                  transparency
                </p>
              </li>
              <li>
                <i className="far fa-check-square"></i>
                <strong>Agility</strong>
                <p className="mb-3">
                  Our efficient communication enables us to be dynamic
                  organization for future market challenges.
                </p>
              </li>

              <li>
                <i className="far fa-check-square"></i>
                <strong>Customer Centricity</strong>
                <p className="mb-3">
                  Each customer is our focus, and our progress is directly
                  linked to his success.
                </p>
              </li>
              <li>
                <i className="far fa-check-square"></i>
                <strong>Enabling Innovation</strong>
                <p className="mb-3">
                  We are continuously proactive in developing digital
                  pharmaceutical business solutions
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-md-6 lead text-muted ">
          <img src={aboutPlatformImg} className="img-fluid" alt="" />
          <div className="mt-5 lead text-muted ">
            <p>
              I Pharma is a digital solution aimed to resolve current pharma
              supply chain challenges. The current pharmaceutical supply chain
              has many obstacles, which make the reach of medicine difficult
              from a manufacturer to patient. The main problems are lack of
              integration, traditional manual process, low technology
              connection, and limited reach.
              <br />
              <br />I Pharma works on enhancing the connection between suppliers
              and pharmacies by providing a digital platform, where all
              stockholders can manage their business efficiently through
              creating a free-flowing supply chain process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatForm;
