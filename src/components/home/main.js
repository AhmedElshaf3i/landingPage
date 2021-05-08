import { Link } from "react-router-dom";
import mainImg from "../../img/hero.png";
import mainFootImg1 from "../../img/easy-shopping.png";
import mainFootImg2 from "../../img/order.png";
import mainFootImg3 from "../../img/collection.png";
import RegisterAs from "./registerAs";
import Search from "./search";
import MainSuppliers from "./mainSuppliers";
import News from "./news";
const Main = () => {
  return (
    <section className="marginNav ">
      <div className="container">
        <div className="row  no-gutters">
          {/* main section header */}
          <div className="col-md-6">
            <div className=" my-5">
              <h1 className="mainHeader1 color-them">
                THE FIRST VIRTUAL MALL FOR PHARMACIES
              </h1>
              <h2 className="mainHeader2 mt-5">
                One-stop shop for all pharmacies' needs
              </h2>
              {/* <Link className="btn btn-secondary text-white px-4 py-2 mt-5">
                Order Online
              </Link> */}
            </div>
          </div>
          {/* main secion image */}
          <div className="col-md-6">
            <img className="img-fluid" src={mainImg} alt="" />
          </div>
        </div>
        {/* main section icons */}
        <div className="row no-gutters mt-5  text-center">
          {/*  */}
          <div className="col-md-4">
            <div className="mainIconsImgOuter  mx-auto mb-4 shadow ">
              <img
                className="img-fluid mainIconsImg"
                src={mainFootImg1}
                alt=""
              />
            </div>
            <h5 className="mainIconsText color-them">
              Easy Shopping Experience
            </h5>
          </div>
          {/*  */}
          <div className="col-md-4">
            <div className="mainIconsImgOuter  mx-auto mb-4 shadow ">
              <img
                className="img-fluid mainIconsImg"
                src={mainFootImg2}
                alt=""
              />
            </div>
            <h5 className="mainIconsText color-them">
              Easy Shopping Experience
            </h5>
          </div>
          {/*  */}
          <div className="col-md-4">
            <div className="mainIconsImgOuter  mx-auto mb-4 shadow ">
              <img
                className="img-fluid mainIconsImg"
                src={mainFootImg3}
                alt=""
              />
            </div>
            <h5 className="mainIconsText color-them">
              Easy Shopping Experience
            </h5>
          </div>
        </div>
      </div>
      <RegisterAs />
      <Search />
      <News />
      <MainSuppliers />
    </section>
  );
};

export default Main;
