import drug3 from "../../img/drug3.jpg";
import drug4 from "../../img/drug4.jpg";
import drug5 from "../../img/drug5.jpg";

const News = () => {
  return (
    <div className="text-center mybg_gray py-5">
      <h2>
        <span className="mainSuppliersHeader">[</span>News
        <span className="mainSuppliersHeader">]</span>
      </h2>

      <div className="container mt-5">
        <div className="row">
          {/* <!-- div1 --> */}
          <div className="news_item col-md-4 ">
            {/* <!-- img --> */}
            <div className="portif_img overflow-hidden">
              <img className="img-fluid" src={drug5} />
            </div>

            {/* <!-- text  --> */}
            <div className="py-4 px-3 bg-white position-relative">
              <h5 className="mr-4">
                Moderna Releases Positive Initial COVID-19 Vaccine Booster Data
                Against Variants of Concern
              </h5>
              <div>
                <span className="text-info">Covid-19</span>
                <span>/ May 07, 2021 </span>
              </div>

              {/* <!-- pluse icon  --> */}
              <a
                href="#"
                className="iconpluse row align-items-center justify-content-center"
              >
                <div className="fas fa-plus fa-lg position-absolute "></div>
                {/* <!-- circle  --> */}
                <div className="pluseCircleIcon"></div>
              </a>
            </div>
            {/* <!-- end div1 --> */}
          </div>

          {/* <!-- div2 --> */}
          <div className="news_item col-md-4 ">
            {/* <!-- img --> */}
            <div className="portif_img overflow-hidden">
              <img className="img-fluid" src={drug4} />
            </div>

            {/* <!-- text  --> */}
            <div className="py-4 px-3 bg-white position-relative">
              <h5 className="mr-4">Lorem impsum dolor</h5>
              <div>
                <span className="text-info">I Pharma</span>
                <span>/ 18 Sep. 2018 </span>
              </div>

              {/* <!-- pluse icon  --> */}
              <a
                href="#"
                className="iconpluse row align-items-center justify-content-center"
              >
                <div className="fas fa-plus fa-lg position-absolute "></div>
                {/* <!-- circle  --> */}
                <div className="pluseCircleIcon"></div>
              </a>
            </div>
            {/* <!-- end div2 --> */}
          </div>

          {/* <!-- div3 --> */}
          <div className="news_item col-md-4 ">
            {/* <!-- img --> */}
            <div className="portif_img overflow-hidden">
              <img className="img-fluid" src={drug3} />
            </div>

            {/* <!-- text  --> */}
            <div className="py-4 px-3 bg-white position-relative">
              <h5 className="mr-4">Lorem impsum dolor</h5>
              <div>
                <span className="text-info">I Pharma</span>
                <span>/ 18 Sep. 2018 </span>
              </div>

              {/* <!-- pluse icon  --> */}
              <a
                href="#"
                className="iconpluse row align-items-center justify-content-center"
              >
                <div className="fas fa-plus fa-lg position-absolute "></div>
                {/* <!-- circle  --> */}
                <div className="pluseCircleIcon"></div>
              </a>
            </div>
            {/* <!-- end div3 --> */}
          </div>

          {/* <!-- div4 --> */}
          <div className="news_item col-md-4 ">
            {/* <!-- img --> */}
            <div className="portif_img overflow-hidden">
              <img className="img-fluid" src={drug4} />
            </div>

            {/* <!-- text  --> */}
            <div className="py-4 px-3 bg-white position-relative">
              <h5 className="mr-4">Lorem impsum dolor</h5>
              <div>
                <span className="text-info">I Pharma</span>
                <span>/ 18 Sep. 2018 </span>
              </div>

              {/* <!-- pluse icon  --> */}
              <a
                href="#"
                className="iconpluse row align-items-center justify-content-center"
              >
                <div className="fas fa-plus fa-lg position-absolute "></div>
                {/* <!-- circle  --> */}
                <div className="pluseCircleIcon"></div>
              </a>
            </div>
            {/* <!-- end div4 --> */}
          </div>

          {/* <!-- div5 --> */}
          <div className="news_item col-md-4 ">
            {/* <!-- img --> */}
            <div className="portif_img overflow-hidden">
              <img className="img-fluid" src={drug5} />
            </div>

            {/* <!-- text  --> */}
            <div className="py-4 px-3 bg-white position-relative">
              <h5 className="mr-4">Lorem impsum dolor</h5>
              <div>
                <span className="text-info">I Pharma</span>
                <span>/ 18 Sep. 2018 </span>
              </div>

              {/* <!-- pluse icon  --> */}
              <a
                href="#"
                className="iconpluse row align-items-center justify-content-center"
              >
                <div className="fas fa-plus fa-lg position-absolute "></div>
                {/* <!-- circle  --> */}
                <div className="pluseCircleIcon"></div>
              </a>
            </div>
            {/* <!-- end div5 --> */}
          </div>

          {/* <!-- div6 --> */}
          <div className="news_item col-md-4 ">
            {/* <!-- img --> */}
            <div className="portif_img overflow-hidden">
              <img className="img-fluid" src={drug3} />
            </div>

            {/* <!-- text  --> */}
            <div className="py-4 px-3 bg-white position-relative">
              <h5 className="mr-4">Lorem impsum dolor</h5>
              <div>
                <span className="text-info">I Pharma</span>
                <span>/ 18 Sep. 2018 </span>
              </div>

              {/* <!-- pluse icon  --> */}
              <a
                href="#"
                className="iconpluse row align-items-center justify-content-center"
              >
                <div className="fas fa-plus fa-lg position-absolute "></div>
                {/* <!-- circle  --> */}
                <div className="pluseCircleIcon"></div>
              </a>
            </div>
            {/* <!-- end div6 --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
