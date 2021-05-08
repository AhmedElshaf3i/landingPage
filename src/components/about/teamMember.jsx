import teamMember1 from "../../img/dryossry.jpg";
const TeamMember = () => {
  return (
    <div classNameName=" my-5">
        <div className="text-center">
            <h2>
            <span className="mainSuppliersHeader">[</span>Team Member
            <span className="mainSuppliersHeader">]</span>
            </h2>
        </div>
      {/* imgs */}

       <div className="row">
       <div className="col-md-4 part1 mt-5">
            <img src={teamMember1} alt="ahmed saber imag" />
            <div className="caption">
                <h2>Dr Yossry Farghaly</h2>
                <div className="captionText">
                    <p>Managing Director</p>
                    <a className="icon1" href="">
                    <i class="fab fa-linkedin color-theme"></i>
                    </a>
                    <a className="icon2" href="">
                    <i class="fa fa-envelope color-theme mx-1"></i>
                    </a>
                </div>
           </div>
        </div>




        <div className="col-md-4 part1 mt-5">
            <img src={teamMember1} alt="ahmed saber imag" />
            <div className="caption">
                <h2>Dr Yossry Farghaly</h2>
                <div className="captionText">
                    <p>Managing Director</p>
                    <a className="icon1" href="">
                    <i class="fab fa-linkedin color-theme"></i>
                    </a>
                    <a className="icon2" href="">
                    <i class="fa fa-envelope color-theme mx-1"></i>
                    </a>
                </div>
           </div>
        </div>




        <div className="col-md-4 part1 mt-5">
            <img src={teamMember1} alt="ahmed saber imag" />
            <div className="caption">
                <h2>Dr Yossry Farghaly</h2>
                <div className="captionText">
                    <p>Managing Director</p>
                    <a className="icon1" href="">
                    <i class="fab fa-linkedin color-theme"></i>
                    </a>
                    <a className="icon2" href="">
                    <i class="fa fa-envelope color-theme mx-1"></i>
                    </a>
                </div>
           </div>
        </div>

       </div>
    </div>
  );
};

export default TeamMember;
