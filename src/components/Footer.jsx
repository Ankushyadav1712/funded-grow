import React from "react";

const Footer = () => {
  return (
    <div className="continer ml-3 border-top mt-5">
      <div className="row mt-5">
        <div className="col-4">
          <div className=" text-2xl font-bold mt-2 text-black ">
            Funded{" "}
            <span className="border-2 border-green-500 text-green-500 px-2 py-1 rounded">
              Grow
            </span>
            <p className="m-2 mt-5">
              &copy; 2024 Funded Grow Broking Ltd.All rights reserved.
            </p>
          </div>
        </div>
        <div className="col">
          <p>Company</p>
          <a href="" className="no-underline">
            About
          </a>
          <br />
          <a href="" className="no-underline">
            Product
          </a>
          <br />
          <a href="" className="no-underline">
            Pricing
          </a>
          <br />
          <a href="" className="no-underline">
            Careers
          </a>
          <br />
          <a href="" className="no-underline">
            Press & media
          </a>
          <br />
        </div>
        <div className="col">
          <p>Support</p>
          <a href="" className="no-underline">
            Contact
          </a>
          <br />
          <a href="" className="no-underline">
            Support Portal
          </a>
          <br />
          <a href="" className="no-underline">
            Pricing
          </a>
          <br />
          <a href="" className="no-underline">
            List of charges
          </a>
          <br />
          <a href="" className="no-underline">
            Downloads & resources
          </a>
          <br />
        </div>
        <div className="col">
          <p>Account</p>
          <a href="" className="no-underline">
            Open an account
          </a>
          <br />
          <a href="" className="no-underline">
            Fund transfer
          </a>
          <br />
          <a href="" className="no-underline">
            90 days challenge
          </a>
        </div>
      </div>
      <div>
        {" "}
        <p className="font-bold text-black text-4xl mt-5">Disclaimer</p>
        Investments in securities market are subject to market risk, read all
        the related documents carefully before investing. We collect, retain,
        and use your contact information for legitimate business purposes only,
        to contact you and to provide you information & latest updates regarding
        our products & services. We do not sell or rent your contact information
        to third parties. Please note that by submitting the above-mentioned
        details, you are authorizing us to Call/SMS you even though you may be
        registered under DND. We shall Call/SMS you for a period of 12 months.
      </div>
    </div>
  );
};

export default Footer;
