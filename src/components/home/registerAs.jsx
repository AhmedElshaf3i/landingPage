
import imgPharmacyAccount from "../../img/pharmacy-account.png";
import imgSupplierAccount from "../../img/supplier-account.png";
const RegisterAs = () => {
  return (
    <div className="registerAs mt-5">
      <div className="py-5">
        <div className="container content  ">
          <div className="row no-gutters">
            {/* <!-- div1 --> */}
            <div className="col-md-6">
              <div className="registerAs_div text-center text-white  ">
                {/* <!-- icons  --> */}
                <div className="mb-3 icons d-flex justify-content-center align-items-center  ">
                  {/* <i className="fas fa-check registerAsicons position-absolute  "></i> */}
                  <img
                    src={imgPharmacyAccount}
                    className="img-fluid  registerAsicons position-absolute"
                    alt=""
                  />
                  <div className=" iconCircleregisterAs"></div>
                </div>
                {/* <!-- text --> */}
                <h5 id="WORKS"></h5>
                <h2 className="font-weight-bolder"> Register as Pharmacy</h2>
                <p className="my-3 lead font-weight-normal">
                  Make a free account for your pharmacy and place your order
                  Now!
                </p>
                <button className="btn btn-light text-primary font-weight-bold mt-5 mb-2">
                  Register Now
                </button>
              </div>
            </div>

            {/* <!-- div2 --> */}
            <div className="col-md-6">
              <div className="registerAs_div text-center text-white  ">
                {/* <!-- icons  --> */}
                <div className="mb-3 icons d-flex justify-content-center align-items-center ">
                  {/* <i className="far fa-calendar registerAsicons position-absolute fa-2x "></i> */}
                  <img
                    src={imgSupplierAccount}
                    className="img-fluid  registerAsicons position-absolute"
                    alt=""
                  />
                  <div className=" iconCircleregisterAs"></div>
                </div>
                {/* <!-- text --> */}
                <h5 id="Visted"></h5>

                <h2 className="font-weight-bolder">Register as Supplier</h2>
                <p className="my-3 lead font-weight-normal">
                  Make account for your distribution company/ warehouse to reach
                  more pharmacies.
                </p>
                <button className="btn btn-light text-primary font-weight-bold mt-5 mb-2">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterAs;
