import React from "react";

function About() {
  return (
    <div className="my-5 bg-success bg-opacity-50 me-3">
      <div className="container text-center mb-4">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center">
            Search and Hire Full-time Staff or Freelancers
            <br /> Easily hire talent for your short-term or long-term projects.
            <br />
            Search and instantly get matched with candidates that meet your
            specifications and budget.
          </div>
          <div className="col-6 col-md-4 mt-5">
            <img
              className="img-fluid bg-light"
              src="https://i2.wp.com/sendtask.io/wp-content/uploads/2017/12/freelance-websites.jpg?fit=5000%2C3000&ssl=1"
              alt="developer"
            />
          </div>
        </div>
      </div>
      <hr/>

      <div className="container text-center mb-4 pt-5">
        <div className="row">
          <div className="col-6 col-md-4 my-3">
            <img
              className="img-fluid bg-light"
              src="https://www.webfox.dev/assets/img/blog/A-Guide-to-Freelancer-Marketplace-development-like-Fiverr-and-Upwork/How-does-the-freelancer-marketplace-help-Employers.png"
              alt="developer"
            />
          </div>
          <div className="col-md-8 d-flex align-items-center">
            Schedule an interview with the talent and hire them.
            <br />
            Sign a contract that details the project scope and get started.
          </div>
        </div>
      </div>
      <hr/>

      <div className="container text-center mb-3 pt-5">
        <div className="row">
          <div className="col-md-4 d-flex align-items-center mb-3 mb-md-0">
            Our talents are remote-ready, fluent in collaborative tools, and
            available for your entire project.
          </div>
          <div className="col-md-4 mb-3 mb-md-4">
            <img
              className="img-fluid bg-light"
              src="https://i0.wp.com/geeky.com.ng/wp-content/uploads/2023/02/money-g0e4aa43d8_1280.png?fit=1280%2C915&ssl=1"
              alt="developer"
            />
          </div>
          <div className="col-md-4 d-flex align-items-center">
            Our multilingual and multinational professional staff will also be
            available at any time to support you.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
