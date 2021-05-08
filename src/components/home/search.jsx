import searchProduct from "../../img/drugs.png";
import imgSupplierAccount from "../../img/supplier-account2.png";
const Search = () => {
  return (
    <section className=" searchSection">
      <div className="container py-5">
        <div className="row text-center justify-content-around">
          {/* search product */}
          <div className="col-md-5">
            <div className="searchIcon mx-auto  mb-5">
              <img src={searchProduct} className="img-fluid" alt="" />
            </div>
            <h3 className="my-3">Search for product</h3>
            <p className="font-weight-lighter">
              Search for the product you need and find out which suppliers can
              provide.
            </p>
            <div class="form-group position-relative">
              <input
                class="form-control form-control-lg pl-5"
                type="text"
                placeholder="Product Name"
              />
              <div className="faSearch">
                <i class="fas fa-search"></i>
              </div>
            </div>
          </div>
          {/* search supplier */}
          <div className="offset-2 col-md-5">
            <div className="searchIcon mx-auto  mb-4">
              <img src={imgSupplierAccount} className="img-fluid" alt="" />
            </div>
            <h3 className="my-3">Search for Supplier</h3>
            <p className=" font-weight-lighter">
              Search for the supplier you need to make your order from
            </p>
            <div class="form-group position-relative">
              <input
                class="form-control form-control-lg pl-5"
                type="text"
                placeholder="Supplier Name"
              />
              <div className="faSearch">
                <i class="fas fa-search"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
