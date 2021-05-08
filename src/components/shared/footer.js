import footerLogo from "../../img/logo2.png";
const Footer = () => {
  return (
    <footer class="footer mt-5" data-black-overlay="8">
      <div class="footer-toparea tm-padding-sm-section">
        <div class="container">
          <div class="row widgets footer-widgets mb-4">
            <div class="col-lg-6 col-md-6 col-12">
              <div class="single-widget widget-info">
                <a href="/" class="widget-info-logo">
                  <img src={footerLogo} height="64px" alt="footer logo" />
                </a>
                <p>
                  I Pharma is a digital pharma business solutions platform
                  connecting pharmacies with a large network of stores,
                  distributors and manufacturers to facilitate their day to day
                  supply chain objectives related to medicines, cosmetics and
                  medical supplies efficiently.
                </p>
                <ul class="widget-info-social">
                  <li>
                    <a href="/">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i class="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12 offset-lg-2">
              <div class="single-widget widget-contact">
                <h5 class="widget-title">Contact Us</h5>
                <ul>
                  <li>
                    <i class="fa fa-map-marker " aria-hidden="true"></i>
                    <p>
                      Address:
                      <a href="/" target="_blank">
                        17 tahrir, Safir Square, Misr El Gedida, Cairo, Egypt
                      </a>
                    </p>
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i>
                    <p>
                      Email:{" "}
                      <a href="mailto:info@IPharma-eg.com" target="_blank">
                        info@IPharma-eg.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <i class="fas fa-phone"></i>
                    <p>
                      <a href="tel:01234567891" target="_blank">
                        01234567891{" "}
                      </a>
                      -
                      <a href="tel:0221234567" target="_blank">
                        {" "}
                        0221234567
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottomarea">
        <div class="container">
          <p class="footer-copyright">I Pharma © 2021. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
