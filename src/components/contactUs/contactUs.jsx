
import footerLogo2 from "../../img/kv-contact-us-xs.jpg";
const ContactUs = () => {
  return (
    <section className="marginNav container">
      <div class="row no-gutters flex-wrap align-items-center">
        <div class="col-md-6 mt-5">
          <img src={footerLogo2} className=" mt-5" alt="" />
        </div>

        <div class="offset-1 col-md-5 col-sm-12">
          <div class="row no-gutters pt-25 pb-25 ml-3">
            <div class="container">
              <div class="contact_header pt-5">
                <div class="position-relative row no-gutters justify-content-start">
                  <h2>G</h2>
                  <h3>Get In Touch</h3>
                </div>
                <p>Let's work together.</p>
              </div>

              <div>
                <form id="contact-form">
                  <div class="form-group pb-3">
                    <label>Your Name</label>
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      data-required=""
                    />
                  </div>
                  <div class="form-group pb-3">
                    <label>Your Email</label>
                    <input
                      class="form-control"
                      type="email"
                      name="email"
                      data-required=""
                    />
                  </div>
                  <div class="form-group pb-3">
                    <label>Phone Number</label>
                    <input class="form-control" type="text" name="phone" />
                  </div>
                  <div class="form-group pb-3">
                    <label>Your Message</label>
                    <textarea
                      class="form-control"
                      name="message"
                      data-required=""
                    ></textarea>
                  </div>
                  <div class="form-group mt-2">
                    <button class="btn btn-primary" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
